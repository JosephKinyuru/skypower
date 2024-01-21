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
  
  return (
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
            onClick={() => setToggle(!toggle)}
          />
          <aside
            className={`hidden lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 lg:bottom-0 lg:right-0 lg:p-50 lg:pt-50 lg:pb-10 lg:w-min-75vw lg:h-screen lg:outline-none lg:bg-white lg:shadow-lg lg:z-9 lg:transition-transform lg:transition-visibility ${
              toggle ? "lg:translate-x-0 lg:visible" : "lg:translate-x-full lg:hidden"
            }`}
            style={{
              filter: "none",
              pointerEvents: "auto"
            }}
          >
          </aside>
        </div>


    </nav>
  )
}

export default Navbar