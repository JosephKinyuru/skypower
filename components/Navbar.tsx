"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname} from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { navbarLinks } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  
  return (
    <>
      <nav className='sticky w-full mx-auto h-18 shadow-xl bg-white top-0 z-30 flex items-center justify-between px-6 py-3'>
        <div className="flex items-center">
          <p className="text-light-1 mr-4">
          <Image
            src='skypowerlogo.svg'
            alt='logo'
            width={200}
            height={70}
            className='object-contain'
            />
          </p>
        </div>

        <div className="items-center hidden lg:flex">
              {navbarLinks.map((link, index) => {
              const isActive =
                  (pathname.includes(link.route) && link.route.length > 1) ||
                  pathname === link.route;

              return (
                  <React.Fragment key={index}>
                  {index > 0 && <span> | </span>}
                  {link.dropdown ? (
                    <Link
                    href={link.route}
                    key={link.label}
                    className={`gap-4 p-4 ${isActive && "text-yellow-custom"} hover:text-yellow-custom text-lg`}
                  >
                  <DropdownMenu>  
                      <DropdownMenuTrigger>
                      <p className='text-light-1'>{link.label}</p>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                      {link.dropdown.map((item, index) => (
                        <DropdownMenuItem key={index}>
                          {item}
                        </DropdownMenuItem>
                      ))}
                      </DropdownMenuContent>
                  </DropdownMenu>
                  </Link>
                  ) : (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={`gap-4 p-4 ${isActive && "text-yellow-custom"} hover:text-yellow-custom text-lg`}
                    >
                      <p className='text-light-1'>{link.label}</p>
                    </Link>
                  )}
                </React.Fragment>
              );
              })}
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center">
            {toggle ? (
              <TfiClose
                className="w-[28px] h-[28px] text-slate-900 cursor-pointer"
                onClick={() => toggleMenu()}
                size={30}
              />
            ) : (
              <RxHamburgerMenu
                className="w-[28px] h-[28px] text-slate-900 cursor-pointer"
                onClick={() => toggleMenu()}
                size={30}
              />
            )}
          </div>
      </nav>
        {toggle && (
        <div className={`fixed inset-y-0 z-10 flex w-80 duration-700 ease-in-out`}>        
          <svg
          className="absolute inset-0 w-full h-full text-white duration-700 ease-in-out"
          style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
          </svg>
            <div 
            className="z-10 flex flex-col flex-1 text-black"
            style={{ marginTop: '100px' }}
            >
              {navbarLinks.map((link, index) => {
              const isActive =
               (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;

                  return (
                      <React.Fragment key={index}>
                      {link.dropdown ? (
                      <Link
                      href={link.route}
                      key={link.label}
                      className={`gap-4 p-4 ${isActive && "text-yellow-custom"}`}
                      >
                      <DropdownMenu>  
                          <DropdownMenuTrigger>
                            <p className='text-light-1' onClick={toggleMenu}>{link.label}</p>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                          {link.dropdown.map((item, index) => (
                              <DropdownMenuItem key={index} onClick={toggleMenu}>
                              {item}
                              </DropdownMenuItem>
                          ))}
                          </DropdownMenuContent>
                      </DropdownMenu>
                      </Link>
                      ) : (
                          <Link
                          href={link.route}
                          key={link.label}
                          className={`gap-4 p-4 ${isActive && "text-yellow-custom"}`}
                          >
                          <p className='text-light-1' onClick={toggleMenu}>{link.label}</p>
                          </Link>
                      )}
                      </React.Fragment>
                  );
                  })}
              </div>
          </div>
        )}
    </>
  )
}

export default Navbar