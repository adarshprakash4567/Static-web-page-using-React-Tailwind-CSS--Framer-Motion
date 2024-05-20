import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { motion,  } from "framer-motion";

const Card = () => {
  const cardData = [
    {
      id:1,
      imgSrc: img1,
      imgClassName: "w-full h-auto rounded-t-lg",
      title: "Travel Safety",
      description: "Lorem ipsum Nisl dolor sit amet conse Nisl ctetur. Nisl proin cras sapien sed Lorem.",
      borderImageSource: "linear-gradient(96.71deg, #C327BC 5.44%, #333CF0 53.18%, #00FAFE 95.35%)",
    },
    {
      id:2,
      imgSrc: img2,
      imgClassName: "h-[130px] rounded-t-lg w-[200px] max-sm:ml-0",
      title: "Travel Safety",
      description: "Lorem ipsum Nisl dolor sit amet conse Nisl ctetur. Nisl proin cras sapien sed Lorem.",
      borderImageSource: "linear-gradient(96.71deg, #C327BC 5.44%, #333CF0 53.18%, #00FAFE 95.35%)",
    },
    {
      id:3,
      imgSrc: img3,
      imgClassName: "w-full h-auto rounded-t-lg",
      title: "Travel Safety",
      description: "Lorem ipsum Nisl dolor sit amet conse Nisl ctetur. Nisl proin cras sapien sed Lorem.",
      borderImageSource: "linear-gradient(96.71deg, #C327BC 5.44%, #333CF0 53.18%, #00FAFE 95.35%)",
    },
  ];

  return (
    <section className="bg-[#140730] font-airbnb max-sm:items-center z-[903] relative">
      <div className="flex flex-row w-full  justify-center gap-6 pt-8 max-sm:flex-col max-sm:mt-[28rem] max-sm:items-center">
        {cardData.map((card, index) => (
          <motion.div
            key={card?.id}
            style={{
              top: "1913.41px",
              left: "152.1px",
              border: "2px solid",
              borderImageSource: card.borderImageSource,
              borderImageSlice: "1",
              borderRadius: "10px",
            }}
            className="w-[360.64px] h-[515.21px] bg-transparent p-[4rem]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <img
              src={card.imgSrc}
              alt="Card Images"
              className={card.imgClassName}
            />

            <div className="bottom-0 left-0 w-full p-4 text-white mt-6 gap">
              <h3 className=" text-white text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-justify text-[#D9D9D9]">{card.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 rounded">
                Button
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
