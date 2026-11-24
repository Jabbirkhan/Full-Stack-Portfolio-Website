import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';
import { debounce } from 'lodash';
import Pagination from '../components/Pagination.jsx';
import Loader from '../components/Loader.jsx';

const ProjectList = () => {

  const { authState } = useContext(Context);

  const [word, setword] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [projects, setProjects] = useState([]);
  const [totalProjects, setTotalProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loader, setLoader] = useState(false);

  // const projectCategories = useMemo(() => {
  //   return [...new Set(allProjects.map((p) => p.category))];
  // }, [allProjects]);

  const handleSearch = useMemo(() =>
    debounce((text) => {
      setword(text);
      setPage(1);
    }, 1000), []
  );

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    }
  }, [handleSearch]);

  // const filterProjects = useMemo(() => {
  //   let projectsCopy = word || selectedCategory ? [...allProjects] : [...projects];
  //   if (word) {
  //     projectsCopy = projectsCopy.filter((p) => p.title.toLowerCase().includes(word.toLowerCase()));
  //   }
  //   if (selectedCategory) {
  //     projectsCopy = projectsCopy.filter((p) => p.category === selectedCategory);
  //   }
  //   return projectsCopy
  // }, [word, selectedCategory, allProjects]);


  const handleDelete = async (projectId) => {
    try {
      setLoader(true);
      const response = await axiosInstance.delete(`/api/v1/admin/deleteproject/${projectId}`);
      if (response.data.success) {
        toast.success("Project deleted successfully");
        // Optionally, you can refresh the project list or remove the deleted project from the state
        setProjects(prev => prev.filter(project => project._id !== projectId));
      }
    } catch (error) {
      // Handle error, e.g., show a toast notification
      toast.error(error.response?.data?.message || "Failed to delete project. Please try again.");
    } finally {
      setLoader(false);
    }
  }

  const getAllProjects = async (page) => {
    try {
      setLoader(true);

      const params = new URLSearchParams();

      params.append('page', page);
      params.append('limit', 1);

      if (selectedCategory) {
        params.append('category', selectedCategory);
      }

      if (word) {
        params.append('search', word);
      }

      const response = await axiosInstance.get(`/api/v1/admin/allprojects?${params.toString()}`);
      if (response.data.success) {
        setProjects(response.data.projects);
        setCategories(response.data.categories);
        setTotalProjects(response.data.totalProjects);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    if (authState === 'authenticated') {
      getAllProjects(page);
    }
  }, [authState, page, selectedCategory, word]);

  // if (projects.length === 0) {
  //   return (
  //     <div className='w-full h-screen flex justify-center items-center bg-gray-900'>
  //       <div className='flex flex-col'>
  //         <h2 className='mb-5 text-white'>No projects exist yet</h2>
  //         <Link to='/' className='px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200'>+ Create new project</Link>
  //       </div>
  //     </div>
  //   );
  // }

  if (loader || projects.length === 0) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">

      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link to='/' className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">New Project</Link>
        </div>

        <div className='flex justify-between items-center gap-2 mb-4'>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              const value = e.target.value;

              setSearchInput(value);
              handleSearch(value);
            }}
            placeholder="Search projects"
            className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='bg-gray-800 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="">All</option>
            {
              categories.map((category, index) => (
                <option key={index} value={category} >{category}</option>
              ))
            }
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left px-4 py-2">Thumbnail</th>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">Category</th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="bg-gray-800 rounded-lg">
                  <td className="px-4 py-2">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{project.title}</td>
                  <td className="px-4 py-2">{project.category}</td>
                  <td className="flex gap-2 mt-2 py-2">
                    <button onClick={() => { handleDelete(project._id) }} className="text-red-500 hover:underline">Delete</button>
                    <Link to={`/updateproject/${project._id}`} className="text-yellow-500 hover:underline">Update</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <div className='my-10'>
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      </div>

    </div>
  )
}

export default ProjectList
