import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATA FINANCE</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:underline cursor-pointer">Home</li>
        <li className="p-4 hover:underline cursor-pointer">Company</li>
        <li className="p-4 hover:underline cursor-pointer">Resources</li>
        <li className="p-4 hover:underline cursor-pointer">About</li>
        <li className="p-4 hover:underline cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          DATA FINANCE
        </h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <li className="p-4 border-b border-gray-600 ">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
