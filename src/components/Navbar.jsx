import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
      function handleToggle(){
        setMenu(!menu);
      }
  return (
    <>
    <nav className="max-w-[1240px] h-12 flex justify-between items-center p-6 mx-auto">
      <h1 className=" text-cGreen text-2xl font-bold w-full">Redux.</h1>
      <ul className=" hidden md:flex gap-2 items-center">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Resources</li>
        <li className="cursor-pointer">About</li>
        <li className="bg-white text-black px-4 py-0.5 rounded-sm cursor-pointer">Contact</li>
      </ul>
      <div className="md:hidden cursor-pointer" onClick={handleToggle}>
      {
        menu ?  <AiOutlineClose size={20}/>  : <AiOutlineMenu size={20}/>
      }
      </div>
    </nav>

    <nav className={ menu ? "w-[60%] fixed top-0 left-0 h-full flex flex-col p-4 bg-[#000300] border-r border-gray-500 ease-in-out duration-500 md:hidden " : "fixed left-[-100%]"}>
      <h1 className=" text-cGreen text-3xl font-bold w-full">Redux.</h1>
      <ul className=" flex flex-col gap-2 mt-5">
        <li className="text-xl mt-4 border-b border-gray-500">Home</li>
        <li className="text-xl mt-4 border-b border-gray-500">Company</li>
        <li className="text-xl mt-4 border-b border-gray-500">Resources</li>
        <li className="text-xl mt-4 border-b border-gray-500">About</li>
        <li className="text-xl mt-4 ">Contact</li>
      </ul>
      </nav>

    </>  
  );
};

export default Navbar;

