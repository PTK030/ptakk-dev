"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectSliderProps {
    images: string[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ images }) => {
    return (
        <div className="project-slider-wrapper" style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem' }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                style={{ width: '100%', height: '100%' }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectSlider;
