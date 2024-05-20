import React from "react";
import Logo2 from "../assets/Logo2.png";
const Footer = () => {
  return (
    <section className="bg-[#140730] font-airbnb">
      <div className="w-[90%] h-40 flex m-auto justify-between gap-[3rem]  max-sm:flex-col max-sm:w-full ">
        <div className="max-sm:flex max-sm:flex-col max-sm:items-center mt-[4%] ">
         
          <div className="flex flex-col text-white gap-1 max-sm:text-center">
            <p>© Copyright 2024 </p>
            <p>Adarsh Prakash, All rights reserved.</p>
          </div>
        </div>

        <div className="w-full flex items-center mt-[-2rem] border-b border-solid border-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 max-sm:flex max-sm:flex-col max-sm:bg-[#140730] max-sm:p-[3px] max-sm:gap-[10px] ">
          <div className="grid grid-cols-3 gap-4 text-white w-[70%] max-sm:gap-1">
            <div>Option 1</div>
            <div>Option 1</div>
            <div>Option 1</div>
            <div>Option 1</div>
            <div>Option 1</div>
            <div>Option 1</div>
          </div>
          <div className="w-[30%] float-end">
            <img
              src={Logo2}
              width={120}
              height={120}
              alt="Logo"
              className="max-sm:w-20 mb-5 float-end"
            />
          </div>
        </div>
      </div>
      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-10 flex justify-center mt-3 max-sm:hidden ">
        <div className=" text-white justify-between flex flex-row w-[90%] ml-[10.5rem] ">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
        <div className="w-[60%]">d</div>
      </div>
    </section>
  );
};

export default Footer;
