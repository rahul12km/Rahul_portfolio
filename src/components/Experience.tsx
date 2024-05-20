"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className=" max-sm:pt-[60px] h-auto flex flex-col w-full px-[30px]  max-sm:mt-[100px] max-sm:mb-0 overflow-hidden  lg:mt-[300px] lg:mb-[300px] ">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className=" py-5   text-transparent bg-clip-text bg-gradient-to-r to-tertiary-400 from-secondary-600 text-2xl max-sm:text-[45px] lg:text-8xl lg:leading-normal font-extrabold ">
          Experience
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5 }}
      >
        <div className=" exp flex  max-sm:flex-col px-[18px] gap-[50px] mt-5">
          <div className="exp-image max-sm:mx-auto  ">
            <Image
              width={150}
              height={150}
              alt=""
              src="/images/college.jpg"
              className="rounded-full  "
            ></Image>
          </div>
          <div className="exp-text flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  animate">
            <p className="font-extrabold  max-sm:text-[24px]  lg:text-[40px] lg:leading-normal">
              Varcons Technologies Pvt Ltd
            </p>

            <p className="lg:text-[25px] max-sm:text-[17px] font-semibold  mb-3">
              Web Developer(Intern)
            </p>
            <p className="lg:text-[25px] max-sm:text-[17px] font-semibold  mb-3">
              Aug 2022 - Sep 2022
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
