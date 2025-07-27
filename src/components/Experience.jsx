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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#0e0e0e',
        color: '#fff',
        border: '1px solid rgba(76, 222, 245, 0.2)',
        boxShadow: '0 0 20px 0 rgba(76, 222, 245, 0.1)',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(76, 222, 245, 0.2)' }}
      date={experience.date}
      iconStyle={{ background: '#4cdef5', boxShadow: '0 0 15px 0 rgba(76, 222, 245, 0.5)' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <span className="text-black text-xs font-bold">
            {experience.company_name.includes('Viswam') ? 'ViswamAI' : 'Pantech'}
          </span>
        </div>
      }
    >
      <div className="text-left">
        <h3 className='text-white text-[24px] font-bold mb-2'>{experience.title}</h3>
        <p className='text-neutral-300 text-[16px] font-semibold mb-4'>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-neutral-300 text-[14px] pl-2 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
