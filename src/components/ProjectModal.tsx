"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ProjectModal: React.FC<Props> = ({ children }) => {
  return (
    <div className="fixed flex h-screen w-full bg-[rgba(0,0,0,.5)] z-40 top-0 left-0">
      <div className="relative text-white bg-gray-900 lg:max-w-[800px] max-sm:max-w-[550px] px-[30px] z-50 m-auto pt-2 flex flex-col rounded-[3px] max-sm:mx-2">
        {children}
      </div>
    </div>
  );
};

export default ProjectModal;
