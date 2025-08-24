import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies, languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const TechCard = ({ item }) => (
  <div className='tech-icon bg-[#0e0e0e] p-4 rounded-xl border border-[#4cdef5]/20 hover:border-[#4cdef5]/40 transition-all duration-300 group'>
    <div className='w-28 h-28 flex justify-center items-center'>
      <img
        src={item.icon}
        alt={item.name}
        className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <p className="text-center text-white text-sm mt-2 group-hover:text-[#4cdef5] transition-colors duration-300">{item.name}</p>
  </div>
);

const Tech = () => {
  return (
    <>
      {/* Languages Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Languages.</h2>
      </motion.div>

      {/* Mobile grid: 2 per row */}
      <div className='grid grid-cols-2 gap-6 mt-8 sm:hidden'>
        {languages.map((language) => (
          <TechCard key={language.name} item={language} />
        ))}
      </div>
      {/* Desktop flex: original layout */}
      <div className='hidden sm:flex flex-row flex-wrap justify-center gap-10 mt-8'>
        {languages.map((language) => (
          <TechCard key={language.name} item={language} />
        ))}
      </div>

      {/* Technologies Section */}
      <motion.div variants={textVariant()} className="mt-20">
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>

      {/* Mobile grid: 2 per row */}
      <div className='grid grid-cols-2 gap-6 mt-8 sm:hidden'>
        {technologies.map((technology) => (
          <TechCard key={technology.name} item={technology} />
        ))}
      </div>
      {/* Desktop flex: original layout */}
      <div className='hidden sm:flex flex-row flex-wrap justify-center gap-10 mt-8'>
        {technologies.map((technology) => (
          <TechCard key={technology.name} item={technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech"); 