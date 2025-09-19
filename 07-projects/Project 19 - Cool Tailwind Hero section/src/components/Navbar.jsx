import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900/80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg z-50">
      <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        PowerX
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Home</li>
        <li className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">About</li>
        <li className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Services</li>
        <li className="hover:text-sky-400 transition-colors duration-200 cursor-pointer">Contact</li>
      </ul>

      <button className="border border-sky-500 rounded-lg px-4 py-2 font-semibold text-sm hover:bg-sky-500/20 transition-colors duration-200">
        Get Started
      </button>
    </nav>
  )
}

export default Navbar
