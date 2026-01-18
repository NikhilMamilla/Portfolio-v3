import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { cbb_leadership, gdg_leadership, src_leadership, gdg_logo_dark } from "../assets";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience, isLight }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? '#F0F6FC' : '#0e0e0e',
        color: isLight ? '#0D2440' : '#fff',
        border: isLight ? '1px solid rgba(46, 94, 153, 0.4)' : '1px solid rgba(76, 222, 245, 0.2)',
        boxShadow: isLight ? '0 0 20px 0 rgba(46, 94, 153, 0.3)' : '0 0 20px 0 rgba(76, 222, 245, 0.1)',
        transition: 'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      contentArrowStyle={{
        borderRight: isLight ? '7px solid rgba(46, 94, 153, 0.4)' : '7px solid rgba(76, 222, 245, 0.2)',
        transition: 'border-color 0.4s ease',
      }}
      date={experience.date}
      iconStyle={{
        background: isLight ? '#2E5E99' : '#4cdef5',
        boxShadow: isLight ? '0 0 15px 0 rgba(46, 94, 153, 0.4)' : '0 0 15px 0 rgba(76, 222, 245, 0.5)',
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className={`text-[10px] sm:text-xs font-bold ${isLight ? 'text-white' : 'text-black'}`}>
            {experience.company_name.includes('Viswam') ? 'ViswamAI' : 'Pantech'}
          </span>
        </div>
      }
    >
      <div className="text-left">
        <h3 className={`text-[24px] font-bold mb-2 ${isLight ? 'text-[#0D2440]' : 'text-white'}`}>{experience.title}</h3>
        <p className={`text-[16px] font-semibold mb-4 ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${isLight ? 'text-[#0D2440]' : 'text-neutral-300'} text-[14px] pl-2 tracking-wider leading-relaxed`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const RoleCard = ({ title, org, linkedin, instagram, isLight, logo }) => {
  const isLargeLogo = org.includes("SRC") || org.includes("Student Research Cell") || org.includes("Google Developer Groups");
  const isGDGDark = !isLight && org.includes("Google Developer Groups");

  return (
    <div
      className={`w-full h-full p-8 sm:p-10 flex flex-col items-center justify-center text-center rounded-2xl border transition-all duration-300 group relative overflow-hidden`}
      style={{
        background: isLight ? '#F0F6FC' : '#0e0e0e',
        borderColor: isLight ? 'rgba(46, 94, 153, 0.4)' : 'rgba(76, 222, 245, 0.2)',
        boxShadow: isLight ? '0 0 20px 0 rgba(46, 94, 153, 0.3)' : '0 0 20px 0 rgba(76, 222, 245, 0.1)',
      }}
    >
      {/* Logo Container */}
      {logo && (
        <div className="mb-8 flex items-center justify-center h-24 w-full">
          <img
            src={logo}
            alt="logo"
            className={`object-contain transition-all duration-500 rounded-lg ${isGDGDark ? "scale-[2.2]" : (isLargeLogo ? "scale-[1.5]" : "scale-100")
              } ${!isLight && logo.includes('cbb_leadership') ? 'brightness-125' : ''}`}
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col items-center w-full">
        <h4 className={`text-xl sm:text-2xl font-bold mb-3 leading-tight ${isLight ? "text-[#0D2440]" : "text-white"}`}>
          {title}
        </h4>
        <p className={`font-semibold text-sm sm:text-base mb-6 ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
          {org}
        </p>

        {/* Centered Social Icons */}
        <div className="flex justify-center gap-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className={`text-2xl transition-all duration-300 hover:scale-125 text-[#0077b5]`}
            >
              <FaLinkedin />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className={`text-2xl transition-all duration-300 hover:scale-125 text-[#E1306C]`}
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  const roles = [
    {
      title: "President",
      org: "Coding Brigade BVRIT",
      linkedin: "https://www.linkedin.com/company/coding-brigade-bvrit/",
      instagram: "https://www.instagram.com/coding_brigade",
      logo: cbb_leadership
    },
    {
      title: "Organizer",
      org: "Google Developer Groups On Campus",
      linkedin: "https://www.linkedin.com/in/gdg-on-campus-bvrit/",
      instagram: "https://www.instagram.com/gdgc.bvritn",
      logo: isLight ? gdg_leadership : gdg_logo_dark
    },
    {
      title: "Team Leader",
      org: "Student Research Cell",
      linkedin: "https://www.linkedin.com/in/src-bvrit/",
      instagram: "https://www.instagram.com/src.bvrit",
      logo: src_leadership
    },
  ];

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center ${isLight ? '!text-[#7BA4D0]' : ''}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center ${isLight ? '!text-[#0D2440]' : ''}`}>
          Work Experience.
        </h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline animate={false}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} isLight={isLight} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Leadership & Community Section */}
      <div className="mt-32">
        <div className="text-left mb-12">
          <h3 className={`text-3xl sm:text-4xl font-black ${isLight ? "text-[#0D2440]" : "text-white"}`}>
            Leadership & Community Roles
          </h3>
          <div className={`h-1.5 w-20 mt-4 rounded-full ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <RoleCard key={index} {...role} isLight={isLight} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

