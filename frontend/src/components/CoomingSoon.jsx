import React, { useContext } from 'react';
// import { projects } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const ComingSoon = () => {

    const { projects } = useContext(Context);
    // Get the first project that is marked as comingSoon
    const project = projects.find(p => p.comingSoon === true);

    if (!project) return null; // No coming soon project available

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Coming Soon</h2>
            <div className="grid md:grid-flow-row gap-6 md:grid-cols-2 items-start">
                <img src={project.images[0]} alt={project.title} className="rounded-lg w-full h-[300px] object-cover" />
                <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                    <Link to={`/projects/${project._id}`} key={project._id}>
                    <button className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 my-4'>See Project</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
