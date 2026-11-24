// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useMemo } from "react";
import { Context } from "../context/Context.jsx";
import Loader from "../components/Loader.jsx";

const ProjectDetail = () => {

    const { id } = useParams();
    const { projects } = useContext(Context);

    
    const project = useMemo(() => {
        return projects.find((p) => p._id === id);
    }, [id, projects]);
    
    const parts = project.description.split("•");
    const intro = parts[0]; // intro before bullets
    const features = parts.slice(1);

    if (!project) {
        return <Loader />
    }

    return (
        <div className="bg-[#0f172a] text-white min-h-screen px-4 py-10">
            <div className="max-w-4xl mx-auto">
                <Link to="/projects" className="text-blue-400 hover:underline">
                    ← Back to Projects
                </Link>
                <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
                <div className="flex gap-2 flex-wrap">
                    <img src={project.images[0]} alt="upload-area" className="rounded-lg my-6 w-[48%] h-96 object-cover" />
                    <img src={project.images[1]} alt="upload-area" className="rounded-lg my-6 w-[48%] h-96 object-cover" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Brief Description</h3>
                {/* <p className="mb-4">{project.description}</p> */}

                <div className="space-y-6">
                    <p className="leading-8 text-gray-300">
                        {intro}
                    </p>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Features
                        </h3>

                        <ul className="space-y-4">
                            {features.map((item, index) => (
                                <li key={index}>
                                    {item.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-medium my-4">Tech used:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 gap-4 mb-6">
                    {project.technologies.map((tech) => {
                        return (
                            <span key={tech} className="inline-block text-center bg-gray-700 text-white px-3 py-3 rounded text-sm md:text-normal hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                                {tech}
                            </span>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;


