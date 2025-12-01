"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import slide1 from '../../assets/bowls-slider/01 Utsav bowl.webp';
import slide2 from '../../assets/bowls-slider/02 Sukoon Bowl.webp';
import slide3 from '../../assets/bowls-slider/03 Sabzi Bowl.webp';
import slide4 from '../../assets/bowls-slider/04 Lean Bowl.webp';
import slide5 from '../../assets/bowls-slider/05 Hermony Bowl.webp';

const slides = [slide1, slide2, slide3, slide4, slide5]

export const HeroPage = () => {
  return (
    <div className="hero-section">
        <div className="hero-container">
            <div className="section-left">
                <h1>
                    Food designed to <br />nourish the body, <br />satisfy the palate, <br />and fit effortlessly <br />into modern life.
                </h1>
                <div className="btn-group">
                    <Link href={'/fitgreen-bowls'}>
                        <div className="btn-primary">about fitgreen</div>
                    </Link>
                    <Link href="https://player.vimeo.com/video/1116593246?color=f26522&title=0&byline=0&portrait=0" target='_blank' className="btn-circle">
                        <i className="ri-play-fill"></i>
                    </Link>
                </div>
            </div>
            <div className="section-right">
                <Swiper                    
                    effect={'fade'}
                    navigation={false}
                    loop={true} // enable infinite loop
                    speed={1000}
                    autoplay={{
                        delay: 3000, // 3 seconds per slide
                        disableOnInteraction: false, // keep autoplay after user interaction
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        slides.map((slide, index)=>(
                            <SwiperSlide key={index}>
                                <Image src={slide} alt={`Slide ${index + 1}`} priority={true}/>
                            </SwiperSlide>  
                        ))
                    }                  
                </Swiper>
            </div>                
        </div>
        <div className="bg-white"></div>
        <div className="move_to">
            <a href="/#our_bowl">
                fitgreen bowls
            </a>
        </div>
    </div>
  )
}
