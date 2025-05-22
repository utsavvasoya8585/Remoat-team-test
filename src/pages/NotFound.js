import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-bgGray flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 text-myWhite bg-second hover:bg-second/80 text-sm font-medium rounded-md  transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
