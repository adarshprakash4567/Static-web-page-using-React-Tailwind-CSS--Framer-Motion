import React, { useEffect, useRef } from "react";
import Road from "../assets/Union.png";
import { motion, useAnimation } from "framer-motion";

const Section3 = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
      className="bg-[#140730] mt-[20rem]  z-[901] relative max-sm:mt-20 max-sm:hidden"
      ref={sectionRef}
    >
      <div>
        <motion.div
        
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[70%]  text-[79.31px]  flex flex-col pl-[10rem] justify-center font-retake font-normal text-base md:text-5xl leading-tight md:leading-normal">
            <p className="text-white ">PHASELLUS NEC LIGULA</p>
            <p className="text-white ">
              NON FELIS <span></span>
              <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-400 text-transparent bg-clip-text">
                IMPERDIET
              </span>
            </p>
            <p className="text-white ">COMMANDO.</p>
          </div>
        </motion.div>

        <div className="bg-[#140730] float-end ">
          <img src={Road} className="-mt-[8rem]" alt="img2" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
