"use client";
import React, { useRef, useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import projectData from "../data/projects.json";

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

interface props {
  index: number;
}

const TailwindCarousel: React.FC<props> = ({ index }) => {
  const featuredProjects = projectData.projects.filter(
    (project: Project) => project?.description
  );

  const imageDiv = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"prev" | "next">("next");
  const [project, setProject] = useState<Project>({
    id: 0,
    title: "",
    description: "",
    slug: "",
    image: [],
    deploy: "",
    frontend: "",
    backend: "",
    techUsed: "",
  });

  const nextImage = () => {
    setDirection("next");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project?.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setDirection("prev");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project?.image.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setProject(featuredProjects[index]);
  }, []);

  return (
    <div className="crousel-container flex justify-center items-center lg:h-[400px] lg:w-[600px] max-sm:h-[250px] max-sm:w-[320px] bg-gray my-3 relative overflow-hidden">
      <div className="image-cont h-full w-full" ref={imageDiv}>
        {project?.image.map((imgsrc, i) => (
          <div
            className={`absolute h-full w-full ${
              currentImageIndex === i
                ? direction === "next"
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
                : "hidden"
            }`}
            key={index}
          >
            <img className="h-full w-full" src={imgsrc} alt="abcd" />
          </div>
        ))}
      </div>
      <div
        className="forward-icon absolute my-auto right-[5px] text-black h-[40px] w-[40px] rounded-full hover:bg-gray-600/30 hover:text-white flex justify-center items-center cursor-pointer"
        onClick={nextImage}
      >
        <ArrowForwardIosIcon />
      </div>
      <div
        className="backward-icon absolute my-auto left-[5px] text-black h-[40px] w-[40px] rounded-full hover:bg-gray-600/30 hover:text-white flex justify-center items-center cursor-pointer"
        onClick={prevImage}
      >
        <ArrowBackIosNewIcon />
      </div>
    </div>
  );
};

export default TailwindCarousel;
