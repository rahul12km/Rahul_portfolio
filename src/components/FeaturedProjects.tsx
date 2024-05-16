/* eslint-disable react/no-unescaped-entities */
"use client";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useEffect } from "react";
import projectData from "../data/projects.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

import TailwindCarousel from "./TailwindCarousel";

interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: string[];
  deploy: string;
  frontend: string;
  backend: string;
  techUsed: string;
}
const FeaturedProjects = () => {
  const [modalOpen, setModalOpen] = useState<number>();
  const featuredProjects = projectData.projects.filter(
    (project: Project) => project.description
  );

  return (
    <div className=" max-sm:pt-[70px] h-auto py-12 mt-[100px] ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            My Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn about my projects and what I've built so far!
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((project: Project, index) => (
            <div key={project.id} className="flex justify-center">
              {/* -----------------------------------------------------------------modal --------------------------------------------------------------*/}

              {modalOpen === index && (
                <ProjectModal>
                  <div className="flex justify-between px-5 mt-4">
                    <h1 className="text-2xl font-bold ">{project?.title}</h1>
                    <button type="button" onClick={() => setModalOpen(-1)}>
                      <CloseIcon />
                    </button>
                  </div>  
                  <div className="flex mx-auto">
                    <TailwindCarousel index={index} />
                  </div>

                  <div className="flex flex-col gap-2 px-5">
                    <p className="lg:text-[20px] mt-4  max-sm:text-[15px]">
                      {" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-tertiary-400 from-secondary-600">
                      Description:</span>{project?.description}
                    </p>
                    <p className="lg:text-[20px] mt-2 max-sm:text-[15px]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-tertiary-400 from-secondary-600">Technology Used:</span>  {project?.techUsed}
                    </p>

                    <div className="links text-[20px] mt-2 flex justify-center w-full gap-[20px] mb-4">
                      <Tooltip
                        title="Deployed link"
                        placement="top"
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                      >
                        <div className="deploy flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900">
                          <a href={project.deploy} target="_blank" className="">
                            <AllInclusiveIcon />
                          </a>
                        </div>
                      </Tooltip>

                      <Tooltip
                        title="Frontend"
                        placement="top"
                        arrow
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                      >
                        <div className="frontend flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900 ">
                          <a
                            href={project?.frontend}
                            target="_blank"
                            className=""
                          >
                            <GitHubIcon />
                          </a>
                        </div>
                      </Tooltip>

                      {project?.backend.length > 2 && (
                        <Tooltip
                          title="Backend"
                          arrow
                          placement="top"
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                        >
                          <div
                            data-tooltip-target="tooltip-default"
                            className="backend flex flex-col items-center justify-center h-[48px] w-[48px] rounded-full bg-white text-gray-900"
                          >
                            <a
                              href={project?.backend}
                              target="_blank"
                              className=""
                            >
                              <GitHubIcon />
                            </a>
                          </div>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </ProjectModal>
              )}
              {/*------------------------------------------------------------ card ------------------------------------------------------------*/}
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="img-prj">
                  <Image
                    src={project?.image[0]}
                    height={400}
                    width={400}
                    alt={project.title}
                  ></Image>
                </div>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    className="text-white  cursor-pointer"
                    onClick={() => {
                      setModalOpen(index);
                    }}
                  >
                    Show More
                  </button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
