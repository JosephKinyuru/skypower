"use client"

import { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {  menuSlide, slide } from './anim'
import { navbarLinks } from "@/constants";
import { usePathname } from 'next/navigation';

const Menu = () => {

  const [isOpen, setIsOpen ] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  return (
    <div className='sm:hidden'>

        <button 
            className={styles.button}
            onClick={toggleOpen}
        >
            <div className={styles.hamBox}>
                <div className={`${styles.hamBoxInner} ${isOpen ? styles.hamBoxInnerActive : ""}`}></div>
            </div>
        </button>

        <AnimatePresence mode='wait'>
          { isOpen && (
            <motion.div 
              variants={menuSlide}
              animate="enter"
              exit="exit"
              initial="initial"
              className="block h-screen bg-sky-50 absolute right-0 top-0 text-white w-[100vw]"
            >
                <div className="box-border h-full p-10 flex flex-col justify-between">
                  <div className="flex flex-col text-5xl gap-3 mt-10">
                    <div className="text-gray-600 border-b border-gray-600 uppercase text-xs mb-10">
                      <p>Navigation</p>
                    </div>
                        {navbarLinks.map( (item, index) => { 

                          const isActive =
                            (pathname.includes(item.route) && item.route.length > 1) ||
                            pathname === item.route;
                          
                          return (
                            <motion.div 
                              key={`@$${index}`} 
                              className="relative flex items-center"
                              variants={slide}
                              animate="enter"
                              exit="exit"
                              initial="initial"
                              custom={index*0.4}
                            >
                              <Link
                                href={item.route}
                                onClick={toggleOpen}
                                className={`no-underline text-blue-950 font-sans text-3xl pb-6 ${isActive && "text-yellow-400"}`}
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          )
                        })}
                   
                  </div>

                </div>
            </motion.div>
          )
          }
        </AnimatePresence>

    </div>
  )
}

export default Menu

const NavItems = [
  {
    title: "Get Started",
    href: "/sign-up"
  },
  {
    title: "Sign in",
    href: "/sign-in"
  },
  {
    title: "Pricing",
    href: "/pricing"
  }
]

const FooterItems = [
  {
    title: "Terms",
    href: "#"
  },
  {
    title: "Privacy",
    href: "#"
  },
  {
    title: "Cookies",
    href: "#"
  }
]

