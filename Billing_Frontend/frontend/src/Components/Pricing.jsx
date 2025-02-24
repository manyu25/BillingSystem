import React from "react";

const plans = [
  {
    title: "Basic",
    price: "$15/month",
    features: ["Invoicing", "Basic Reports", "Unlimited Revenue"],
    highlight: false,
  },
  {
    title: "Standard",
    price: "$20/month",
    features: ["All basic features", "Advanced Reports", "Unlimited Revenue"],
    highlight: true,
  },
  {
    title: "Premium",
    price: "$30/month",
    features: ["Unlimited Invoices", "24/7 Support", "All Premium features"],
    highlight: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-gray-200 py-24 text-center">
      <h2 className="text-5xl font-bold mb-12"> Pricing Plans 💰 </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 bg-white shadow-xl rounded-lg ${
              plan.highlight ? "border-4 border-blue-600" : ""
            } hover:scale-105 transition`}
          >
            <h3 className="text-2xl font-bold">{plan.title}</h3>
            <p className="text-3xl font-semibold mt-4">{plan.price}</p>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feat, i) => {
                return (
                  <li key={i} className="text-gray-700">
                    {feat}
                  </li>
                );
              })}
            </ul>
            <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-black transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
