import React, { useEffect, useRef } from "react";
import Group2 from "../assets/Group2.png";
import TL from "../assets/TL.png";
import { motion, useAnimation } from "framer-motion";

const Group = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const imgV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(sectionRef.current);

    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#140730] mt-[30rem] max-sm:p-0 gap-2 w-[80%] m-auto max-sm:mt-0"
    >
      <div className="w-full h-5 z-[900] relative flex flex-row items-center max-sm:flex-col gap-[8rem] max-sm:gap-[1px] max-sm:text-left max-sm:p-2">
        <motion.img
          src={Group2}
          width={500}
          height={500}
          className="max-sm:w-[300px] max-sm:h-[300px]"
          variants={imgV}
          initial="hidden" // Set the initial state to hidden
         
          animate={controls}
        
          transition={{ duration: 3 }} // Animation duration
        />
        <motion.div
          className=""
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="font-retake font-normal text-base md:text-5xl leading-tight md:leading-normal max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap[10px] ">
            <p className="text-white"> LOREM IPSUM IS</p>
            <p className="bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-400 text-transparent bg-clip-text">
              SIMPLY<span className="text-white"> DUMMY</span>
            </p>
            <div className=" font-airbnb font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-normal text-left z-[933] relative max-sm:text-center max-sm:gap-[3px]">
              Lorem ipsum dolor sit amet consectetur. Nisl proin cras sapien sed
              lorem amet scelerisque.Lorem ipsum dolor sit amet consectetur.
              Nisl proin cras sapien sed lorem amet scelerisque.
            </div>
          </div>
        </motion.div>
        
      </div>
      
      <div className="z-[944] w-full h-full relative max-sm:hidden">
        <motion.img
          src={TL}
          className="float-end z-[999] mt-[14px] left-[12.5%] relative"
          animate={{ opacity: [0.4, 1, 0.4] }} // Animation from opacity 0 to 1 and back to 0
          transition={{ duration: 2, repeat: Infinity }} // Animation duration and repeat
        />
      </div>
    </section>
  );
};

export default Group;
