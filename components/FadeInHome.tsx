"use client"

import Image from 'next/image'
import { Fade } from 'react-awesome-reveal';

import GetInTouch from '@/components/GetInTouch';
import { robot, robot2, robot3 } from '@/assets';

const FadeInHome = () => {
  return (
    <>
        <Fade direction="left" delay={300} triggerOnce={true}>
        <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
            <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-black sm:leading-[100.8px] leading-[75px] sm:mt-9">
                Delivering <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Innovative</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
                <GetInTouch />
            </div>
            </div>

            <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-black sm:leading-[100.8px] leading-[75px] w-[120%]">
            Engineering Solutions.
            </h1>
            <p className='font-poppins font-normal text-[#000000] text-[18px] leading-[30.8px] max-w-[470px] mt-5 opacity-70'>
            Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
            </p>
        </div>
        </Fade>
        <Fade direction="right" delay={200} triggerOnce={true}>
        <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
            <Image 
            src={robot2} 
            alt="billing" 
            className="w-[100%] h-[100%]" 
            /> 

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
        </div>

        <div className='sm:hidden flex justify-center items-center p-6'>
            <GetInTouch />
        </div>
        </Fade>    
    </>
  )
}

export default FadeInHome