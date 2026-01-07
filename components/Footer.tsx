'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import clsx from "clsx";


export const Footer = () => {

  return (
    <footer aria-labelledby="footer-heading" className={clsx("bg-background z-3 fixed bottom-0 w-full")}>
      <div className={clsx("container mx-auto" )}>
       

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-6  pt-1 md:flex-row">
          <p className="text-center text-sm text-gray-200">
            © {new Date().getFullYear()} Megan midwife. All rights reserved
          </p>
          <Link
            href="/"
            aria-label="Megan midwife"
            className="order-first md:order-0"
          >
            <Image src="/basicLogo.png" alt="Megan midwife logo" width={50} height={7} />
          </Link>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-200"
          >
            <li>
              <Link href="#" className="hover:text-white">
                Terms &amp; conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};







