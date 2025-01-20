import Image from "next/image";
import React from "react";
import {
  DiJavascript,
  DiNodejs,
  DiHtml5,
  DiGithubBadge,
  DiCss3,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";

const About = () => {
  const abouts = [
    {
      title: "Start",
      description: "พัฒนาด้วย React Tailwind Next",
    },
    {
      title: "Middle",
      description:
        "พัฒนาด้วย React Tailwind Next ถ้ามีหลังบ้านใช้เป็น NodeJS ",
    },
  ];

  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      {/* Mobile */}

      {/* Imge Project1 */}
      <div className="relative group">
        <div
          className="w-full h-full absolute
         -inset-1 bg-gradient-to-r from-teal-100
          to-teal-900 rounded-lg blur opacity-25 
          group-hover:opacity-100 transition duration-300"
        ></div>

        <div
          className="relative w-full p-4 bg-white bg-opacity-10
            backdrop-blur-lg rounded-lg"
        >
          <Image
            src="/assets/Imgs/project1.jpg"
            alt="Code Image"
            width={300}
            height={300}
            className="rounded-2xl md:w-[500px] mb-4"
          />{" "}
        </div>
      </div>

      {/* Contecn 1*/}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          {abouts[0].title}{" "}
        </h2>
        <p className="text-gray-300 mb-4">{abouts[0].description}</p>
        <div className="hidden md:flex flex-wrap gap-4 text-4xl justify-center">
          <RiReactjsFill className="text-blue-500" />
          <RiNextjsFill className="text-black bg-white rounded-full" />
          <DiJavascript className="text-yellow-300" />
          <SiTypescript className="text-blue-500" />
          <RiTailwindCssFill className="text-sky-400" />
          <DiGithubBadge className="text-gray-300" />
        </div>
      </div>

      {/* Content 2 */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          {abouts[1].title}
        </h2>
        <p className="text-gray-300 mb-4">{abouts[1].description}</p>
        <div className="hidden md:flex flex-wrap gap-4 text-4xl justify-center">
          <RiReactjsFill className="text-blue-500" />
          <RiNextjsFill className="text-black bg-white rounded-full" />
          <SiTypescript className="text-blue-500" />

          <DiJavascript className="text-yellow-300" />
          <RiTailwindCssFill className="text-sky-400" />
          <DiNodejs className="text-green-500" />
          <DiGithubBadge className="text-gray-300" />
        </div>
      </div>

      {/* Imge Projece2 */}
      <div className="relative group">
        <div
          className="w-full h-full absolute
         -inset-1 bg-gradient-to-r from-teal-100
          to-teal-900 rounded-lg blur opacity-25 
          group-hover:opacity-100 transition duration-300"
        ></div>

        <div
          className="relative w-full p-4 bg-white bg-opacity-10
            backdrop-blur-lg rounded-lg"
        >
          <Image
            src="/assets/Imgs/project2.jpg"
            alt="Code Image"
            width={300}
            height={300}
            className="rounded-2xl md:w-[500px] mb-4"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
