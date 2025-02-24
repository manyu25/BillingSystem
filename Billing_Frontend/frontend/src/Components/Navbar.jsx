import Billinglogo from "../Assets/billinglogo.png";

function Navbar() {
  return (
    <header className="bg-blue-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-15">
            <a className="block text-teal-600" href="/home">
              <span className="sr-only">Home</span>
              <img
                src={Billinglogo}
                alt=""
                className="h-24 w-auto object-contain"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-black transition hover:text-green-600 text-lg"
                    href="/about"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-600 text-lg"
                    href="/services"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-600 text-lg"
                    href="/history"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-green-600 text-lg"
                    href="/services"
                  >
                    {" "}
                    Testimonials{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black"
                  href="/login"
                >
                  Try for Free
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
