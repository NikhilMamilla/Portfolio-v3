import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { photo } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  // Check if icon is a React component (function) or an image path (string)
  const isReactIcon = typeof icon === 'function';

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full bg-gradient-to-r from-[#4cdef5]/20 via-[#1b7bb3]/20 to-[#1e3a8a]/20 p-[1px] rounded-[20px] shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)] transition-all duration-300">
        <div className="bg-[#0e0e0e] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-[#1a1a1a] transition-colors duration-300">
          {isReactIcon ? (
            <div className="w-16 h-16 text-[#4cdef5] hover:scale-110 transition-transform duration-300">
              {React.createElement(icon, { className: "w-full h-full" })}
            </div>
          ) : (
            <img src={icon} alt="web-development" className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300" />
          )}
          <h3 className="text-white text-[20px] font-bold text-center hover:text-[#4cdef5] transition-colors duration-300">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left side - Heading and Text */}
        <div className="flex-1">
          <motion.div
            variants={textVariant(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-left"
          >
            <p className={`${styles.sectionSubText}`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-neutral-300 text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a Computer Science and Engineering student at BVRIT with a passion for AI/ML and full-stack development. 
            I specialize in React, Python, and modern web technologies, with experience in building AI-powered applications 
            and scalable web solutions. As a Tech-Lead Intern at Viswam.ai, I've led AI pipeline development and worked 
            on inclusive AI solutions for regional languages. I'm a quick learner and love collaborating on innovative 
            projects that solve real-world problems.
          </motion.p>
        </div>

        {/* Right side - Photo */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#4cdef5]/20 shadow-[0_0_30px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_50px_0_rgba(76,222,245,0.5)] transition-all duration-300">
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); 