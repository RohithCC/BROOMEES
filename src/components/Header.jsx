import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          
          <Link to="/">BROOMEES</Link>
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium items-center">

          {/*<a href="#" className="hover:text-black">Home</a>*/}
          <Link to="/">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-black">
              Services
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <ul className="py-2 text-gray-700">

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  
                   <Link to="/services_all">Services</Link>
                  
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/allrounder"> All-rounders</Link>
                 
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                   <Link to="/allrounder">   Cooks</Link>
                
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                   <Link to="/allrounder">  Babysitters</Link>
                 
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                   <Link to="/allrounder"> Domestic help</Link>
                 
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                   <Link to="/allrounder"> 24 hrs - Japas</Link>
                  
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                   <Link to="/allrounder"> 24 hrs - Full time</Link>
                  
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between">
                   <Link to="/allrounder">24 hrs - Elderly Care</Link>
                  
                  <span className="text-xs bg-yellow-400 px-2 rounded">New</span>
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between">
                   <Link to="/allrounder"> On-Demand</Link>
                  
                  <span className="text-xs bg-yellow-400 px-2 rounded">New</span>
                </li>

              </ul>

            </div>
          </div>

         

          <a href="#" className="hover:text-black">
             <Link to="/allrounder">Pricing</Link>
          </a>
        
         
          <a href="/about-us" className="hover:text-black">About Us</a>
          <a href="/contact-us" className="hover:text-black">Contact Us</a>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            ⚡ Get a maid in 15 mins
          </button>

          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            LOGIN
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;