"use client";

import { Content } from "@prismicio/client";
import Image from "next/image";

import clsx from "clsx";
// import Image from "next/image";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LinkField } from "@prismicio/client";
import {
  HiBars3,
  HiXMark,
} from "react-icons/hi2";
import { TransitionLink } from "@/components/TransitionLink";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import { Link } from "next-view-transitions";
import { text } from "stream/consumers";
//import { type } from '../slices/DocHeading/index';

type NavIconsProps = {
  settings: Content.SettingsDocument;
  className?: string;
  tabIndex?: number;
};


// const social = [
//   facebook= FaFacebookSquare,
//   instagram= FaInstagramSquare

// ]
// const NavIcons = ({ className = "", tabIndex, settings }: NavIconsProps) => (
  
//   <div className={clsx("flex items-center gap-8", className)}>

//     {settings.data.social_links.map((icon)=>(
       
//         <a href="#" key={icon.key} className="text-black" aria-label={icon.link_type} tabIndex={tabIndex}>bb
//           {icon.text==="Facebook"?<FaFacebookSquare />:
//             icon.text==="Instagram"?<FaInstagramSquare />:
//             icon.text==="X"?<FaSquareXTwitter />:
//             icon.text==="Linkedin"?<FaLinkedin />:
//             ""}
//         </a>
       
    
//         )
//     }
//   }
   
  
    
//   </div>
// );

type NavBarProps = {
  settings: Content.SettingsDocument;
};


export const NavBar = ({ settings }: NavBarProps) => {
 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <header>
      <div className="navbar fixed top-0 left-0 z-50 w-full min-h-48 bg-background text-white ">
        <div className="hidden inset-x-0  absolute bottom-0 z-40 min-w-full  mb-4 min-h-5 lg:block items-center justify-between ">
        <Link className="px-4 mx-3 border-b-2 pb-2 mb-3" href={"/"}>Home</Link>
        <Link className="px-4 mx-3 border-b-2 pb-2 mb-3" href={"/about"}>About</Link>
        <Link className="px-4 mx-3 border-b-2 pb-2 mb-3" href={"/services"}>Services</Link>
        <Link className="px-4 mx-3 border-b-2 pb-2 mb-3" href={"/blog"}>Blog</Link>
        </div>
        <div className="flex items-center justify-between p-2 md:p-4">
          <button
            onClick={toggleDrawer}
            aria-label="Menu"
            className="cursor-pointer p-2 text-white transition-colors duration-300 hover:bg-white/20"
          >
            <HiBars3 size={24} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 transform text-balance items-center mt-10 ">
            <TransitionLink href="/" className="content-center text-balance items-center mb-20 ">
              <PrismicNextImage field={settings.data.fallback_og_image} className="mx-auto mt-5" width={100} height={100} />
              
              <div className="w-fit"><PrismicText field={settings.data.fallback_og_caption} /></div>
            </TransitionLink>

          </div>

          <div className="flex">
            <div className={clsx("flex items-center gap-6")}>
                {settings.data.social_links.map((icon, index)=>(
                    <a href="#" key={icon.key} className="darkergreen" aria-label={icon.link_type} tabIndex={index}>
                      {icon.text==="Facebook"?<FaFacebookSquare size={28} />:
                        icon.text==="Instragram"?<FaInstagramSquare size={28} />:
                        icon.text==="X"?<FaSquareXTwitter size={28} />:
                        icon.text==="Linkedin"?<FaLinkedin size={28} />:
                        ""}
                    </a>
                    )
                  )
                }
                
              </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "nav-drawer-blur fixed inset-0 z-40 background opacity-0 transition-all duration-500",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none",
        )}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      <div
        className={clsx(
          "nav-drawer fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-r from-background  p-6 transition-transform duration-500",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
      >
        <div className="mb-6 flex justify-end">
          <button
            className="p-2 text-white transition-colors duration-300 hover:bg-background"
            onClick={toggleDrawer}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <HiXMark size={24} />
          </button>
        </div>

         <nav className="space-y-4" aria-label="Main Navigation">
         {settings.data.navigation_link.map((link) => (
            <TransitionLink
              field={link}
              onClick={() => setIsDrawerOpen(false)}
              key={link.key}
              aria-label={isDrawerOpen ? "draw open": "drawer closed"}
              className="block border-b h-12 border-white/10 py-2 text-xl font-semibold tracking-wide text-white uppercase hover:text-gray-300"
              tabIndex={isDrawerOpen ? 0 : -1}
            />
          ))}
          <div className="pt-4 md:hidden">
            {/* <NavIcons
              className="justify-around"
              tabIndex={isDrawerOpen ? 0 : -1}
            /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};