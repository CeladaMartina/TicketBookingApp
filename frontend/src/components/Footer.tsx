import React from "react";
//import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    //<div className="fixed bootom-0">
      <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">About us</h2>
            <p className="text-gray-300">
              Welcome to [Your App Name], your ultimate destination for seamless
              movie ticket booking! We make it easy to browse showtimes, reserve
              seats, and enjoy the latest blockbusters—all with just a few taps.
              Experience the magic of cinema, hassle-free!
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Follow us</h2>
            <ul className="flex space-x-4">
              <li>
                <i className="bx bxl-facebook-circle text-blue-500">
                  <a href="" className="hover:underline text-gray-300">
                    Facebook
                  </a>
                </i>
              </li>
              <li>
                <i className="bx bxl-twitter hover:underline text-gray-300">
                  <a href="#" className="hover:underline text-gray-300">
                    Twitter
                  </a>
                </i>
              </li>
              <li>
                <i className="bx bxl-instagram text-orange-500">
                  <a href="#" className="hover:underline text-gray-300">
                    Instagram
                  </a>
                </i>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
          <p>2025 Code with Quadion. All Rights Reserved.</p>
        </div>
      </footer>
    //</div>
  );
};

export default Footer;
