import React from "react";

const testimonials = [
  {
    name: "Alice",
    text: "This service saved me hours every week",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John",
    text: "Super Easy to use and very much efficient!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane",
    text: "I love the simplicity of this service",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bob",
    text: "I am very staistfied with this service",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-5xl font-bold mb-12">What Our Users Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 bg-gray-100 shadow-lg rounded-lg">
            <img
              src={testimonial.image}
              alt=""
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic text-lg">"{testimonial.text}"</p>
            <h3 className="text-xl font-semibold mt-4">~{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
