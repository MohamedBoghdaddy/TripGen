import React from "react";

function Pricing() {
  const plans = [
    {
      title: "Basic Plan",
      price: "$19",
      frequency: "per month",
      features: [
        "Custom itineraries",
        "Access to top destinations",
        "Basic AI insights",
      ],
      buttonText: "Choose Basic",
      mostPopular: false,
    },
    {
      title: "Pro Plan",
      price: "$49",
      frequency: "per month",
      features: [
        "All features of Basic Plan",
        "Real-time updates",
        "Priority support",
        "Advanced AI insights",
      ],
      buttonText: "Choose Pro",
      mostPopular: true,
    },
    {
      title: "Premium Plan",
      price: "$99",
      frequency: "per month",
      features: [
        "All features of Pro Plan",
        "Unlimited destinations",
        "Personalized recommendations",
        "Dedicated travel consultant",
      ],
      buttonText: "Choose Premium",
      mostPopular: false,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-8">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${
                plan.mostPopular ? "border-2 border-blue-500" : ""
              }`}
            >
              {plan.mostPopular && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-2xl font-extrabold">
                {plan.price}
                <span className="text-sm font-medium"> {plan.frequency}</span>
              </p>
              <ul className="mt-4 mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-600 flex items-center"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
