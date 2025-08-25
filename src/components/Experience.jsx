import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isLight }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? '#fff5f2' : '#0e0e0e',
        color: isLight ? '#4a4a4a' : '#fff',
        border: isLight ? '1px solid rgba(15, 163, 177, 0.2)' : '1px solid rgba(76, 222, 245, 0.2)',
        boxShadow: isLight ? '0 0 20px 0 rgba(198, 93, 123, 0.1)' : '0 0 20px 0 rgba(76, 222, 245, 0.1)',
      }}
      contentArrowStyle={{ borderRight: isLight ? '7px solid rgba(15, 163, 177, 0.2)' : '7px solid rgba(76, 222, 245, 0.2)' }}
      date={experience.date}
      iconStyle={{ background: isLight ? '#0FA3B1' : '#4cdef5', boxShadow: isLight ? '0 0 15px 0 rgba(15, 163, 177, 0.3)' : '0 0 15px 0 rgba(76, 222, 245, 0.5)' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className={`text-xs font-bold ${isLight ? 'text-white' : 'text-black'}`}>
            {experience.company_name.includes('Viswam') ? 'ViswamAI' : 'Pantech'}
          </span>
        </div>
      }
    >
      <div className="text-left">
        <h3 className={`text-[24px] font-bold mb-2 ${isLight ? 'text-[#4a4a4a]' : 'text-white'}`}>{experience.title}</h3>
        <p className={`text-[16px] font-semibold mb-4 ${isLight ? 'text-[#6b9080]' : 'text-neutral-300'}`}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`${isLight ? 'text-[#4a4a4a]' : 'text-neutral-300'} text-[14px] pl-2 tracking-wider leading-relaxed`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center ${isLight ? '!text-[#9CAF88]' : ''}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center ${isLight ? '!text-[#4a4a4a]' : ''}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} isLight={isLight} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
