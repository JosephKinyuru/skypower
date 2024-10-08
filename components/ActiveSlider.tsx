"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {Pagination, FreeMode, Autoplay } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx';
import { Products, Clients } from '@/constants';

const ActiveSlider = () => {

  return (
    <>
        <section className='py-24 bg-sky-50 shadow-2xl shadow-black/30'> 
            <div className="container mb-14">
                <div className="section-heading">
                    <h2 className="section-title">Our Solutions & Products</h2>

                    <p className="section-description mt-5">
                    Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
                    </p>
                </div>
            </div>
            
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}

                freeMode={true}
                pagination={{
                    clickable:true
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay:4500
                }}
                loop={true}
                className='max-w-[90%] lg:max-w-[80%]'
            >
                {Products.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className='flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] width-[215px} lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer'>
                            <div 
                            className='absolute inset-0 bg-cover bg-center' 
                            style={{backgroundImage: `url(${item.backgroundImage})`}}
                            />
                            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                            <div className='relative flex flex-col gap-3'>
                                <item.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]'/>
                                <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                                <p className='lg:text-[18px]'>{item.description}</p>
                            </div>
                            <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

        <div className='inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-50 to-transparent'></div>

        <section className='py-24 bg-slate-50'>

            <div className="container mb-14">
                <div className="section-heading">
                    <h2 className="section-title">Our Clients</h2>

                    <p className="section-description mt-5">
                    Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
                    </p>
                </div>
            </div>

            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    }
                }}

                freeMode={true}
                pagination={{
                    clickable:true
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay:4500
                }}
                loop={true}
                className='max-w-[90%] lg:max-w-[80%]'
            >
                {Clients.map((item) => (
                    <SwiperSlide key={item.client}>
                        <div className='flex items-center justify-center mb-8 w-full'>
                            <Link href={item.link}>
                                <div className='relative group'>
                                    <Image
                                        src={item.logo}
                                        alt={`${item.client} logo`}
                                        width={200} 
                                        height={80} 
                                        className='object-contain w-full h-auto'
                                    />
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </>
  )
}

export default ActiveSlider