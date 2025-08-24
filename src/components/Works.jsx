import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.05, 0.2)} className="project-card">
      <div className='bg-[#0e0e0e] p-5 rounded-2xl sm:w-[360px] w-full border border-[#4cdef5]/20 hover:border-[#4cdef5]/40 transition-all duration-300'>
        <div className='relative w-full h-[230px] cursor-pointer group'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300'
          />

          {/* GitHub Icon on Image */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300'
            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] hover:text-[#4cdef5] transition-colors duration-300'>{name}</h3>
          <p className='mt-2 text-neutral-300 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Demo and GitHub Buttons */}
        <div className='mt-4 flex justify-center items-center gap-4'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(live_demo_link, "_blank")}
            className="animated-border outline-none shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)] transition-all duration-300"
          >
            <div className="text-white font-bold">
              Live Demo
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-12 h-12 rounded-full bg-[#4cdef5]/20 border border-[#4cdef5]/30 flex items-center justify-center hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50 transition-all duration-300"
          >
            <img
              src={github}
              alt="github"
              className="w-6 h-6 object-contain"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-neutral-300 text-[17px] max-w-3xl leading-[30px] text-center'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works"); 