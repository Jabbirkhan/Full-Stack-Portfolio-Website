import React, { useContext } from 'react';
// import { projects } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const LatestProject = () => {

    const { projects } = useContext(Context);
    // Get only the first 3 latest projects
    const latestProjects = projects.filter(p => p.latest).slice(0, 3);

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Latest Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestProjects.map((project, index) => (
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
                ))}
            </div>
        </section>
    );
};

export default LatestProject;
