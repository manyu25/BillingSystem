import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Easy Billing</h2>
          <p className="text-gray-400 mt-3">
            Automate your billing ans invoicing with ease.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a
                href="https://random.com"
                className="hover:text-teal-600 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://random.com"
                className="hover:text-teal-600 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://random.com"
                className="hover:text-teal-600 transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://random.com"
                className="hover:text-teal-600 transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://random.com"
              className="text-gray-400 hover:text-blue-700 transition text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://random.com"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://random.com"
              className="text-gray-400 hover:text-pink-400 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://random.com"
              className="text-gray-400 hover:text-blue-500 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} Easy Billing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
