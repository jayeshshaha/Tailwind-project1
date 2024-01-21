import React from "react";

const Newsbox = () => {
  return (
    <div className="p-3">
      <div className="max-w-[1240px] h-auto grid md:grid-cols-2 gap-2  p-2 mx-auto">
        <div className="flex flex-col">
          <p className="p-1 text-xl md:text-2xl font-bold">Want tips & tricks to optimize your flow?</p>
          <p className="p-1 text-cGray">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="p-1">
          <div className="flex p-1">
            <input type="text" placeholder="Enter email" className="p-1 rounded-sm w-[70%] md:w-[50%]" />
            <button className="bg-cGreen text-black p-1 ml-1 rounded-sm">Notify Me</button>
          </div>
          <p className="p-1">We care about the protection of your data. Read our <span className="text-cGreen underline">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsbox;
