// import React from 'react'

// function Footer() {
//     return (
//         <div>
//             hello Footer
//         </div>
//     )
// }

// export default Footer


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d3224] text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          <h2 className="text-xl font-bold mb-4">LOGO</h2>
          <p className="text-sm leading-relaxed mb-6">
            Your Home Away From Home: <br />
            Simplifying PG Room Searches for <br />
            Students and Professionals
          </p>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +91 9358XXXXX
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> Findyourpg@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> FindyourPG@gmail.com
            </p>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
          </ul>
        </div>

        {/* PG Rooms links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PG Rooms</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Find PG</a></li>
            <li><a href="#" className="hover:text-yellow-500">Testimonials</a></li>
            <li><a href="#" className="hover:text-yellow-500">How it works</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaLinkedin className="hover:text-yellow-500" /></a>
            <a href="#"><FaFacebook className="hover:text-yellow-500" /></a>
            <a href="#"><FaInstagram className="hover:text-yellow-500" /></a>
            <a href="#"><FaTwitter className="hover:text-yellow-500" /></a>
            <a href="#"><FaYoutube className="hover:text-yellow-500" /></a>
          </div>
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="max-w-7xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Subscribe..."
          className="w-full md:w-1/2 p-3 rounded-md bg-[#c3cda6] text-black placeholder-black"
        />
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-sm border-t border-gray-600 pt-4">
        All rights Reserved © Your Company, 2021
      </div>
    </footer>
  );
}
