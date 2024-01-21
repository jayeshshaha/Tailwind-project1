import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-2 ">
        <div>
          <h1 className=" text-cGreen text-2xl font-bold w-full mx-2">Redux.</h1>
          <div className="flex items-center">
            <MdMarkEmailUnread size={20} className="mx-2" />
            <p>jayeshshaha@gmail.com</p>
          </div>
          <div className="flex p-2 justify-start">
            <FaFacebookSquare size={20} className="" />
            <FaGithubSquare size={20} className="mx-2" />
            <FaInstagram size={20} className="mx-2" />
            <FaTwitterSquare size={20} className="mx-2" />
          </div>
        </div>

        <div className="flex p-2 justify-between">
          <div className="">
            <p className="font-bold ">Legal</p>
            <p className="text-sm text-gray-500">Privacy Policy</p>
            <p className="text-sm text-gray-500">Terms of Service</p>
          </div>
          <div>
            <p className="font-bold">Solutions</p>
            <p className="text-sm text-gray-500">Analytics</p>
            <p className="text-sm text-gray-500">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
