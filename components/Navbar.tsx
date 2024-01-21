"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { close, menu } from "../assets";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { navbarLinks } from "@/constants";

const Navbar = () => {
  const router = useRouter();
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
                  {index > 0 && <span className="text-light-1"> | </span>}
                  {link.dropdown ? (
                    <Link
                    href={link.route}
                    key={link.label}
                    className={`gap-4 p-4 ${isActive && "text-yellow-custom"}`}
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
                      className={`gap-4 p-4 ${isActive && "text-yellow-custom"}`}
                    >
                      <p className='text-light-1'>{link.label}</p>
                    </Link>
                  )}
                </React.Fragment>
              );
              })}
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain transition-all duration-300 ease-in-out"
              onClick={() => toggleMenu()}
            />
          </div>
      </nav>
      {toggle && (
        <div
        className={`lg:hidden sticky flex flex-col justify-end items-start ${
          toggle ? 'transition-transform transform-translate-x-0' : 'transform-translate-x-full'
        }`}
        style={{
          width: 'calc(100vw - 100px)',
          marginLeft: '20px',
        }}
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
                    className={` p-4 ${isActive && "text-yellow-custom mb-1"}`}
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
                    className={`gap-4 p-4 ${isActive && "text-yellow-custom"}`}
                  >
                    <p className='text-light-1'>{link.label}</p>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  )
}

export default Navbar