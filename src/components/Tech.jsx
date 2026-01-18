import { styles } from "../styles";
import {
  programming,
  frontend,
  backend,
  databases,
  devops,
  tools
} from "../constants";
import { SectionWrapper } from "../hoc";

const TechCard = ({ item, isLight }) => {
  const isDarkIcon =
    item.icon.includes('nextjs') ||
    item.icon.includes('express') ||
    item.icon.includes('github') ||
    item.icon.includes('vercel') ||
    item.icon.includes('render') ||
    item.icon.includes('flask') ||
    item.icon.includes('socketio') ||
    item.icon.includes('linux');

  return (
    <div className={`tech-icon p-4 rounded-xl border transition-all duration-300 group ${isLight ? 'bg-[#F0F6FC] border-[#2E5E99]/40 hover:border-[#2E5E99]/40' : 'bg-[#0e0e0e] border-[#4cdef5]/20 hover:border-[#4cdef5]/40'}`}>
      <div className='w-28 h-28 flex justify-center items-center'>
        {typeof item.icon === 'string' && item.icon.startsWith('devicon') ? (
          <i className={`${item.icon} text-7xl group-hover:scale-110 transition-transform duration-300 ${!isLight && isDarkIcon ? 'invert brightness-200' : ''}`} />
        ) : (
          <img
            src={item.icon}
            alt={item.name}
            className={`w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300 ${!isLight && isDarkIcon ? 'invert brightness-200' : ''}`}
          />
        )}
      </div>
      <p className={`text-center text-sm mt-2 transition-colors duration-300 ${isLight ? 'text-[#0D2440] group-hover:text-[#2E5E99]' : 'text-white group-hover:text-[#4cdef5]'}`}>{item.name}</p>
    </div>
  );
};

const Tech = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  const skillCategories = [
    { title: "Programming", data: programming },
    { title: "Frontend", data: frontend },
    { title: "Backend", data: backend },
    { title: "Databases", data: databases },
    { title: "DevOps", data: devops },
    { title: "Tools", data: tools },
  ];

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center ${isLight ? '!text-[#7BA4D0]' : ''}`}>My skills</p>
      </div>

      {skillCategories.map((category, index) => (
        <div key={category.title} className={index === 0 ? "mt-10" : "mt-24"}>
          <h2 className={`${styles.sectionHeadText} text-center mb-12 ${isLight ? '!text-[#0D2440]' : ''}`}>
            {category.title}.
          </h2>

          {/* Mobile grid: 2 per row */}
          <div className='grid grid-cols-2 gap-6 mt-8 sm:hidden'>
            {category.data.map((item) => (
              <TechCard key={item.name} item={item} isLight={isLight} />
            ))}
          </div>
          {/* Desktop flex: original layout */}
          <div className='hidden sm:flex flex-row flex-wrap justify-center gap-10 mt-8'>
            {category.data.map((item) => (
              <TechCard key={item.name} item={item} isLight={isLight} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Tech, "tech");

