import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, memo, useState } from "react";

import { styles } from "../styles";
import { projects } from "../constants";
import { github, CodingLeague } from "../assets";
import { SectionWrapper } from "../hoc";

const ProjectCard = memo(({ name, description, tags, image, source_code_link, live_demo_link, isLight }) => {
  return (
    <div className="project-card flex flex-col">
      <div className={`p-5 rounded-2xl sm:w-[360px] w-full min-h-[550px] border transition-all duration-300 flex flex-col justify-between ${isLight ? 'bg-[#F0F6FC] border-[#2E5E99]/40 hover:border-[#2E5E99]/40' : 'bg-[#0e0e0e] border-[#4cdef5]/20 hover:border-[#4cdef5]/40'}`}>
        <div className="flex flex-col flex-grow">
          <div className='relative w-full h-[210px] cursor-pointer group flex-shrink-0'>
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

          <div className='mt-4 flex-grow flex flex-col justify-start'>
            <h3 className={`font-bold text-[22px] leading-snug min-h-[56px] flex items-center transition-colors duration-300 ${isLight ? 'text-[#0D2440] hover:text-[#2E5E99]' : 'text-white hover:text-[#4cdef5]'}`}>{name}</h3>
            <p className={`mt-2 text-[14px] leading-relaxed line-clamp-4 ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>{description}</p>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <div className='min-h-[52px] flex flex-wrap gap-2 content-start'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Live Demo and GitHub Buttons */}
          <div className='mt-4 h-[44px] flex justify-center items-center gap-4'>
            {live_demo_link ? (
              <>
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
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isLight ? 'bg-[#F0F6FC]/90 border border-[#2E5E99]/30' : 'bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50'}`}
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-5 h-5 object-contain"
                    style={{ filter: isLight ? 'invert(1)' : 'none' }}
                  />
                </motion.button>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(source_code_link, "_blank")}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${isLight ? 'bg-[#F0F6FC]/90 border border-[#2E5E99]/30' : 'bg-[#4cdef5]/20 border border-[#4cdef5]/30 hover:bg-[#4cdef5]/30 hover:border-[#4cdef5]/50'}`}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-5 h-5 object-contain"
                  style={{ filter: isLight ? 'invert(1)' : 'none' }}
                />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const FeaturedCodingLeagueCard = memo(({ isLight }) => {
  const liveUrl = "https://coding-league-jzgm.vercel.app/";
  const githubUrl = "https://github.com/KarthikSbrshB/cbb-website";

  const stats = [
    { label: "Students Participating", val: "700+" },
    { label: "Colleges", val: "30+" },
    { label: "Contests Planned", val: "40+" },
    { label: "Annual Prize Pool", val: "₹72K+" },
  ];

  const steps = [
    { num: "01", title: "Register Once", desc: "Permanent CWCL ID & rating profile." },
    { num: "02", title: "Compete Saturdays", desc: "Weekly contests online & at BVRIT." },
    { num: "03", title: "Earn League Points", desc: "Performance & participation points." },
    { num: "04", title: "Climb & Win", desc: "Monthly rankings & cash prizes." },
  ];

  const highlights = [
    "Weekly Contests",
    "League Points System",
    "Elo Rating (800+)",
    "College Leaderboard",
    "Monthly Championships",
    "Badges & Streaks",
    "Hall of Fame",
    "Auto Certificates",
  ];

  const tags = [
    { name: "react", color: "blue-text-gradient" },
    { name: "typescript", color: "green-text-gradient" },
    { name: "firebase", color: "pink-text-gradient" },
    { name: "tailwind", color: "orange-text-gradient" },
    { name: "competitiveprogramming", color: "blue-text-gradient" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative ${
          isLight
            ? "bg-[#F0F6FC] border-[#2E5E99]/40"
            : "bg-[#0e0e0e] border-[#4cdef5]/20 hover:border-[#4cdef5]/40"
        }`}
      >
        {/* Header Badge & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${
                  isLight
                    ? "bg-[#2E5E99]/10 border-[#2E5E99]/30 text-[#2E5E99]"
                    : "bg-[#4cdef5]/10 border-[#4cdef5]/30 text-[#4cdef5]"
                }`}
              >
                Featured Project
              </span>
              <span className={`text-xs font-semibold ${isLight ? "text-gray-600" : "text-neutral-400"}`}>
                Season 2026–27 · Registrations Open
              </span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-black ${isLight ? "text-[#0D2440]" : "text-white"}`}>
              CBB Weekly Coding League
            </h3>
            <p className={`text-xs sm:text-sm font-semibold italic mt-0.5 ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
              Code Every Saturday. Rise Every Month. · Coding Brigade BVRIT × CSI BVRIT
            </p>
          </div>

          {/* Monthly Rewards Summary */}
          <div className="flex items-center gap-2 sm:gap-3 bg-white/5 p-2.5 rounded-2xl border border-white/10 flex-shrink-0">
            <span className={`text-xs font-bold ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}>Monthly Prizes:</span>
            <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isLight ? "bg-[#2E5E99]/15 text-[#2E5E99]" : "bg-[#4cdef5]/15 text-[#4cdef5]"}`}>1st ₹3,000</span>
            <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isLight ? "bg-[#2E5E99]/15 text-[#2E5E99]" : "bg-[#4cdef5]/15 text-[#4cdef5]"}`}>2nd ₹2,000</span>
            <span className={`text-xs font-black px-2 py-0.5 rounded-md ${isLight ? "bg-[#2E5E99]/15 text-[#2E5E99]" : "bg-[#4cdef5]/15 text-[#4cdef5]"}`}>3rd ₹1,000</span>
          </div>
        </div>

        {/* 4 Stat Counters Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-3 rounded-2xl border text-center ${
                isLight
                  ? "bg-white border-[#2E5E99]/20"
                  : "bg-[#141414] border-white/10"
              }`}
            >
              <div className={`text-xl sm:text-2xl font-black ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
                {stat.val}
              </div>
              <div className={`text-xs font-medium ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid: Image + Overview & Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6">
          {/* Left: Image Preview */}
          <div className="md:col-span-6">
            <div
              className={`relative rounded-2xl overflow-hidden border group cursor-pointer h-[220px] sm:h-[250px] ${
                isLight ? "border-[#2E5E99]/30" : "border-white/10 hover:border-[#4cdef5]/50"
              }`}
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <img
                src={CodingLeague}
                alt="CBB Weekly Coding League"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Platform
              </div>
            </div>
          </div>

          {/* Right: Portfolio Description, Capabilities Pills, and Action Buttons */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              <p className={`text-sm leading-relaxed ${isLight ? "text-[#0D2440]" : "text-neutral-300"}`}>
                Designed and developed a full-scale competitive programming league platform that transforms weekly coding contests into a year-long competitive ecosystem. The platform manages recurring contests, League Points, Elo-based ratings, individual and college leaderboards, badges, streaks, certificates, monthly championships, Hall of Fame records, and cash prizes.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${
                      isLight
                        ? "bg-white border-[#2E5E99]/20 text-[#0D2440]"
                        : "bg-[#141414] border-white/10 text-neutral-300"
                    }`}
                  >
                    • {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((t) => (
                  <span key={t.name} className={`text-[13px] ${t.color}`}>
                    #{t.name}
                  </span>
                ))}
              </div>

              {/* Buttons Layout - Live Demo Button */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(liveUrl, "_blank")}
                  className={`${
                    isLight
                      ? "py-2 px-5 rounded-full text-white bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0]"
                      : "animated-border outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"
                  } transition-all duration-300`}
                >
                  <div className="text-white font-bold text-sm">
                    Live Demo
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works 4-Step Horizontal Bar */}
        <div className="pt-5 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className={`p-3 rounded-xl border ${
                  isLight ? "bg-white border-[#2E5E99]/20" : "bg-[#141414] border-white/5"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`text-xs font-mono font-black ${isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}`}>
                    {s.num}
                  </span>
                  <h5 className={`text-xs font-bold ${isLight ? "text-[#0D2440]" : "text-white"}`}>
                    {s.title}
                  </h5>
                </div>
                <p className={`text-[11px] leading-tight ${isLight ? "text-gray-600" : "text-neutral-400"}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const Works = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  const cursorRef = useRef(null);
  const isCursorInView = useInView(cursorRef, { once: false, margin: "0px" });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

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

      {/* 3-Page Carousel Cards Area */}
      <div className="mt-20 min-h-[580px] relative">
        <AnimatePresence mode="wait">
          {currentPage === 1 && (
            <motion.div
              key="page-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <FeaturedCodingLeagueCard isLight={isLight} />
            </motion.div>
          )}

          {currentPage === 2 && (
            <motion.div
              key="page-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-wrap justify-center gap-7"
            >
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={`project-2-${index}`} {...project} isLight={isLight} />
              ))}
            </motion.div>
          )}

          {currentPage === 3 && (
            <motion.div
              key="page-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-wrap justify-center gap-7"
            >
              {projects.slice(3, 6).map((project, index) => (
                <ProjectCard key={`project-3-${index}`} {...project} isLight={isLight} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="mt-10 flex items-center justify-center gap-6 select-none">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
            currentPage === 1
              ? 'opacity-40 cursor-not-allowed text-gray-500 border border-transparent'
              : isLight
              ? 'bg-[#F0F6FC] text-[#0D2440] border border-[#2E5E99]/40 hover:bg-[#2E5E99] hover:text-white shadow-sm'
              : 'bg-[#0e0e0e] text-white border border-[#4cdef5]/30 hover:bg-[#4cdef5]/20 hover:border-[#4cdef5]/60'
          }`}
        >
          ← Previous
        </button>

        <span className={`font-mono font-bold text-base px-2 ${isLight ? 'text-[#0D2440]' : 'text-neutral-300'}`}>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
            currentPage === totalPages
              ? 'opacity-40 cursor-not-allowed text-gray-500 border border-transparent'
              : isLight
              ? 'bg-[#F0F6FC] text-[#0D2440] border border-[#2E5E99]/40 hover:bg-[#2E5E99] hover:text-white shadow-sm'
              : 'bg-[#0e0e0e] text-white border border-[#4cdef5]/30 hover:bg-[#4cdef5]/20 hover:border-[#4cdef5]/60'
          }`}
        >
          Next →
        </button>
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
              <div ref={cursorRef} className="flex items-center gap-3 mt-4">
                <span className={`${isLight ? 'text-[#2E5E99]' : 'text-[#4cdef5]'} font-bold animate-pulse`}>❯</span>
                <motion.div
                  animate={isCursorInView ? { opacity: [1, 0, 1] } : { opacity: 1 }}
                  transition={{ repeat: isCursorInView ? Infinity : 0, duration: 1 }}
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

