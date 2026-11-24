import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Skills = () => {
    const { adminProfile } = useContext(Context);
    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {adminProfile?.skills?.map((skill, index) => (
                    <span key={index} className="flex flex-wrap items-center justify-center bg-gray-700 text-white px-3 py-3 rounded text-sm md:text-normal hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills
