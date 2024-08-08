"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname} from "next/navigation";
import { motion } from 'framer-motion';

import { navbarLinks } from "@/constants";
import Menu from './MobileMenu/Menu';

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <>
      <nav 
        onMouseLeave={() => setActive(null)} // resets the state
        className='sticky w-full mx-auto h-14 shadow-xl bg-zinc-50 border-b border-gray-200/90 top-0 z-30 flex items-center justify-between px-6 py-3'
      >
        <Link href={"/"} className="flex items-center mr-4">
          <Image
            src='skypowerlogo.svg'
            alt='logo'
            width={200}
            height={70}
            className='object-contain'
            />
        </Link>

        <Menu/>

        <div className="items-center hidden 2lg:flex">
              {navbarLinks.map((link, index) => {
              const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

              return (
                  <React.Fragment key={index}>
                  {/* {index > 0 &&  <span className="h-[30px] w-px bg-gray-200" aria-hidden="true"/> } */}
                  {index > 0 &&  <span>|</span> }
                  {link.dropdown ? (
                    <div
                        key={link.label}
                        onMouseEnter={() => setActive(link.label)}
                        className={`relative gap-4 p-4 ${isActive && "text-yellow-400"} hover:text-yellow-400 cursor-pointer text-black hover:opacity-[0.9]`}
                    > 
                        <motion.a 
                            transition={{ duration: 0.3 }}
                            className='text-semibold'
                            href={link.route}
                        >
                            {link.label}
                        </motion.a>

                        {active !== null && (
                            <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={transition}
                            >
                            {active === link.label && (
                                <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                                <motion.div
                                    transition={transition}
                                    layoutId="active" // layoutId ensures smooth animation
                                    className="bg-white  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2]  shadow-xl"
                                >
                                    <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                    >
                                        <div className="flex flex-col space-y-4 text-sm">
                                            {link.dropdown.map((item, index) => (
                                                <Link href={item.route} key={index} className="text-neutral-700 hover:text-black ">
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                                </div>
                            )}
                            </motion.div>
                        )}

                    </div>
                  ) : (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={`gap-4 p-4 ${isActive && "text-yellow-400"} hover:text-yellow-400`}
                    >
                      <p className='text-semibold'>{link.label}</p>
                    </Link>
                  )}
                </React.Fragment>
              );
              })}
          </div>
      </nav>
    </>
  )
}

export default Navbar


