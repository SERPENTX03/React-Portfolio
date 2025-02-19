import React from "react";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiPrisma, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import Marquee from "react-fast-marquee";

const icons = [
  FaHtml5, IoLogoCss3, IoLogoJavascript, RiNextjsFill, SiTypescript,
  FaReact, RiTailwindCssFill, FaNodeJs, SiPrisma, SiMongodb, SiMysql
];

const iconColors = {
  FaHtml5: "#E44D26",        
  IoLogoCss3: "#1572B6",      
  IoLogoJavascript: "#F7DF1E",
  RiNextjsFill: "#000000",    
  SiTypescript: "#3178C6",  
  FaReact: "#61DAFB",       
  RiTailwindCssFill: "#38B2AC", 
  FaNodeJs: "#83CD29",      
  SiPrisma: "#0C344B",       
  SiMongodb: "#47A248",       
  SiMysql: "#00758F",      
};

// 🔹 แบ่ง Array ออกเป็น 2 กลุ่ม
const half = Math.ceil(icons.length / 2);
const firstRowIcons = icons.slice(0, half); 
const secondRowIcons = icons.slice(half);   

const IconDev = () => {
  return (
    <section className="px-8 text-neutral-200 my-10">
      <div className="max-w-[800px] mx-auto space-y-4">
        
        {/* 🔹 แถวแรก (เลื่อนไปทางซ้าย) */}
        <Marquee direction="left" speed={50} className="overflow-hidden">
          <div className="flex  gap-12">
            {firstRowIcons.map((Icon, index) => (
              <Icon key={index} className="text-6xl md:text-7xl"
                style={{ color: iconColors[Icon.name] || "#ffffff" }} 
              />
            ))}
          </div>
        </Marquee>

        {/* 🔹 แถวที่สอง (เลื่อนไปทางขวา) */}
        <Marquee direction="right" speed={50} className="overflow-hidden">
          <div className="flex gap-12">
            {secondRowIcons.map((Icon, index) => (
              <Icon key={index} className="text-6xl md:text-7xl"
                style={{ color: iconColors[Icon.name] || "#ffffff" }} 
              />
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
};

export default IconDev;
