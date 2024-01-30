import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from "../constants";
import { FaFacebook, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";


const getSocialIcon = (name: string) => {
  const socialIcons: Record<string, JSX.Element> = {
    Facebook: <FaFacebook className="w-[24px] h-[24px] cursor-pointer"/>,
    X: <BsTwitterX className="w-[24px] h-[24px] cursor-pointer"/>,
    Instagram: <FaInstagram className="w-[26px] h-[26px] cursor-pointer"/>,
    LinkedIn: <FaLinkedin className="w-[26px] h-[26px] cursor-pointer"/>,
  };

  return socialIcons[name] || null;
};

const Footer = () => {
  return (
    <footer className={`flex justify-center items-center sm:py-16 py-6 flex-col bg-slate-900 text-white`}>
      <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mb-8 md:mr-8 md:mb-0'>
          <Image
            src='skypowerlogo.svg'
            alt='logo'
            width={266}
            height={72}
            className='object-contain'
          />
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-4 pl-4 max-w-[310px] `}>SKYPOWER LIMITED</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-4 pl-4 max-w-[340px] `}>Ⓒ 2024 Skypower All rights reserved</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-1 pl-4 max-w-[310px]`}>Designed by Skypower Limited</p>
        </div>
        <div className='flex-1 flex flex-col justify-start mb-8 md:mr-8 md:mb-0'>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-8 pl-4 max-w-[320px]`}>Elgon Court, Ralph Branche Rd, C6</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-1 pl-4 max-w-[320px]`}>P.O.Box 4/85 00100 Nairobi</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-1 pl-4 max-w-[310px]`}>info@skypower.co.ke</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-1 pl-4 max-w-[320px]`}>+44 987 065 908</p>
          <p className={`font-poppins font-normal text-[18px] leading-[30.8px] mt-1 pl-4 max-w-[310px]`}>www.skypower.co.ke</p>
        </div>
        <div className="flex-[1.5] grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-white cursor-pointer transition-all duration-300 ease-in-out group-hover:pl-3 hover:text-secondary hover:pl-2 ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {footerlink.title === "socials" ? (
                    <Link href={link.link}>{getSocialIcon(link.name)}</Link>
                  ) : (
                    <Link href={link.link}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </footer>
  );
};

export default Footer;