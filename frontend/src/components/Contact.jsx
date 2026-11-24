import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s Collaborate</h2>
            <p className="text-sm text-gray-400 mt-2 mb-6">
                Ready to start your next project? Contact me today!
            </p>
            <Link to='/contact' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
                Contact Me
            </Link>
        </section>
    )
}

export default Contact
