/* eslint-disable react/no-unescaped-entities */
"use client";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import CallIcon from "@mui/icons-material/Call";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-nunito",
});

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const About = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className="  lg:py-16 h-auto flex w-full  overflow-x-hidden ">
      <div className="container flex  w-full max-sm:flex-col max-sm:mt-[40px] max-sm:mx-auto ">
        <h1 className=" lg:hidden max-sm:mt-[100px] card-wrapper text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl max-sm:text-[45px] lg:text-8xl lg:leading-normal font-extrabold m-auto">
          About Me
        </h1>
        <div className=" flex lg:w-[50%] justify-center items-center">
          <div className="img-div lg:h-[500px] lg:w-[500px]  rounded-full mx-sm:flex ">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: "0" }}
              
              transition={{ duration: 0.8 }}
              className=" max-sm:h-[300px] max-sm:w-[300px] max-sm:mt-[50px] max-sm:mx-auto max-sm:mb-[30px]"
            >
              <Image
                src="/images/RahulProfile.jpeg"
                alt=""
                height={400}
                width={400}
                layout="responsive"
                className="rounded-full animate-border inline-block bg-white bg-gradient-to-r  from-indigo-400 to-cyan-400 bg-[length:500%_500%] p-1  "
              ></Image>
            </motion.div>  
          </div> 
        </div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0" }}
         
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h1 className=" max-sm:hidden card-wrapper text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold m-auto">
            About Me
          </h1>

          <div className="info-card flex flex-col items-center justify-center  bg-gray-900  lg:w-[700px]  max-sm:mx-[20px] max-sm:w-[90%] rounded-xl ">
            <p
              className={` ${nunito.variable} font-nunito text-[18px] text-white mx-[50px] my-[30px] max-sm:mx[20px] max-sm:tracking-[0px] tracking-[2px]`}
            >
              A{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Full Stack Developer
              </span>{" "}
              who enjoys creating user-friendly websites that solve real-world
              problems. With a strong foundation in both front-end and back-end
              technologies, I thrive on bringing ideas to life through clean,
              efficient code and intuitive user experiences. I have a strong
              understanding of{" "}
              <span className={`max-sm:${display ? "inline" : "hidden"}`}>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Data Structures
                </span>{" "}
                and{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Algorithms
                </span>
                , and I am always eager to learn new technologies. My expertise
                includes the{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  MERN
                </span>{" "}
                stack,{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Redux
                </span>
                ,
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Next.js,
                </span>
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  {" "}
                  C++
                </span>
                , and Python. I am also familiar with{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Git
                </span>{" "}
                &{" "}
                <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  GitHub
                </span>
                . I believe in continuous learning and staying up-to-date with
                the latest technologies and best practices in the ever-evolving
                field of web development. I am a proactive problem solver and
                enjoy collaborating with cross-functional teams to deliver
                exceptional results.
              </span>
              <span
                onClick={() => {
                  setDisplay((prev) => !prev);
                }}
                className={`hidden max-sm:flex text-gray-500`}
              >
                show {display ? "less..." : "more..."}
              </span>
            </p>
          </div>
          <div className="link flex gap-5 mx-auto mt-[40px]">
            <Tooltip
              title="Github"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <div className="github flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900 hover:bg-white/95 hover:transform hover:scale-125 duration-300">
                <a href="https://github.com/rahul12km" target="_blank">
                  <GitHubIcon />
                </a>
              </div>
            </Tooltip>

            <Tooltip
              title="LinkedIn"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <div className="linked in flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900 hover:bg-white/95 hover:transform hover:scale-125 duration-300">
                <a href="https://www.linkedin.com/in/rahulkumar256/" target="_blank">
                  <LinkedInIcon color="primary" />
                </a>
              </div>
            </Tooltip>

            <Tooltip
              title="Coding Ninja"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <div className="coding-ninja flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900 hover:bg-white/95 hover:transform hover:scale-125 duration-300">
                <a href="https://www.naukri.com/code360/profile/26574721-56f9-4a03-9d82-6bc8fc8928b8" target="_blank">
                  <Image
                    src="/images/codingninjas.svg"
                    alt=""
                    height={25}
                    width={25}
                  ></Image>
                </a>
              </div>
            </Tooltip>

            <Tooltip
              title="Leetcode"
              arrow
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <div className="leetcode flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900 hover:bg-white/95 hover:transform hover:scale-125 duration-300">
                <a href="https://leetcode.com/u/RAhul_KUMAr420/" target="_blank">
                  <Image
                    src="/images/leetcode.svg"
                    alt=""
                    height={30}
                    width={30}
                  ></Image>
                </a>
              </div>
            </Tooltip>
          </div>
          <div className="contact-info flex mx-auto gap-[20px] mt-[30px]">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=bestrahul123r@gmail.com"
              target="_blank"
            >
              <div className=" mail flex  max-sm:flex-col gap-2  border-white p-2 bg-gray-900 rounded-md hover:bg-gray-700 duration-500 cursor-pointer">
                <Image height={27} width={27} src="/images/gmail.png" alt="" />
                <p className="text-white">bestrahul123r@gmail.com</p>
              </div>
            </a>
            <div className="phone flex gap-2 border-white p-2  bg-gray-900 rounded-md hover:bg-gray-700 duration-500 cursor-pointer">
              <CallIcon color="primary" sx={{ height: "30", width: "30" }} />
              <p className="text-white">+91 7007159256</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
