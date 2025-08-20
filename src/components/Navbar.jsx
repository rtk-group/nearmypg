import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">LOGO</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">About us</a>
          <a href="#" className="hover:text-gray-600">Find PG</a>
          <a href="#" className="hover:text-gray-600">Contact us</a>
          <a href="#" className="hover:text-gray-600">How it works</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-[#2d3224] text-white px-4 py-2 rounded-bl-xl rounded-tr-xl hover:opacity-90">
            PG Owner
          </button>
          <button className="bg-[#2d3224] text-white px-4 py-2 rounded-bl-xl rounded-tr-xl hover:opacity-90">
            Contact us
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      
        <div className={`md:hidden px-6  space-y-4 duration-300 ${isOpen?'h-82 py-1 pb-3 shadow-lg':'h-0'}`}>
          <a href="#" className="block" onClick={()=>setIsOpen(false)}>Home</a>
          <a href="#" className="block" onClick={()=>setIsOpen(false)}>About us</a>
          <a href="#" className="block" onClick={()=>setIsOpen(false)}>Find PG</a>
          <a href="#" className="block" onClick={()=>setIsOpen(false)}>Contact us</a>
          <a href="#" className="block" onClick={()=>setIsOpen(false)}>How it works</a>

          <button className="w-full bg-[#2d3224] text-white px-4 py-2 rounded-bl-xl rounded-tr-xl mt-3">
            PG Owner
          </button>
          <button className="w-full bg-[#2d3224] text-white px-4 py-2 rounded-bl-xl rounded-tr-xl">
            Contact us
          </button>
        </div>
      
    </nav>
  );
}
