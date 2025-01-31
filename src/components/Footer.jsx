import React from "react";
import { FaFacebook, FaGithubSquare,  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] border-t mx-auto flex items-center justify-between p-6 md:p-10 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-300">Chakkaphat</h3>
        <div className="flex flex-row gap-4 text-gray-400 ">
          <a href="https://github.com/SERPENTX03">
            {" "}
            <FaGithubSquare size={30} />{" "}
          </a>
          <a href="https://www.facebook.com/your.Chakkaphat/">
            {" "}
            <FaFacebook size={30} />{" "}
          </a>
        </div>
      </div>

      <p className="text-gray-400">@ 2024 Chakkaphat</p>
    </div>
  );
};

export default Footer;
