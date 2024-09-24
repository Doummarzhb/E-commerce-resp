import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import DarkMode from "../DarkMode";

//Develope By Doummar
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",          
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",            
  }, 
  {
    id: 3,
    name: "About",
    link: "/About",               
  },
  {
    id: 4,
    name: "Blogs",
    link: "/blogs",            
  },
  {
    id: 5,
    name: "Sign Up",
    link: "/Signup",        
  },
  {
    id: 6,
    name: "Login",
    link: "/login",         
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Product",
    link: "/trending",         
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/top-rated",        
  },
  {
    id: 3,
    name: "Best Selling",
    link: "/best-selling",         
  },
  
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Link
              to="/" 
              className="text-primary font-semibold tracking-widest text-xl uppercase sm:text-3xl"
            >
              Shop
            </Link>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}   
                      className="inline-block px-4 font-semibold text-gray-400 hover:text-blue-50 dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Quick Links
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <Link
                            className='text-gray-400 hover:text-black dark:hover:text-white-300 duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md'
                            to={data.link}   
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span><FaCaretDown className="group-hover:rotate-180 duration-300" /></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">

            <div className="relative group hidden sm:block ">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-300 group-hover:text-pretty dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button className="relative p-3">
              <FaShoppingCart className="text-xl text-gray-400 dark:text-gray-300" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">4</div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
