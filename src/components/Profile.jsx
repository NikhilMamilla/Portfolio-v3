import React, { useState } from 'react';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Profile = ({ theme = "dark" }) => {
  const isLight = theme === "light";
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
      title: "Organizer",
      type: "Community Leadership",
      institution: "Google Developer Groups On Campus",
      dates: "2025-Present"
    },
    {
      title: "President",
      type: "Leadership",
      institution: "Coding Brigade BVRIT",
      dates: "2025-Present"
    },
    {
      title: "Best Paper Award for Research Paper",
      type: "Award",
      institution: "INPHES 2024",
      dates: "2024"
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
      <div
        key={index}
        className={`relative flex flex-col p-4 sm:p-6 rounded-lg shadow-lg mb-6 w-full max-w-sm mx-auto ${isLight ? "bg-[#F0F6FC] border border-[#e2e8f0]" : "bg-[#1a1a1a]"}`}
      >
        {/* Status pill - only for education */}
        {hasStatus && (
          <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${statusColor}`}>
            {item.status}
          </div>
        )}

        {/* Content with proper spacing */}
        <div className={hasStatus ? "mt-8" : "mt-2"}>
          <h3 className={`${isLight ? "text-[#0D2440]" : "text-white"} text-lg sm:text-xl font-bold mb-2 ${hasStatus ? "pr-16" : ""}`}>
            {item.title}
          </h3>
          <p className={`${isLight ? "text-[#0D2440]" : "text-neutral-400"} text-sm sm:text-base mb-3`}>
            {item.type}
          </p>
          <div className={`flex items-center text-sm mb-2 ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}>
            <FaMapMarkerAlt className={`mr-2 flex-shrink-0 ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`} />
            <span className="text-xs sm:text-sm">{item.institution}</span>
          </div>
          <div className={`flex items-center text-sm font-medium ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
            <FaCalendarAlt className={`mr-2 flex-shrink-0 ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`} />
            <span className="text-xs sm:text-sm">{item.dates}</span>
          </div>
        </div>
      </div>
    );
  };

  // Desktop: Timeline layout (fixed alternating logic)
  const renderTimelineItem = (item, index, isLast) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        key={index}
        className={`relative flex items-center justify-center w-full mb-16`}
      >
        {/* Timeline dot */}
        <div className={`absolute z-10 w-4 h-4 rounded-full shadow-lg left-1/2 transform -translate-x-1/2 ${isLight ? "bg-[#2E5E99] shadow-[#2E5E99]/50" : "bg-[#4cdef5] shadow-[#4cdef5]/50"}`}></div>

        {/* Content Box */}
        <div className={`w-full flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-1/2 ${isLeft ? 'pr-14 text-right' : 'pl-14 text-left'}`}>
            <h3 className={`text-lg lg:text-xl font-bold mb-2 ${isLight ? "text-[#0D2440]" : "text-white"}`}>
              {item.title}
            </h3>
            <p className={`${isLight ? "text-[#0D2440]" : "text-neutral-300"} mb-1 text-sm lg:text-base font-medium`}>
              {item.institution}
            </p>
            <p className={`font-bold text-sm lg:text-base ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
              {item.dates}
            </p>
          </div>
          <div className="w-1/2" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="text-center">
        <p className={`${styles.sectionSubText} ${isLight ? "!text-[#7BA4D0]" : ""}`}>My Journey</p>
        <h2 className={`${styles.sectionHeadText} ${isLight ? "!text-[#0D2440]" : ""}`}>Profile.</h2>
        <p className={`mt-3 text-[17px] max-w-3xl leading-[30px] mx-auto px-4 ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}>
          My Academic & Professional journey showcasing my educational background, certifications, and key accomplishments.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-12 mb-16 px-4">
        <div className="flex gap-2 sm:gap-4 w-full max-w-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 rounded-md ${activeTab === tab.id
                ? isLight
                  ? "bg-[#2E5E99] text-white shadow-lg shadow-[rgba(15,163,177,0.3)]"
                  : "bg-[#4cdef5] text-black shadow-lg shadow-[#4cdef5]/30"
                : isLight
                  ? "bg-[#F0F6FC] text-[#0D2440] border border-[#2E5E99]/40 hover:bg-[#e2e8f0] hover:border-[#2E5E99]/40"
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
      <div className="hidden lg:block relative px-4 w-full">
        {/* Vertical timeline line */}
        <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`}></div>

        {/* Timeline items */}
        <div className="relative w-full">
          {getCurrentData().map((item, index) =>
            renderTimelineItem(item, index, index === getCurrentData().length - 1)
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "profile");

