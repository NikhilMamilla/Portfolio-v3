import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link, isLight }) => {
  return (
    <div className="project-card">
      <div className={`p-5 rounded-2xl sm:w-[360px] w-full border transition-all duration-300 ${isLight ? 'bg-[#F0F6FC] border-[#2E5E99]/40 hover:border-[#2E5E99]/40' : 'bg-[#0e0e0e] border-[#4cdef5]/20 hover:border-[#4cdef5]/40'}`}>
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
              className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 ${isLight ? 'bg-[#F0F6FC]/90' : 'black-gradient'}`}
            >
              <img
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain invert-0'
                style={{ filter: isLight ? 'invert(1)' : 'none' }}
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className={`font-bold text-[24px] transition-colors duration-300 ${isLight ? 'text-[#0D2440] hover:text-[#2E5E99]' : 'text-white hover:text-[#4cdef5]'}`}>{name}</h3>
          <p className={`mt-2 text-[14px] ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>{description}</p>
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
            className={`${isLight ? 'py-2 px-5 rounded-full text-white bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0]' : 'animated-border outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]'} transition-all duration-300`}
          >
            <div className="text-white font-bold">
              Live Demo
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isLight ? 'bg-[#F0F6FC]/90' : 'bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50'}`}
          >
            <img
              src={github}
              alt="github"
              className="w-6 h-6 object-contain"
              style={{ filter: isLight ? 'invert(1)' : 'none' }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Works = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center ${isLight ? '!text-[#7BA4D0]' : ''}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center ${isLight ? '!text-[#0D2440]' : ''}`}>Projects.</h2>
      </div>

      <div className='w-full flex justify-center'>
        <p
          className={`mt-3 text-[17px] max-w-3xl leading-[30px] text-center ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} isLight={isLight} />
        ))}
      </div>

      {/* Structured GitHub Section */}
      <div className="mt-24 w-full max-w-5xl mx-auto px-2 sm:px-4">
        {/* Header Row */}
        <div className="flex flex-row items-center justify-between px-2 mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={github}
              alt="github"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              style={{ filter: isLight ? 'invert(1)' : 'none' }}
            />
            <span className={`text-sm sm:text-lg font-bold tracking-tight ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>
              github.com/NikhilMamilla
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-grow ml-4 sm:ml-8">
            <span className={`whitespace-nowrap font-black text-sm sm:text-xl ${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}`}>
              30+ Repos
            </span>
            <div className={`h-[1px] flex-grow rounded-full transition-all duration-500 ${isLight ? 'bg-[#2E5E99]/20' : 'bg-[#4cdef5]/20 group-hover:bg-[#4cdef5]/40'}`} />
          </div>
        </div>

        {/* Large Premium Terminal Box */}
        <motion.div
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => window.open("https://github.com/NikhilMamilla", "_blank")}
          className={`cursor-pointer group relative overflow-hidden rounded-2xl border transition-all duration-500 ${isLight
            ? 'bg-white border-[#2E5E99]/30 shadow-[0_20px_40px_rgba(154,175,136,0.1)] hover:border-[#2E5E99]/30'
            : 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/5 hover:border-[#4cdef5]/30 shadow-[0_30px_60px_rgba(0,0,0,0.8)]'
            }`}
        >
          {/* Decorative Gradient Background */}
          <div className={`absolute -right-32 -top-32 w-80 h-80 rounded-full blur-[120px] transition-all duration-700 opacity-10 group-hover:opacity-30 ${isLight ? 'bg-[#2E5E99]' : 'bg-[#4cdef5]'}`} />

          {/* Terminal Header */}
          <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${isLight ? 'bg-gray-50 border-gray-200' : 'bg-[#1a1a1a] border-white/5'}`}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
            </div>
            <div className={`text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase opacity-40 ${isLight ? 'text-black' : 'text-white'}`}>
              bash — 80x24
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Content Body */}
          <div className={`p-6 sm:p-10 font-mono text-left relative z-10`}>
            <div className="flex flex-col gap-5 text-sm sm:text-base">
              {/* Prompt & Command */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className={`${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'} font-bold`}>❯</span>
                  <span className={`font-bold ${isLight ? 'text-[#0D2440]' : 'text-white'}`}>nikhil ~</span>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span className="text-neutral-500">$</span>
                  <p className={`font-bold ${isLight ? 'text-[#2E5E99]' : 'text-white'}`}>
                    fetch-profile <span className="opacity-60">--all</span>
                  </p>
                </div>
              </div>

              {/* Terminal Data Grid (Neofetch + Tree + Stack) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-4 sm:ml-8 mt-2">
                {/* Neofetch Section */}
                <div className="flex flex-col gap-2">
                  <div className={`font-black ${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}`}>
                    nikhil@portfolio
                  </div>
                  <div className={`opacity-20 ${isLight ? 'text-black' : 'text-white'}`}>----------------</div>
                  <div className={`space-y-1 text-xs sm:text-sm ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>
                    <p><span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5] font-bold'}>OS:</span> React / Vite</p>
                    <p><span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5] font-bold'}>Role:</span> Full Stack Developer</p>
                    <p><span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5] font-bold'}>Commit:</span> 500+</p>
                    <p><span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5] font-bold'}>Shell:</span> Always-Learning-ZSH</p>
                    <p><span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5] font-bold'}>Home:</span> github.com/NikhilMamilla</p>
                  </div>
                </div>

                {/* Tree Output Section */}
                <div className={`flex flex-col gap-2 ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'} leading-relaxed text-xs sm:text-sm`}>
                  <p className="font-bold opacity-50">repositories/</p>
                  <div className="ml-4 space-y-1">
                    <p>├── <span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}>Full-Stack-Apps</span></p>
                    <p>├── <span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}>AI-ML-Research</span></p>
                    <p>├── <span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}>System-Architecture</span></p>
                    <p>└── <span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}>Open-Source</span></p>
                  </div>
                </div>

                {/* Primary Stack Section */}
                <div className="flex flex-col gap-2">
                  <p className={`font-bold opacity-50 ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>primary_stack/</p>
                  <div className="ml-4 space-y-3">
                    {[
                      { name: 'JavaScript', val: 75, color: '#2E5E99' },
                      { name: 'Python', val: 15, color: '#7BA4D0' },
                      { name: 'Java', val: 10, color: '#4cdef5' }
                    ].map((lang) => (
                      <div key={lang.name} className="flex flex-col gap-1">
                        <div className="flex justify-between text-[10px] font-bold mb-1">
                          <span className={isLight ? 'text-[#0D2440]' : 'text-white'}>{lang.name}</span>
                          <span className={isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'}>{lang.val}%</span>
                        </div>
                        <div className={`h-1.5 w-full rounded-full ${isLight ? 'bg-gray-200' : 'bg-white/10'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.val}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: isLight ? '#2E5E99' : lang.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Final Line & Cursor */}
              <div className="flex items-center gap-3 mt-4">
                <span className={`${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'} font-bold animate-pulse`}>❯</span>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className={`w-2.5 h-5 ${isLight ? 'bg-[#2E5E99]' : 'bg-[#4cdef5]'}`}
                />
                <p className={`text-xs sm:text-sm font-bold opacity-30 italic ${isLight ? 'text-[#0D2440]' : 'text-white'}`}>
                  Click anywhere to explore more projects...
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works"); 

