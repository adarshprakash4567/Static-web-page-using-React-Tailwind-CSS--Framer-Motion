import React from "react";
import Logo from "../assets/Logo2.png";

const Navbar = () => {
  return (
    <div className="  w-full z-[911]">
      <div className="h-[4rem] flex justify-between items-center w-full bg-[red]">
        <img src={Logo} width={120} height={120} alt="Logo" />
        <div className="text-white">
          <p>ABOUT US</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
