import React from 'react';
import { fetchAllProject } from '@/actions/Project';
import ProjectSwiper from '@/components/hero/Swiper';

const Hero = async () => {
  const allProjects = await fetchAllProject();

  return (
    <div>
      <h2>My Portfolio</h2>
      {allProjects.length > 0 ? (
        <ProjectSwiper projects={allProjects} />
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default Hero;
