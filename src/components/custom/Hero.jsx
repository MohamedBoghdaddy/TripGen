import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-20 py-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Discover Your{" "}
            <span className="text-yellow-300">Next Adventure</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8">
            Your personal trip planner and travel curator, creating custom
            itineraries tailored to your interests and budget.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to={"/create-trip"}>
              <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
                Get Started, It’s Free
              </Button>
            </Link>
            <Button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition-all">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/undraw_explore_re_8l4v.svg"
            alt="Travel Planning Illustration"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-16 left-16 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
    </div>
  );
};

export default Hero;
