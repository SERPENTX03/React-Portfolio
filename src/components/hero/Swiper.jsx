'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/app/styles.css'; // ใช้ styles.css ที่กำหนด

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const ProjectSwiper = ({ projects }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ป้องกัน hydration error ใน Next.js

  return (
    <div className="p-8 ">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // 📱 มือถือ 1 รูป/หน้า
          640: { slidesPerView: 2, spaceBetween: 20 }, // 📱 แท็บเล็ต 2 รูป/หน้า
          1024: { slidesPerView: 3, spaceBetween: 30 }, // 💻 เดสก์ท็อป 3 รูป/หน้า
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        style={{
          '--swiper-pagination-bottom': "-4px",
          '--swiper-pagination-color': "#3b82f6",

        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="relative swiper-slide">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden w-80">
              {/* 🔹 รูปภาพอยู่ด้านบน */}
              <div className="relative w-full h-44">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                  priority
                />
              </div>

              {/* 🔹 เนื้อหาอยู่ด้านล่าง */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>

                {/* 🔹 ปุ่ม GitHub และ Visit Site */}
                <div className="mt-4 flex justify-center gap-4">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white px-4 py-2 rounded-md">
                      GitHub
                    </Button>
                  </Link>
                  <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-black text-white px-4 py-2 rounded-md">
                      Visit Site
                    </Button>
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
