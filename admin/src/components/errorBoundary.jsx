// frontend/src/components/errorBoundary.js

function ErrorFallBack({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
            <pre className="text-red-500 mb-4">{error.message}</pre>
            <p className="text-lg mb-4">Please try again later.</p>
            <button onClick={resetErrorBoundary} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200">
                Try Again
            </button>
        </div>
    )
}

export default ErrorFallBack