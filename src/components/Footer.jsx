import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { styles } from "../styles";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: "/assets/icons/instagram.svg" },
    { name: "Twitter", icon: "/assets/icons/twitter.svg" },
    { name: "LinkedIn", icon: "/assets/icons/linkedin.svg" },
  ];

  return (
    <div className={`w-full py-8 cursor-pointer px-4 ${styles.paddingX} min-h-[80px]`}>
      <div className='w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[0.1px] border-[#4cdef5]/20 gap-4'>
        <p className='text-neutral-400 text-[18px] leading-[30px] text-center md:text-left'>
          Copyright © 2025 Nikhil Mamilla. All rights reserved.
        </p>

        <p className='text-neutral-400 text-[18px] leading-[30px] text-center'>
          Created by {" "}
          <span className='text-[#4cdef5] hover:text-[#1b7bb3] transition-colors duration-300'>
            Nikhil Mamilla
          </span>
        </p>

        <div className='flex flex-row md:mt-0 mt-2 gap-6 justify-center'>
          <a href="https://instagram.com/nikhil.mamilla" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-[21px] h-[21px] text-[#4cdef5] hover:text-[#1b7bb3] transition-colors duration-300" />
          </a>
          <a href="https://github.com/NikhilMamilla" target="_blank" rel="noopener noreferrer">
            <svg className="w-[21px] h-[21px] text-[#4cdef5] hover:text-[#1b7bb3] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nikhil-mamilla-823922289" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-[21px] h-[21px] text-[#4cdef5] hover:text-[#1b7bb3] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;