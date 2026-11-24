import React from 'react'
import { useState, useContext } from 'react';
import upload from '../assets/upload_area.png';
import { toast } from 'react-toastify';
import { Context } from '../context/Context';
import Loader from '../components/Loader';
import axiosInstance from '../utils/axiosInstance.js';

const AddProject = () => {

  const { authState, setProjects, navigate } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("HTML and CSS")
  const [githubUrl, setGithubUrl] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [latest, setLatest] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(authState !== 'authenticated'){
        return navigate('/login')
      }
      setLoading(true);
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("githubUrl", githubUrl);
      formData.append("projectUrl", projectUrl);
      formData.append("latest", latest);
      formData.append("comingSoon", comingSoon);

      formData.append("technologies", JSON.stringify(technologies));

      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      const response = await axiosInstance.post(`/api/v1/admin/addproject`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setProjects((prev)=>[...prev, response.data.project]);
        navigate('/projectlist');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setTitle("");
        setDescription("");
        setCategory("HTML and CSS");
        setGithubUrl("");
        setProjectUrl("");
        setTechnologies([]);
        setLatest(false);
        setComingSoon(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred while adding the project.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Add Project</h1>
        <p className="text-gray-400 mb-6">Manage your project details here.</p>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-sm mb-2">Select Images - At least two</label>
            <div className='flex flex-wrap gap-4'>
              <label htmlFor="image1">
                <img className="w-20 h-20 m-2" src={!image1 ? upload : URL.createObjectURL(image1)} alt="upload-area" />
                <input type="file" onChange={(e) => { setImage1(e.target.files[0]) }} id='image1' hidden />
              </label>
              <label htmlFor="image2">
                <img className="w-20 h-20 m-2" src={!image2 ? upload : URL.createObjectURL(image2)} alt="upload-area" />
                <input type="file" onChange={(e) => { setImage2(e.target.files[0]) }} id='image2' hidden />
              </label>
              <label htmlFor="image3">
                <img className="w-20 h-20 m-2" src={!image3 ? upload : URL.createObjectURL(image3)} alt="upload-area" />
                <input type="file" onChange={(e) => { setImage3(e.target.files[0]) }} id='image3' hidden />
              </label>
              <label htmlFor="image4">
                <img className="w-20 h-20 m-2" src={!image4 ? upload : URL.createObjectURL(image4)} alt="upload-area" />
                <input type="file" onChange={(e) => { setImage4(e.target.files[0]) }} id='image4' hidden />
              </label>

            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Project Title</label>
            <input
              type="text"
              placeholder="Enter project title"
              onChange={(e)=> {setTitle(e.target.value)}}
              value={title}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Project Description</label>
            <textarea
              rows="4"
              placeholder="Enter description"
              onChange={(e)=> {setDescription(e.target.value)}}
              value={description}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <p className='block text-sm mb-2'>Project Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className='bg-gray-800 rounded-lg px-4 py-2 outline-none text-white'>
              <option value="HTML and CSS">HTML and CSS</option>
              <option value="React">React</option>
              <option value="Next">Next</option>
              <option value="MERN STACK">MERN STACK</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Technologies Used</label>
            <div className='flex flex-wrap gap-3 text-white'>
              <div onClick={() => { setTechnologies(prev => prev.includes("HTML") ? prev.filter(item => item !== "HTML") : [...prev, "HTML"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("HTML") ? 'bg-blue-500' : 'bg-gray-800'}`}>HTML</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("CSS") ? prev.filter(item => item !== "CSS") : [...prev, "CSS"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("CSS") ? 'bg-blue-500' : 'bg-gray-800'}`}>CSS</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("Bootstrap") ? prev.filter(item => item !== "Bootstrap") : [...prev, "Bootstrap"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("Bootstrap") ? 'bg-blue-500' : 'bg-gray-800'}`}>Bootstrap</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("JavaScript") ? prev.filter(item => item !== "JavaScript") : [...prev, "JavaScript"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("JavaScript") ? 'bg-blue-500' : 'bg-gray-800'}`}>JavaScript</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("React") ? prev.filter(item => item !== "React") : [...prev, "React"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("React") ? 'bg-blue-500' : 'bg-gray-800'}`}>React</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("Tailwind CSS") ? prev.filter(item => item !== "Tailwind CSS") : [...prev, "Tailwind CSS"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("Tailwind CSS") ? 'bg-blue-500' : 'bg-gray-800'}`}>Tailwind CSS</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("TypeScript") ? prev.filter(item => item !== "TypeScript") : [...prev, "TypeScript"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("TypeScript") ? 'bg-blue-500' : 'bg-gray-800'}`}>TypeScript</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("Next") ? prev.filter(item => item !== "Next") : [...prev, "Next"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("Next") ? 'bg-blue-500' : 'bg-gray-800'}`}>Next</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("Node") ? prev.filter(item => item !== "Node") : [...prev, "Node"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("Node") ? 'bg-blue-500' : 'bg-gray-800'}`}>Node</p>
              </div>
              <div onClick={() => { setTechnologies(prev => prev.includes("Express") ? prev.filter(item => item !== "Express") : [...prev, "Express"]) }} >
                <p className={`cursor-pointer px-4 py-2 rounded-lg ${technologies.includes("Express") ? 'bg-blue-500' : 'bg-gray-800'}`}>Express</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Project URL</label>
            <input
              type="text"
              placeholder="Link to the live project"
              onChange={(e)=> {setGithubUrl(e.target.value)}}
              value={githubUrl}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">GitHub Repository URL</label>
            <input
              type="text"
              placeholder="Link to GitHub repo"
              onChange={(e)=> {setProjectUrl(e.target.value)}}
              value={projectUrl}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 outline-none text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className=' flex gap-2 mt-2'>
            <label className='cursor-pointer' htmlFor="latest">Add to latest</label>
            <input onChange={() => setLatest(prev => !prev)} checked={latest} type="checkbox" id="latest" />
          </div>

          <div className=' flex gap-2 mt-2'>
            <label className='cursor-pointer' htmlFor="comingSoon">Add to comming soon</label>
            <input onChange={() => setComingSoon(prev => !prev)} checked={comingSoon} type="checkbox" id="comingSoon" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium w-full sm:w-auto">
            Save Project
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProject
