import React from "react";
import { fetchAllProject } from "@/actions/Project";
import ProjectSwiper from "@/components/hero/Swiper";
import IconDev from "./IconDev";

const Hero = async () => {
  const allProjects = await fetchAllProject();

  return (
    <div>
      <section className="mt-32 text-neutral-200 flex justify-center items-center">
        <h1 className="animate- inline-block text-xl w-fit font-semibold rounded-lg px-1 py-1 bg-gradient-to-tr from-transparent to-blue-500 from-20%">
          <span className="block bg-[#121212] rounded-lg px-5 py-2">
            MyProject
          </span>
        </h1>
      </section>

      {allProjects.length > 0 ? (
        <ProjectSwiper projects={allProjects} />
      ) : (
        <p>No projects found.</p>
      )}

      <section className="mt-10 text-neutral-200 flex justify-center items-center">
        <h1 className="animate- inline-block text-xl w-fit font-semibold rounded-lg px-1 py-1 bg-gradient-to-bl from-transparent to-purple-500 from-20%">
          <span className="block bg-[#121212] rounded-lg px-5 py-2">
            Skils
          </span>
        </h1>
      </section>
        <IconDev />
    </div>
  );
};

export default Hero;
