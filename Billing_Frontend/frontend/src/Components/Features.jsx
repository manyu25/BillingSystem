import React from "react";
import AutomatedInvoicing from "../Assets/AutomatedInvoicing.jpg";
import Feature1 from "../Assets/Feature1.jpg";
import Feature3 from "../Assets/Feature3.jpg";
import Feature4 from "../Assets/Feature4.jpg";

const features = [
  {
    title: "Automated Invoicing",
    image: AutomatedInvoicing,
    description: "Create Invoices Instantly",
  },
  {
    title: "Real-Time Reports",
    image: Feature1,
    description: "Get insights on revenue and expenditures",
  },
  {
    title: "Payment Tracking",
    image: Feature3,
    description: "Monitor Transactions Easily",
  },
  {
    title: "Custom Branding",
    image: Feature4,
    description: "Personalize invoices with your brand logo",
  },
  {
    title: "Multi-Currency Support",
    image: AutomatedInvoicing,
    description: "Invoice clients worldwide",
  },
  {
    title: "Tax Calculation",
    image: Feature1,
    description: "Apply GST, VAT, or other taxes automatically",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-100 text-center">
      <h2 className="text-5xl font-bold mb-12">Key Features</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transition"
          >
            <img src={feature.image} className="w-24 h-24 mx-auto" alt="Img" />
            <h3 className="text-2xl font-semibold mt-6">{feature.title}</h3>
            <p className="text-gray-600 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
