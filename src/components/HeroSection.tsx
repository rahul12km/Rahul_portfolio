/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  function scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) return;
  
    let offset = 100; 
  
    
    if (window.innerWidth < 768) {
        offset = 600; 
    }
  
    const offsetPosition = section.offsetTop + offset;
  
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

  

  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-12 px-[40px] ">
        <Spotlight
          className="-top-40 right-0 md:right-60 md:-top-20"
          fill="white"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold mt-[130px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Rahul",
                1000,

                "Web Developer",
                1000,

                "Programmer",
                1000,
                "Aspiring SDE",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about creating visually appealing and user-friendly
            websites, I possess a strong understanding of Full Stack
            Development. Committed to staying up-to-date with the latest
            industry trends and technologies.
          </p>
          <div className="relative" onClick={()=>console.log("clicke bhai")}>
          <div
             
              className="  px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
              onClick={()=>scrollToSection("about")}
            >
              Hire Me
            </div>
            <a
              href="/Docs/CV.pdf"  target="_blank"
              className="  px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 cursor-pointer"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
         
        </div>
         
        </motion.div>
        {/*------------------------------------------ image-------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 cursor-pointer"
        >
           
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ml-[30px] ">
            <Image
              src="/images/coder.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "
              width={500}
              height={500}
            />
             
          </div>
        
         
         
        </motion.div>
      </div>
    
  );
};

export default HeroSection;
