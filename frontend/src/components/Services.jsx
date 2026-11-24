import React from 'react'

const Services = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Services</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Full-Stack Web Application Development</p>
                    <p className="text-sm text-gray-200">
                        I build scalable and responsive web applications using the MERN stack (MongoDB, Express, React, 
                        Node.js). From frontend interfaces to backend APIs and databases, I deliver complete end-to-end 
                        solutions tailored to client needs.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">RESTful API & Backend Development</p>
                    <p className="text-sm text-gray-200">
                        I design and implement secure, high-performance RESTful APIs with Node.js and Express. These APIs 
                        handle authentication, CRUD operations, and data management efficiently while ensuring 
                        scalability and reliability.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Database Design & Optimization</p>
                    <p className="text-sm text-gray-200">
                        I create well-structured MongoDB databases with optimized schemas, indexes, and aggregation pipelines. 
                        My focus is on performance, scalability, and ensuring smooth data flow for real-world applications.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Admin Panel Development</p>
                    <p className="text-sm text-gray-200">
                        I develop fully functional and intuitive admin dashboards to manage users, content, and analytics. 
                        These panels give clients complete control over their platforms with role-based authentication and 
                        easy-to-use interfaces.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Frontend Development with React</p>
                    <p className="text-sm text-gray-200">
                        I create modern, responsive, and interactive user interfaces using React and Tailwind CSS. 
                        My focus is on clean UI/UX, performance, and seamless integration with backend services.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Deployment & Hosting</p>
                    <p className="text-sm text-gray-200">
                        I set up and deploy applications on cloud platforms like AWS, Vercel, or DigitalOcean. 
                        I also handle CI/CD pipelines, environment configurations, and server optimizations for 
                        smooth production runs.
                    </p>
                </div>
                <div className="bg-[#1e293b] p-4 rounded-lg flex flex-col">
                    <p className="font-medium text-xl mb-2">Bug Fixing & Maintenance</p>
                    <p className="text-sm text-gray-200">
                        I provide ongoing support to fix issues, optimize performance, and add new features. 
                        Regular updates and monitoring help keep applications secure and up-to-date.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
