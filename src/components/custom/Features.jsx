import React from "react";

function Features() {
  const features = [
    {
      title: "Custom Itineraries",
      description:
        "Create tailored travel plans that suit your preferences and budget.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l-4-4m0 0l4-4m-4 4h16"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Updates",
      description: "Get instant updates on your travel plans and destinations.",
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 2c-4.42 0-8 1.79-8 4v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2c0-2.21-3.58-4-8-4zm0 6c-3.87 0-7-1.01-7-2s3.13-2 7-2 7 1.01 7 2-3.13 2-7 2z"
          />
        </svg>
      ),
    },
    {
      title: "AI-Powered Insights",
      description:
        "Leverage AI to discover the best destinations and activities.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h11M9 21v-6M9 3L3 10h6m0 0h6m-6 0l-6 6m18 0h-3m0 0v3m0-3v-3m0 6h3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
