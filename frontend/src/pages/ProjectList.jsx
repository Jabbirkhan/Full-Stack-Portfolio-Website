// src/pages/ProjectList.jsx
import { Link } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../context/Context";
import Pagination from "./../components/Pagination";
import Loader from "../components/Loader";
import axiosInstance from "../utls/axiosInstance.js";
import { toast } from "react-toastify";

const ProjectList = () => {

    const { authState } = useContext(Context);

    const [category, setCategory] = useState("");

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState([]);
    const [categories, setCategories] = useState([]);

    const toggleCategory = (selectedCategory) => {
        setCategory((prev) => (prev === selectedCategory ? "" : selectedCategory));
        setPage(1);
    }

    // const filteredProjects = useMemo(() => {
    //     if (!category) return projects || [];
    //     return projects.filter(project => project.category === category);
    // }, [category, projects]);

    const resetCategory = () => {
        setCategory('');
        setPage(1);
    }

    const [loader, setLoader] = useState(false);

    const getAllProjects = async (page) => {
        try {
            setLoader(true);

            const params = new URLSearchParams();

            params.append('page', page);
            params.append('limit', 8);

            if (category) {
                params.append('category', category);
            }

            const response = await axiosInstance.get(`/api/v1/user/allprojects?${params.toString()}`);
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
    }, [authState, page, category]);

    if (loader) {
        return <Loader />
    }

    return (
        <div className="bg-[#0f172a] text-white min-h-screen px-4 py-10">

            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Projects</h1>
                <p className="text-gray-400 mb-6">
                    Explore a selection of my recent projects, {projects.length} of {totalProjects} showcasing my skills in full-stack development with the MERN stack.
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    <button onClick={() => resetCategory()} className={`${category === '' ? 'bg-blue-500' : 'bg-gray-700'} px-3 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-blue-500 transition-all duration-200`}>
                        All
                    </button>
                    {categories.map((cat, index) => (
                        <button key={index} onClick={() => toggleCategory(cat)} className={`${category === cat ? 'bg-blue-500' : 'bg-gray-700'} px-3 py-2 border border-gray-400 rounded-md cursor-pointer hover:bg-blue-500 transition-all duration-200`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Here we map through the projects and display them */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => {
                        return (
                            <Link
                                to={`/projects/${project._id}`}
                                key={index}
                                className="group block cursor-pointer"
                            >
                                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

                                    {/* Image */}

                                    <div className="relative overflow-hidden">

                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            loading="lazy"
                                            className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Image Overlay */}

                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent opacity-80" />


                                        {/* Category */}

                                        <div className="absolute left-4 top-4">

                                            <span className="rounded-full border border-white/10 bg-gray-950/70 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur-md">
                                                {project.category}
                                            </span>

                                        </div>


                                        {/* Status */}

                                        <div className="absolute right-4 top-4">

                                            {project.comingSoon ? (

                                                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-xs font-medium text-yellow-400 backdrop-blur-md">
                                                    Coming Soon
                                                </span>

                                            ) : project.latest ? (

                                                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-md">
                                                    Featured
                                                </span>

                                            ) : null}

                                        </div>

                                    </div>


                                    {/* Content */}

                                    <div className="p-5">

                                        {/* Title */}

                                        <div className="mb-4 flex items-start justify-between gap-3">

                                            <h3 className="line-clamp-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                                                {project.title}
                                            </h3>

                                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-500 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                                                →
                                            </span>

                                        </div>


                                        {/* Technologies */}

                                        <div className="flex flex-wrap gap-2">

                                            {project.technologies?.slice(0, 3).map((technology, techIndex) => (

                                                <span
                                                    key={techIndex}
                                                    className="rounded-md border border-gray-800 bg-gray-800/70 px-2.5 py-1 text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:border-gray-700 group-hover:text-gray-300"
                                                >
                                                    {technology}
                                                </span>

                                            ))}

                                            {project.technologies?.length > 3 && (

                                                <span className="rounded-md border border-gray-800 bg-gray-800/70 px-2.5 py-1 text-xs font-medium text-gray-500">
                                                    +{project.technologies.length - 3}
                                                </span>

                                            )}

                                        </div>

                                    </div>


                                    {/* Bottom Hover Line */}

                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />

                                </div>
                            </Link>
                        );
                    })
                    }
                </div>

            </div>

            <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
            />

        </div>
    );
};

export default ProjectList;


