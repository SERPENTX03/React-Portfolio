"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    image: "/assets/Imgs/project1.jpg",
    title: "Project 1",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    image: "/assets/Imgs/project2.jpg",
    title: "Project 2",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    image: "/assets/Imgs/project3.jpg",
    title: "Project 3",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    image: "/assets/Imgs/project3.jpg",
    title: "Project 4",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    image: "/assets/Imgs/project2.jpg",
    title: "Project 5",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    image: "/assets/Imgs/project1.jpg",
    title: "Project 6",
    description: "UI for frontend developer using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const selectedProject = projects[currentProject];

  return (
    <div
      className="mt-10 relative max-w-[800px] mx-auto p-6 md:my-2 flex flex-col md:flex-row"
      id="portfolio"
    >
      {/* Project Details */}
      <div className="glass p-6 w-full border-2 max-w-[600px]">
        <div className="w-full h-80 relative">
          {/* Dynamic Image */}
          <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg mb-4"
          />
        </div>
        <h2 className="text-white text-xl font-bold mt-4">{selectedProject.title}</h2>
        <p className="text-gray-200 my-4">{selectedProject.description}</p>
        <div className="flex space-x-4">
          <a
            href={selectedProject.links.site}
            className="flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg transition duration-300"
          >
            View Site
          </a>
          <a
            href={selectedProject.links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 flex items-center"
          >
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>

      {/* Project Navigation */}
      <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] text-center hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
