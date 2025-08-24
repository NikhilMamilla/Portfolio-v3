import React, { useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Profile = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "accomplishments", label: "Accomplishments" },
  ];

  const educationData = [
    {
      title: "Computer Science Engineering",
      type: "Bachelor's Degree",
      institution: "B V Raju Institute of Technology, Narsapur",
      dates: "2023 - Present",
      status: "In Progress"
    },
    {
      title: "Intermediate-MPC",
      type: "Higher Secondary",
      institution: "Aakash Institute, Vijayawada",
      dates: "2021-2023",
      status: "Completed"
    },
    {
      title: "Matriculation",
      type: "Secondary Education",
      institution: "Tiny Tots Olympiad School, Narasaraopet",
      dates: "2016-2021",
      status: "Completed"
    }
  ];

  const certificationsData = [
    {
      title: "TechA Web Development Using HTML and CSS",
      type: "Certification",
      institution: "Infosys Springboard",
      dates: "October 2024"
    },
    {
      title: "Database Programming with SQL",
      type: "Certification",
      institution: "Oracle Academy",
      dates: "October 2024"
    },
    {
      title: "ICCPCT-2025 Research Paper Presentation",
      type: "Conference Presentation",
      institution: "IEEE Kerala Section - Baselios Mathews II College of Engineering",
      dates: "8th August 2025"
    }
  ];

  const accomplishmentsData = [
    {
      title: "Best Paper Award for Research Paper",
      type: "Award",
      institution: "INPHES 2024",
      dates: "2024"
    },
    {
      title: "Volunteering for VYOMA-24 hr Hackathon & Dristhi Ideathon",
      type: "Volunteering",
      institution: "Events at BVRIT Narsapur",
      dates: "2025"
    },
    {
      title: "Open Source Contributor",
      type: "Contribution",
      institution: "React and Node.js projects",
      dates: "2023-Present"
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "education": return educationData;
      case "certifications": return certificationsData;
      case "accomplishments": return accomplishmentsData;
      default: return [];
    }
  };

  // Mobile: Card layout (like in image)
  const renderCardItem = (item, index) => {
    const statusColor = item.status === "In Progress" ? "bg-yellow-500" : "bg-green-500";
    const hasStatus = item.status; // Only education has status

    return (
      <motion.div
        key={index}
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        className="relative flex flex-col p-4 sm:p-6 rounded-lg shadow-lg bg-[#1a1a1a] mb-6 w-full max-w-sm mx-auto"
      >
        {/* Status pill - only for education */}
        {hasStatus && (
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${statusColor}`}>
            {item.status}
          </div>
        )}

        {/* Content with proper spacing */}
        <div className={hasStatus ? "mt-8" : "mt-2"}>
          <h3 className={`text-white text-lg sm:text-xl font-bold mb-2 ${hasStatus ? "pr-16" : ""}`}>
            {item.title}
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base mb-3">
            {item.type}
          </p>
          <div className="flex items-center text-neutral-300 text-sm mb-2">
            <FaMapMarkerAlt className="mr-2 text-[#4cdef5] flex-shrink-0" />
            <span className="text-xs sm:text-sm">{item.institution}</span>
          </div>
          <div className="flex items-center text-[#4cdef5] text-sm font-medium">
            <FaCalendarAlt className="mr-2 text-[#4cdef5] flex-shrink-0" />
            <span className="text-xs sm:text-sm">{item.dates}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  // Desktop: Timeline layout (original design)
  const renderTimelineItem = (item, index, isLast) => {
    const isLeft = index % 2 === 0;
    
    return (
      <motion.div 
        key={index} 
        variants={fadeIn(isLeft ? "left" : "right", "spring", index * 0.1, 0.5)}
        className="relative flex items-center justify-center mb-16"
      >
        {/* Timeline dot */}
        <div className="absolute z-10 w-4 h-4 bg-[#4cdef5] rounded-full shadow-lg shadow-[#4cdef5]/50"></div>
        
        {/* Content - Desktop: alternating left/right positioning */}
        <div className={`w-full max-w-md 
          /* Desktop: alternating left/right */
          ${isLeft ? 'pr-1/2 text-right' : 'pl-1/2 text-left'} 
          ${isLeft ? 'mr-auto' : 'ml-auto'}
          /* Mobile: always centered */
          lg:${isLeft ? 'pr-8' : 'pl-8'}
        `}>
          <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-neutral-300 mb-1 text-sm lg:text-base">
            {item.institution}
          </p>
          <p className="text-[#4cdef5] font-medium text-sm lg:text-base">
            {item.dates}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Profile.</h2>
        <p className="mt-3 text-neutral-300 text-[17px] max-w-3xl leading-[30px] text-center mx-auto px-4">
          My Academic & Professional journey showcasing my educational background, certifications, and key accomplishments.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-12 mb-16 px-4">
        <div className="flex gap-2 sm:gap-4 w-full max-w-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 rounded-md ${
                activeTab === tab.id
                  ? "bg-[#4cdef5] text-black shadow-lg shadow-[#4cdef5]/30"
                  : "bg-[#0e0e0e] text-neutral-300 border border-[#4cdef5]/20 hover:bg-[#1a1a1a] hover:border-[#4cdef5]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: Card Layout */}
      <div className="lg:hidden px-2 sm:px-4 overflow-hidden">
        <div className="w-full max-w-sm mx-auto">
          {getCurrentData().map((item, index) => renderCardItem(item, index))}
        </div>
      </div>

      {/* Desktop: Timeline Layout */}
      <div className="hidden lg:block relative px-4">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4cdef5] transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="relative">
          {getCurrentData().map((item, index) => 
            renderTimelineItem(item, index, index === getCurrentData().length - 1)
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "profile");
