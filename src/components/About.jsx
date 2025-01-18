import Image from "next/image";
import React from "react";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiBootstrap,
  DiHtml5,
  DiMongodb,
  DiGithubBadge,
  DiCss3,
} from "react-icons/di";

const About = () => {
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
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills </h2>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sunt
          eos at. Quasi enim distinctio, ipsum eaque inventore blanditiis!
          Quisquam qui commodi quod voluptate et non, accusamus magni veniam
          similique!
        </p>
        <div className="hidden md:flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-500" />
          <DiJavascript className="text-yellow-300" />
          <DiBootstrap className="text-purple-500" />
          <DiNodejs className="text-green-500" />
          <DiMongodb className="text-green-800" />
          <DiGithubBadge className="text-gray-300" />
        </div>
      </div>


{/* Content 2 */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Frontened Experience </h2>
        <p className="text-gray-300 mb-4">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quisquam quaerat modi ipsum ipsa debitis numquam, inventore amet est earum?
        </p>
        <div className="hidden md:flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-500" />
          <DiJavascript className="text-yellow-300" />
          <DiBootstrap className="text-purple-500" />
          <DiNodejs className="text-green-500" />
          <DiMongodb className="text-green-800" />
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


{/* Imge Progect3 */}
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
            src="/assets/Imgs/project3.jpg"
            alt="Code Image"
            width={300}
            height={300}
            className="rounded-2xl md:w-[500px] mb-4"
          />{" "}
        </div>
      </div>

{/* Content 3 */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Fullstack Experience </h2>
        <p className="text-gray-300 mb-4">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo atque incidunt nostrum quas voluptas in!
        </p>
        <div className="hidden md:flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-500" />
          <DiJavascript className="text-yellow-300" />
          <DiBootstrap className="text-purple-500" />
          <DiNodejs className="text-green-500" />
          <DiMongodb className="text-green-800" />
          <DiGithubBadge className="text-gray-300" />
        </div>
      </div>

    

    </div>
  );
};

export default About;
