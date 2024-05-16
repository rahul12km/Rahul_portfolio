import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="max-sm:pt-[60px] h-auto flex flex-col w-full px-[30px] mt-[100px]">
      <h1 className=" py-5   text-transparent bg-clip-text bg-gradient-to-r to-tertiary-400 from-secondary-600 text-2xl max-sm:text-[45px] lg:text-8xl lg:leading-normal font-extrabold ">
        Education
      </h1>
      <div className=" college flex max-sm:flex-col  px-[18px] gap-[50px] mt-5">
        <div className="inst-image max-sm:mx-auto  ">
          <Image
            width={150}
            height={150}
            alt=""
            src="/images/college.jpg"
            className="rounded-full  "
          ></Image>
        </div>
        <div className="inst-text flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  animate">
          <p className="font-extrabold max-sm:text-[16px] sm:text-3xl lg:text-[40px] lg:leading-normal">
            Sir M Visvesvaraya Institute of Technology
          </p>

          <p className="lg:text-[25px] max-sm:text-[17px] font-semibold mt-3 mb-3">
            Bachelor of Engineering in Electronics and Communication Engineering
          </p>
          <p className="lg:text-[25px] max-sm:text-[17px] font-semibold  mb-3">Aug 2019 - May 2023</p>
          <p className="lg:text-[25px] max-sm:text-[17px]  font-semibold  mb-3">CGPA - 8.8</p>
        </div>
      </div>
      <div className=" school flex max-sm:flex-col  px-[18px] gap-[50px] mt-5">
        <div className="inst-image  max-sm:mx-auto ">
          <Image
            width={150}
            height={150}
            alt=""
            src="/images/school.png"
            className="rounded-full  "
          ></Image>
        </div>
        <div className="inst-text flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  animate">
          <p className="font-extrabold max-sm:text-[16px] sm:text-3xl lg:text-[40px] lg:leading-normal">
            Kendriya Vidyalaya ASC Center South, Bengaluru
          </p>
          <p className="lg:text-[25px] max-sm:text-[17px]  font-semibold mt-3 mb-3">
            Class XII (AISSCE)
          </p>
          <p className="lg:text-[25px] max-sm:text-[17px]  font-semibold  mb-3">
            April 2018 - March 2019
          </p>
          <p className="lg:text-[25px] max-sm:text-[17px] font-semibold  mb-3">Aggregate: 91.4%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
