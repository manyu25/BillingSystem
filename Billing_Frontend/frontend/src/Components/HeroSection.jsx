import heroImg from "../Assets/HeroImg2.webp";
const HeroSection = () => {
  return (
    <section className="relative bg-teal-600 text-white py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold leading-tight">
            Effortless Invoicing, Seamless Payments!
          </h1>
          <p className="mt-6 text-lg">
            Automate invoices, track payments, and generate reports
            effortlessly.
          </p>
          <button className="mt-8 bg-white text-teal-600 px-8 py-4 text-xl rounded-lg font-semibold hover:bg-black hover:text-white transition">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img src={heroImg} alt="" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
