import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="max-sm:pt-[60px] h-auto flex flex-col w-full px-[30px] mt-[50px]">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
      >
        <h1 className=" py-5   text-transparent bg-clip-text bg-gradient-to-r to-tertiary-400 from-secondary-600 text-2xl max-sm:text-[45px] lg:text-8xl lg:leading-normal font-extrabold ">
          Skills
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      ></motion.div>
      <div className="skill-container flex flex-col w-full ">
        <div className="framework flex flex-col  w-[70%] max-sm:w-[95%] m-auto gap-4">
          <p className=" mt-5  max-sm:text-[28px] md:mt-0 text-[50px] md:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  animate">
            Libraries/Frameworks
          </p>

          <Marquee speed={100} className="overflow-hidden">
            <Image
              src="/images/mongodb.png"
              alt=""
              height={150}
              width={150}
              
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/express.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/react.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/nodejs.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125 "
            ></Image>
            <Image
              src="/images/mysql.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <div className="h-150 w-150 bg-white rounded-full relative ">
              <Image
                src="/images/next.svg"
                alt=""
                height={150}
                width={150}
                className="p-6 hover:transform hover:scale-125 "
              ></Image>
            </div>
            <Image
              src="/images/bootstrap.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/tailwind.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
          </Marquee>
        </div>

        <div className="languages mt-5 flex flex-col w-[70%] max-sm:w-[95%]  m-auto">
          <p className=" mt-5 max-sm:text-[28px] md:mt-0 text-[50px] md:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Languages
          </p>
          <Marquee speed={100} direction="right" className="overflow-hidden">
            <Image
              src="/images/c++.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/python.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/html.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/css.png"
              alt=""
              height={175}
              width={175}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/sass.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/javascript.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>

            <Image
              src="/images/typescript.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
          </Marquee>
        </div>

        <div className="other-skills flex  flex-col mt-5  w-[70%]  max-sm:w-[95%] m-auto ">
          <p className="mt-5  max-sm:text-[28px] md:mt-0 text-[50px] md:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Other Skills
          </p>
          <div className="flex">
            <Image
              src="/images/github.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
            <Image
              src="/images/git.png"
              alt=""
              height={150}
              width={150}
              className="p-6 hover:transform hover:scale-125"
            ></Image>
          </div>
        </div>
        <div className="libraries"></div>
      </div>
    </div>
  );
};

export default Skills;
