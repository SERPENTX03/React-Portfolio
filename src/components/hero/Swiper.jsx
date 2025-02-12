'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const ProjectSwiper= ({ projects }) => {
  return (
    <div className="p-8 mt-20 ">
      <Swiper
        slidesPerView={1}
        grid={{ rows: 1, fill: 'row' }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="max-w-4xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="gird grid-cols-3 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  className="rounded-t-lg object-cover"
                  priority 
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="py-3">
                   <Button> GitHub</Button>
                  </Link>
                  <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="py-3">
                    <Button>Visit Site</Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;
