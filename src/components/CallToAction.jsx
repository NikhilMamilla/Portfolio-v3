import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const CallToAction = ({ theme = "dark" }) => {
    const isLight = theme === "light";

    // Use public asset for stable filename download
    const resumePublicPath = "/Nikhil_Mamilla.pdf";

    return (
        <div
            className="w-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl border transition-all duration-300"
            style={{
                background: isLight ? '#F0F6FC' : '#0e0e0e',
                borderColor: isLight ? 'rgba(46, 94, 153, 0.4)' : 'rgba(76, 222, 245, 0.2)',
                boxShadow: isLight ? '0 0 20px 0 rgba(46, 94, 153, 0.15)' : '0 0 20px 0 rgba(76, 222, 245, 0.1)',
            }}
        >
            <div className="py-8 px-4 sm:py-14 sm:px-10 md:px-20 lg:px-24 w-full">
                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col items-center text-center w-full">
                    {/* Status Badge */}
                    <div
                        className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-6 sm:mb-10 border shadow-sm ${isLight
                            ? "bg-[#2E5E99]/10 border-[#2E5E99]/40 text-[#2E5E99]"
                            : "bg-[#4cdef5]/10 border-[#4cdef5]/20 text-[#4cdef5]"
                            }`}
                    >
                        <div className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0">
                            <div className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`}></div>
                            <div className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`}></div>
                        </div>
                        <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.25em]">Actively seeking SDE / Full Stack roles</span>
                    </div>

                    <h2
                        className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight ${isLight ? "text-[#0D2440]" : "text-white"}`}
                    >
                        Let's Build Something <span className={isLight ? "text-[#2E5E99]" : "text-[#4cdef5]"}>Extraordinary</span>
                    </h2>

                    <div
                        className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-3 gap-x-6 md:gap-x-12 mb-10 sm:mb-14 text-xs sm:text-base md:text-lg font-medium"
                    >
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`} />
                            <span className={isLight ? "text-[#0D2440]" : "text-neutral-400"}>Internship Completed</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`} />
                            <span className={isLight ? "text-[#0D2440]" : "text-neutral-400"}>10+ Projects Built</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${isLight ? "bg-[#2E5E99]" : "bg-[#4cdef5]"}`} />
                            <span className={isLight ? "text-[#0D2440]" : "text-neutral-400"}>Available Immediately</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-8 w-full max-w-[400px] sm:max-w-none">
                        {/* Contact Me Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`font-bold transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base rounded-full px-8 sm:w-auto min-w-[200px] ${isLight
                                ? "py-3 px-8 text-white bg-[#2E5E99] border border-[#2E5E99]/50 shadow-[0_4px_15px_rgba(46,94,153,0.3)]"
                                : "animated-border outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"
                                }`}
                            onClick={() => {
                                const contactSection = document.getElementById("contact");
                                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <div className={!isLight ? "relative z-10" : ""}>
                                Contact Me
                            </div>
                        </motion.button>

                        {/* Download Resume Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`font-bold transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base rounded-full px-8 sm:w-auto min-w-[200px] ${isLight
                                ? "py-3 px-8 text-[#2E5E99] bg-transparent border border-[#2E5E99]"
                                : "animated-border outline-none text-white shadow-[0_0_20px_0_rgba(76,222,245,0.3)] hover:shadow-[0_0_30px_0_rgba(76,222,245,0.5)]"
                                }`}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = resumePublicPath;
                                link.setAttribute('download', 'Nikhil_Mamilla.pdf');
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <div className={`flex items-center gap-2 ${!isLight ? "relative z-10" : ""}`}>
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(CallToAction, "cta");

