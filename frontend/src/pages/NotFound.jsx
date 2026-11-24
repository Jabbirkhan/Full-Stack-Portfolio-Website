import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

        <div className="text-center max-w-xl">

          {/* 404 Number */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-blue-600">
            404
          </h1>

          {/* Title */}
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.
          </p>

          {/* Button */}
          <Link to="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Go Back Home
          </Link>

        </div>

      </div>

    </div>
  )
}

export default NotFound
