"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaLine,
  FaGithubSquare,
  FaReact,
  FaJs,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssLine, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const Services = [
    {
      Maintitle: "สร้างเว็บไซต์ที่รองรับทุกขนาด",
    },
    {
      Subtitle:
        "เว็บไซต์โหลดเร็ว ทันสมัย React, Node.js และTailwind Css ส่งเว็บผ่าน Github เว็บทำงานในVercle สามารถนำไปลิงค์ไปใช้ได้เลย ผ่านvercel.app",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, offset: 120 ,once: false});
  }, []);

  return (
    <section className=" max-w-[1250px] mx-auto md:mb-32 mt-40">
      <div className="grid md:grid-cols-2  mt-10 place-items-center mx-8">
        <div className="max-w-[800px] mb-8  ">
          <p className="text-gray-200 lg:text-6xl md:text-5xl text-3xl tracking-tight">
            บริการ <br />
            <TypeAnimation
              sequence={[
                "เว็บไซต์พอร์ตโฟลิโอ",
                1000,
                "เว็บไซต์โปรเจกจบ",
                1000,
                "เว็บไซต์อื่นๆ ลองคุยก่อนได้",
              ]}
              style={{ fontSize: "0.8em", display: "inline-block" }}
              speed={30}
              repeat={Infinity}
              className="font-bold italic"
            />
          </p>
          <div className="mt-2">
            {Services.map((service, index) => (
              <div className="text-gray-200" key={index}>
                <h1 className="text-xl md:text-3xl ">{service.Maintitle}</h1>
                <p className="text-base">{service.Subtitle}</p>
              </div>
            ))}
          </div>
          <ul className="text-gray-200 flex justify-center md:justify-start  space-x-4  mt-8">
            <li>
              <a
                href="https://www.facebook.com/your.Chakkaphat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://line.me/ti/p/vGMFpZ_C2h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLine size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SERPENTX03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={30} />
              </a>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start text-3xl space-x-4 mt-5">
            <FaReact className="text-sky-400" />
            <RiNextjsFill className="text-black bg-white rounded-full" />
            <FaJs className="text-yellow-300" />
            <SiTypescript className="text-blue-500" />

            <FaNodeJs className="text-green-400" />
            <RiTailwindCssLine className="text-sky-500" />
            <SiMongodb className="text-green-500 " />
          </div>
        </div>
        <Image
        data-aos='fade-up'
          src="/assets/Imgs/minecraft.png"
          alt="Code Image"
          width={300}
          height={300}
          className="rounded-2xl md:w-[500px] mb-4"
        />{" "}
      </div>
    </section>
  );
};

export default Hero;
