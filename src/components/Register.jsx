import React from "react";
import Footer from "../assets/Footer.png";

const Register = () => {
  return (
    <section className="flex flex-row justify-center bg-[#140730] w-full h-full">
      <div className="relative w-full">
        <img
          src={Footer}
          alt="bannerImg"
          className="w-full h-fit"
          style={{ objectFit: "cover", objectPosition: "top right" }}
        />
        <div className="absolute inset-0 flex justify-center items-center ">
          <p className="font-retake text-white font-normal text-[79px] max-sm:text-[21px] ">REGISTER</p>
          <br/><div>
          <p className="text-[white] font-retake text-[79px] max-sm:text-[21px]">YOUR SCHOOL <span className="">DAYS</span></p></div>
        </div>
      </div>
    </section>
  );
};

export default Register;
