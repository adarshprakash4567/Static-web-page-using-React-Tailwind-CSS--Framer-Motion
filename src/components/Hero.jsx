import React, { useEffect } from "react";

import BannerImg from "../assets/Banner.png";
import Logo from "../assets/Logo2.png";
import Sideline from "../assets/Sideline.png";
import Group from "../assets/Group.png";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const navbar = {
    hidden: { opacity: 0, X: 0 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    controls.start("visible");
  }, []);
  return (
    <div className="">
      <div className="navbar-container absolute top-0 w-full z-[911] p-6">
      <motion.div
          className="z-[902] overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={navbar}
          transition={{ duration: 2 }}
        >
        <div className="h-[4rem] flex justify-between items-center w-full max-sm:gap-[10px] ">
          <img
          src={Logo}
          
            width={120}
            height={120}
            alt="Logo"
            className="max-sm:w-20"
          />
          <div className="text-white flex gap-10 sm:mr-[8rem] max-sm:gap-2 text-sm max-sm:text-[0.615rem] ">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <img src={Group} width={60} height={60} alt="Logo" className="max-sm:mt-[-5px]" />
          </div>
        </div></motion.div>
      </div>
      <img src={Sideline} alt="sideline"/>
      <section className="flex flex-row justify-center bg-[#140730]">
        <motion.div
          className="z-[902]"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 2.5 }}
        >
          <div className=" max-md:p-[1px] z-[900] relative">
            <div className="font-retake font-normal text-base md:text-5xl leading-tight md:leading-normal max-sm:text-center max-sm:p-2">
              <p className="text-white"> LOREM IPSUM</p>
              <p className="bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-400 text-transparent bg-clip-text">
                AMET CONSETUR.
              </p>
              <div className=" w-[60%] font-airbnb font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-normal text-left max-sm:w-[100%] max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur. Nisl proin cras sapien
                sed lorem amet scelerisque.
                
              </div>
              
            </div>
            
            <div className="text-white w-[60%] mt-20 flex justify-between max-sm:flex max-sm:w-full max-sm:gap-[52px]">
              <div className="flex flex-col">
                <p className="font-bold text-gradient">120k+</p>
                <p className="font-airbnb text-[#FFFFFF7D] ">
                  Lorem ipsum dolor ipsum
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold text-gradient">10k+</p>
                <p className="font-airbnb text-[#FFFFFF7D] ">
                  Lorem ipsum dolor
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-bold text-gradient">22%</p>
                <p className="font-airbnb text-[#FFFFFF7D] ">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-[70%] float-end absolute top-0 right-0 max-sm:w-[99%]">
          <img
            src={BannerImg}
            alt="bannerImg"
            className="w-full h-fit"
            style={{ objectFit: "cover", objectPosition: "top right" }}
          />
        </div>
      </section>
     
    </div>
  );
};

export default Hero;
