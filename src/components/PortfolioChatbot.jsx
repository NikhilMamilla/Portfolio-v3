import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChatBubbleLeftRightIcon,
    XMarkIcon,
    PaperAirplaneIcon,
    UserIcon,
    CommandLineIcon,
    ArrowPathIcon,
    InformationCircleIcon,
    SparklesIcon,
    ChevronDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/outline';
import { FaRobot, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import FAQS2 from '../data/chatbotFAQs.json';

// FAQ Quick-Select Buttons with Emoji Labels
const FAQS = [
    {
        q: "introduction",
        label: "👋 Introduction",
        a: "Hi! I'm Nikhil Mamilla, a Full Stack Developer specializing in AI/ML and the MERN stack. I build scalable web apps and enjoy solving real-world problems using clean, efficient code."
    },
    {
        q: "skills",
        label: "🛠️ Skills",
        a: "I work mainly with React, Node.js, Express, MongoDB, JavaScript, TypeScript, Tailwind CSS, REST APIs, Git/GitHub, and cloud platforms like AWS and Firebase."
    },
    {
        q: "projects",
        label: "📂 Projects",
        a: "I've built projects like AuraCheck (mental wellness platform), BVRIT Alumni Connect (networking platform), and Coding Brigade BVRIT website with modern tech stacks."
    },
    {
        q: "What makes you different?",
        label: "🚀 What makes you different?",
        a: "I focus on building complete, production-ready apps, not just demos. I understand both frontend and backend and constantly improve my skills through real-world projects."
    },
    {
        q: "team",
        label: "🤝 Team",
        a: "Yes! I've worked in teams, participated in hackathons, and collaborated under mentors. I'm currently leading GDG on Campus and Coding Brigade BVRIT."
    },
    {
        q: "learning",
        label: "📚 Currently Learning",
        a: "I'm improving my skills in full-stack architecture, AI integration, and scalable backend systems."
    },
    {
        q: "contact",
        label: "📩 Contact",
        a: "You can reach me through the contact section of this portfolio or connect with me on LinkedIn."
    }
];

// Smart text normalization for multi-language support
const normalize = (str) =>
    str
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, "")
        .replace(/\s+/g, " ")
        .trim();

// Enhanced answer finding with multi-level matching
const findAnswer = (text, mode) => {
    const input = normalize(text);
    const isRecruiter = mode === 'recruiter';

    // First check FAQ buttons
    for (let faq of FAQS) {
        const key = normalize(faq.q);
        if (input.includes(key)) {
            return faq.a;
        }
    }

    // Then check comprehensive FAQ data with scoring
    let bestMatch = null;
    let bestScore = 0;

    for (let item of FAQS2) {
        for (let key of item.keys) {
            const keyNorm = normalize(key);
            let score = 0;

            // Exact match gets highest score
            if (input === keyNorm) score += 100;

            // Contains match
            if (input.includes(keyNorm)) score += 60;

            // Word-by-word matching
            const inputWords = input.split(" ");
            const keyWords = keyNorm.split(" ");
            keyWords.forEach(word => {
                if (inputWords.includes(word)) score += 15;
            });

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item.a;
            }
        }
    }

    if (bestMatch) return bestMatch;

    // Fallback to original detailed responses
    return getResponse(text, mode);
};

// Manual knowledge base with predefined responses
const getResponse = (question, mode) => {
    const q = question.toLowerCase();
    const isRecruiter = mode === 'recruiter';

    // Summarize in 10 seconds
    if (q.includes('summarize') || q.includes('10 seconds')) {
        return isRecruiter
            ? `Nikhil is a CS student at BVRIT with strong AI/ML and full-stack skills. He's led teams at Viswam.ai, built production apps, and leads GDG on Campus + CBB. Fast learner, team player, product-focused.

Want to see his projects? Check the Projects section.`
            : `Nikhil Mamilla is a Computer Science student at BVRIT specializing in AI/ML and full-stack development. Tech-Lead Intern at Viswam.ai working on NLP and Transformer models. Built production apps like AuraCheck (mental wellness) and BVRIT Alumni Connect. Active leader as GDG Organizer and CBB President.

Explore his work in the Projects section.`;
    }

    // Skills
    if (q.includes('skill') || q.includes('technical') || q.includes('technologies')) {
        return isRecruiter
            ? `**Core Strengths:**
• Languages: Java, JavaScript, TypeScript, Python, C
• Frontend: React.js, Next.js, Tailwind CSS
• Backend: Node.js, Express.js, Flask
• Databases: MongoDB, MySQL, PostgreSQL
• Tools: Git, Docker, AWS, Firebase

Check the Skills section for the full tech stack.`
            : `**Programming Languages:**
Java, JavaScript, TypeScript, Python, C

**Frontend Stack:**
React.js, Next.js, HTML5, CSS3, Tailwind CSS, Redux, Three.js, Framer Motion, GSAP

**Backend:**
Node.js, Express.js, Flask, Socket.io

**Databases:**
MongoDB, MySQL, PostgreSQL, Firebase

**DevOps & Tools:**
Git, GitHub, Docker, AWS, Vercel, Netlify, Postman

See the Skills section for detailed breakdowns.`;
    }

    // Projects
    if (q.includes('project') || q.includes('built') || q.includes('work')) {
        return isRecruiter
            ? `**Top Projects:**

1. **AuraCheck** – Mental wellness platform
   Live: https://auracheck-f408f.web.app/
   Stack: React, Firebase, Tailwind CSS

2. **BVRIT Alumni Connect** – Networking platform
   Live: https://minor-project-64ad1.web.app/
   Stack: React, TypeScript, Firebase

3. **Coding Brigade Website** – Official club site
   Live: https://cbb.bvrit.ac.in/
   Stack: React, Three.js, GSAP

View all projects in the Projects section.`
            : `**Featured Projects:**

**AuraCheck – Mental Wellness Web App**
• Full-stack platform with personalized onboarding
• Features: mood/stress/sleep tracking, journaling, AI chatbot
• Stack: React, Firebase, Tailwind CSS, JavaScript
• Live Demo: https://auracheck-f408f.web.app/

**BVRIT Alumni-Student Connect**
• Role-based networking platform
• Features: dashboards, mentorship matching, AI assistance
• Stack: React, TypeScript, Firebase, Tailwind CSS
• Live Demo: https://minor-project-64ad1.web.app/

**Coding Brigade BVRIT Website**
• Official coding club website
• Stack: React, Three.js, Framer Motion, GSAP
• Live Demo: https://cbb.bvrit.ac.in/

Explore all projects in the Projects section.`;
    }

    // Leadership & Roles
    if (q.includes('leadership') || q.includes('role') || q.includes('organizer') || q.includes('president')) {
        return isRecruiter
            ? `**Leadership Positions:**

• **GDG on Campus Organizer** – Leading Google Developer Groups community at BVRIT

• **Coding Brigade BVRIT President** – Managing the coding club, organizing events and workshops
 
 • **GeeksforGeeks Campus Mantri** – Leading technical initiatives and building developer community on campus
 
 Demonstrated ability to lead teams, organize technical events, and build inclusive communities.


See the Experience section for more details.`
            : `**Current Leadership Roles:**

**Google Developer Groups (GDG) on Campus – Organizer**
• Leading the GDG community at BVRIT
• Organizing tech talks, workshops, and hackathons
• Building a collaborative developer ecosystem

**Coding Brigade BVRIT – President**
• Managing the official coding club of BVRIT
• Coordinating technical events and coding competitions
• Mentoring students in competitive programming and development
 
 **GeeksforGeeks – Campus Mantri**
 • Leading the GeeksforGeeks student community on campus
 • Organizing coding contests and technical workshops
 • Encouraging peer learning and technical growth
 
 **Key Skills Demonstrated:**

Team leadership, event management, community building, technical mentorship

Check the Experience section for full details.`;
    }

    // Why hire / Elevator pitch
    if (q.includes('hire') || q.includes('elevator') || q.includes('pitch') || q.includes('why')) {
        return isRecruiter
            ? `**Why Nikhil?**

• **Proven Track Record:** Led AI teams at Viswam.ai, built production apps used by real users

• **Full-Stack Expertise:** Strong in both frontend (React, Next.js) and backend (Node.js, Python)

• **Leadership:** Actively leading GDG and CBB, organizing events and mentoring peers

• **Fast Learner:** Quickly adapts to new technologies and frameworks

• **Product Mindset:** Focuses on building solutions that solve real problems

Ready to connect? Use the Contact section.`
            : `**30-Second Elevator Pitch:**

I'm Nikhil Mamilla, a Computer Science student at BVRIT passionate about AI/ML and full-stack development. I've led AI pipeline development at Viswam.ai, working on NLP and Transformer models for regional languages in collaboration with IIIT-H and Meta.

I build production-ready applications – from mental wellness platforms to alumni networking systems – using React, TypeScript, Node.js, and modern cloud technologies. As GDG Organizer and CBB President, I lead technical communities and mentor fellow developers.

I bring a unique combination of technical depth, leadership experience, and a product-focused mindset. I'm always eager to learn, collaborate, and build impactful solutions.

Let's connect via the Contact section.`;
    }

    // Contact
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('connect')) {
        return `**Connect with Nikhil:**

LinkedIn: https://linkedin.com/in/nikhil-mamilla
GitHub: https://github.com/NikhilMamilla
Instagram: https://instagram.com/nikhil_mamilla

Or scroll down to the Contact section at the bottom of this portfolio to send a direct message.`;
    }

    // Experience
    if (q.includes('experience') || q.includes('intern') || q.includes('viswam') || q.includes('pantech')) {
        return isRecruiter
            ? `**Professional Experience:**

**Tech-Lead Intern @ Viswam.ai** (May 2025 - July 2025)
• Led AI pipeline development using Python, NLP, Transformer architectures
• Trained foundational AI models for regional languages
• Collaborated with IIIT-H, Swecha, and Meta

**Full Stack Web Developer Intern @ Pantech Solutions** (March 2024 - June 2024)
• Built responsive web apps with React.js and Node.js
• Implemented RESTful APIs and MongoDB integration

See the Experience section for full details.`
            : `**Work Experience:**

**Tech-Lead Intern – Viswam.ai (Summer of AI)**
*May 2025 - July 2025*
• AI Systems Leadership: Led AI pipeline development using Python, NLP, and Transformer architectures
• Model Training & Evaluation: Guided peers in training and fine-tuning foundational AI models for regional languages
• Data Annotation & Automation: Contributed to dataset creation, automation scripts, and evaluation tools
• Collaboration: Worked under Viswam.ai initiative with IIIT-H, Swecha, and Meta
• Social Impact: Built inclusive AI solutions for underserved language communities

**Full Stack Web Developer Intern – Pantech Solutions**
*March 2024 - June 2024*
• Developed responsive web applications using React.js, Node.js, and modern JavaScript frameworks
• Implemented RESTful APIs and database integration using MongoDB and Express.js
• Collaborated with cross-functional teams on user-friendly interfaces
• Optimized application performance and conducted thorough testing
• Gained hands-on experience with Git and agile methodologies

View the Experience section for the complete timeline.`;
    }

    // Education
    if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('bvrit')) {
        return `**Education:**

Nikhil is currently pursuing **Computer Science and Engineering** at **BVRIT (B V Raju Institute of Technology)**, Narsapur.

His academic focus includes:
• Artificial Intelligence & Machine Learning
• Full-Stack Web Development
• Data Structures & Algorithms
• Software Engineering

Check the Education section for more details.`;
    }

    // Default response
    return isRecruiter
        ? `I can help you learn about Nikhil's skills, projects, experience, and leadership roles. Try asking:

• "What are his strongest skills?"
• "Tell me about his projects"
• "What leadership roles has he held?"
• "Why should someone hire him?"

Or explore the portfolio sections directly.`
        : `I'm here to help you explore Nikhil's portfolio! I can provide detailed information about:

• **Skills & Technologies** – Full tech stack breakdown
• **Projects** – Detailed project descriptions with tech stacks
• **Experience** – Internships and work history
• **Leadership** – GDG and CBB roles
• **Education** – Academic background

Try the suggested questions above, or ask me anything specific.`;
};

const PortfolioChatbot = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hey — I'm Nikhil's portfolio assistant. Ask me about skills, projects, or leadership.",
            timestamp: new Date().toISOString()
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState('recruiter');

    // Toast notification state
    const [showToast, setShowToast] = useState(false);
    const toastTimerRef = useRef();
    const toastHideTimerRef = useRef();

    const messagesEndRef = useRef(null);

    const hasInteracted = messages.length > 1;

    // Toast notification timer
    useEffect(() => {
        toastTimerRef.current = setTimeout(() => {
            setShowToast(true);
            toastHideTimerRef.current = setTimeout(() => setShowToast(false), 5000);
        }, 10000);
        return () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
            if (toastHideTimerRef.current) clearTimeout(toastHideTimerRef.current);
        };
    }, []);

    // Hide toast when chatbot opens
    useEffect(() => {
        if (isOpen) {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
            setShowToast(false);
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle scroll lock safely with passive: false
    useEffect(() => {
        const messagesArea = messagesEndRef.current?.parentElement;
        if (!messagesArea) return;

        const handleWheel = (e) => {
            const atTop = messagesArea.scrollTop === 0;
            const atBottom = messagesArea.scrollHeight - messagesArea.scrollTop === messagesArea.clientHeight;
            if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                if (e.cancelable) e.preventDefault();
            }
        };

        messagesArea.addEventListener('wheel', handleWheel, { passive: false });
        return () => messagesArea.removeEventListener('wheel', handleWheel);
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = async (content = input) => {
        if (!content.trim() || isLoading) return;

        const userMessage = {
            role: 'user',
            content,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate typing delay for more natural feel
        setTimeout(() => {
            const response = findAnswer(content, mode);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: response,
                timestamp: new Date().toISOString()
            }]);
            setIsLoading(false);
        }, 800);
    };

    const resetChat = () => {
        setMessages([
            {
                role: 'assistant',
                content: "Hey — I'm Nikhil's portfolio assistant. Ask me about skills, projects, or leadership.",
                timestamp: new Date().toISOString()
            }
        ]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            {/* Toast Notification */}
            {showToast && !isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed z-[100] flex flex-col items-end"
                    style={{ right: '2.5rem', bottom: '6.5rem' }}
                >
                    <div className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border ${isDark
                        ? 'bg-gray-900/90 text-cyan-200 border-cyan-400/40'
                        : 'bg-white/90 text-cyan-900 border-cyan-400/40'
                        }`} style={{ minWidth: '260px', maxWidth: '320px' }}>
                        <span>
                            <span className="font-semibold">I'm here to help!</span><br />Ask me about Nikhil's skills, projects, or experience.
                        </span>
                        <div className={`absolute right-0 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent ${isDark ? 'border-t-gray-900' : 'border-t-white'
                            }`}></div>
                    </div>
                </motion.div>
            )}

            {/* Floating Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className={`p-4 rounded-full shadow-premium border transition-all ${isDark
                        ? 'bg-black border-[#4cdef5]/30 text-[#4cdef5]'
                        : 'bg-white border-[#4cdef5]/50 text-[#4cdef5] shadow-lg'
                        } group relative overflow-hidden`}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#4cdef5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ChatBubbleLeftRightIcon className="w-8 h-8" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cdef5] opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4cdef5]" />
                    </span>
                </motion.button>
            )}

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop Overlay for Focus */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9, originY: 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            className={`backdrop-blur-2xl border rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:w-[380px] w-[calc(100vw-32px)] md:h-[600px] h-[88vh] absolute md:bottom-0 bottom-0 md:right-0 -right-2 ${isDark ? 'bg-[#0c0c0c]/98 border-white/10'
                                : 'bg-white/98 border-gray-200'
                                }`}
                        >
                            {/* Header */}
                            <div className={`px-5 py-4 border-b flex items-center justify-between ${isDark
                                ? 'bg-[#111] border-white/5'
                                : 'bg-gray-50 border-gray-200'
                                }`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${isDark
                                        ? 'bg-gradient-to-br from-[#4cdef5]/20 to-[#1b7bb3]/10 text-[#4cdef5] border-[#4cdef5]/20'
                                        : 'bg-gradient-to-br from-[#4cdef5]/10 to-[#1b7bb3]/5 text-[#4cdef5] border-[#4cdef5]/30'
                                        }`}>
                                        <SparklesIcon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className={`text-sm font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
                                            }`}>Portfolio Copilot</h3>
                                        <div className="flex items-center gap-1.5 leading-none mt-1">
                                            <span className="flex h-1.5 w-1.5 relative">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                                            </span>
                                            <span className={`text-[10px] font-medium ${isDark ? 'text-neutral-400' : 'text-gray-600'
                                                }`}>Live — Curated from my work</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="group relative">
                                        <button className={`p-1.5 transition-colors ${isDark
                                            ? 'text-neutral-500 hover:text-[#4cdef5]'
                                            : 'text-gray-500 hover:text-[#4cdef5]'
                                            }`}>
                                            <InformationCircleIcon className="w-5 h-5" />
                                        </button>
                                        <div className={`absolute right-0 top-full mt-2 w-56 p-3 text-[11px] rounded-xl border shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none leading-relaxed ${isDark
                                            ? 'bg-[#1a1a1a] text-neutral-300 border-white/10'
                                            : 'bg-white text-gray-700 border-gray-200'
                                            }`}>
                                            Trained on Nikhil's portfolio info. Answer about skills, projects, roles, achievements, and contact.
                                        </div>
                                    </div>
                                    <button
                                        onClick={resetChat}
                                        title="Reset Conversation"
                                        className={`p-1.5 transition-colors rounded-lg hover:bg-opacity-10 ${isDark
                                            ? 'text-neutral-500 hover:text-[#4cdef5] hover:bg-white'
                                            : 'text-gray-500 hover:text-[#4cdef5] hover:bg-gray-200'
                                            }`}
                                    >
                                        <ArrowPathIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className={`p-1.5 hover:bg-opacity-10 rounded-lg transition-colors ${isDark
                                            ? 'text-neutral-500 hover:bg-white'
                                            : 'text-gray-500 hover:bg-gray-200'
                                            }`}
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>


                            {/* Mode Switcher & Quick Links */}
                            <div className={`px-5 py-3 border-b flex items-center justify-between gap-4 ${isDark
                                ? 'bg-[#111] border-white/5'
                                : 'bg-gray-50 border-gray-200'
                                }`}>
                                {/* Mode Switcher */}
                                <div className={`flex p-1 rounded-xl ${isDark ? 'bg-black/40' : 'bg-gray-100'}`}>
                                    <button
                                        onClick={() => setMode('recruiter')}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${mode === 'recruiter'
                                            ? isDark ? 'bg-[#4cdef5]/20 text-[#4cdef5] shadow-sm' : 'bg-white text-[#4cdef5] shadow-sm'
                                            : 'text-neutral-500 hover:text-neutral-400'
                                            }`}
                                    >
                                        <UserIcon className="w-3.5 h-3.5" />
                                        Recruiter
                                    </button>
                                    <button
                                        onClick={() => setMode('tech')}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${mode === 'tech'
                                            ? isDark ? 'bg-[#4cdef5]/20 text-[#4cdef5] shadow-sm' : 'bg-white text-[#4cdef5] shadow-sm'
                                            : 'text-neutral-500 hover:text-neutral-400'
                                            }`}
                                    >
                                        <CommandLineIcon className="w-3.5 h-3.5" />
                                        Tech
                                    </button>
                                </div>

                                {/* Quick Links */}
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://linkedin.com/in/nikhil-mamilla"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg transition-all ${isDark ? 'text-neutral-400 hover:text-[#4cdef5] hover:bg-white/5' : 'text-gray-500 hover:text-[#4cdef5] hover:bg-black/5'
                                            }`}
                                        title="LinkedIn"
                                    >
                                        <FaLinkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="https://github.com/NikhilMamilla"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg transition-all ${isDark ? 'text-neutral-400 hover:text-[#4cdef5] hover:bg-white/5' : 'text-gray-500 hover:text-[#4cdef5] hover:bg-black/5'
                                            }`}
                                        title="GitHub"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                    <a
                                        href="/Nikhil_Mamilla.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 rounded-lg transition-all ${isDark ? 'text-neutral-400 hover:text-[#4cdef5] hover:bg-white/5' : 'text-gray-500 hover:text-[#4cdef5] hover:bg-black/5'
                                            }`}
                                        title="Curriculum Vitae"
                                    >
                                        <FaFileDownload className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links (FAQ Topics) */}
                            <div className={`px-4 py-2.5 border-b flex items-center gap-2 ${isDark ? 'bg-black/20' : 'bg-gray-50/50'} 
                            flex-nowrap overflow-x-auto no-scrollbar 
                            md:flex-wrap md:overflow-visible md:justify-center`}>
                                {FAQS.map((faq, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(faq.q)}
                                        className={`text-[10px] px-3.5 py-1.5 rounded-full border transition-all font-bold flex items-center gap-2 whitespace-nowrap ${isDark
                                            ? 'bg-[#0f171a] hover:bg-[#4cdef5]/10 text-[#4cdef5] border-[#4cdef5]/20 hover:border-[#4cdef5]/40'
                                            : 'bg-white hover:bg-[#4cdef5]/5 text-[#0369a1] border-gray-200 hover:border-[#4cdef5]/40'
                                            }`}
                                    >
                                        {faq.label}
                                    </button>
                                ))}
                            </div>

                            {/* Messages Area */}
                            <div
                                className="flex-1 overflow-y-auto px-5 py-4 space-y-6 scroll-smooth custom-scrollbar"
                            >
                                {messages.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === 'user'
                                                ? isDark
                                                    ? 'bg-[#1a1a1a] text-[#4cdef5] border border-[#4cdef5]/20 rounded-tr-none shadow-lg'
                                                    : 'bg-gray-100 text-[#0369a1] border border-gray-200 rounded-tr-none shadow-sm'
                                                : m.isError
                                                    ? 'bg-red-500/10 border border-red-500/30 text-red-200 rounded-tl-none'
                                                    : isDark
                                                        ? 'bg-[#1a1a1a] text-neutral-200 border border-white/10 rounded-tl-none shadow-lg'
                                                        : 'bg-gray-100 text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                                                }`}
                                        >
                                            <div className="whitespace-pre-wrap">
                                                {m.content}
                                            </div>
                                        </motion.div>
                                        <span className={`text-[9px] mt-1 px-1 font-mono ${m.role === 'user'
                                            ? 'text-right'
                                            : 'text-left'
                                            } ${isDark ? 'text-neutral-600' : 'text-gray-500'}`}>
                                            {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className={`rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center border shadow-lg ${isDark
                                            ? 'bg-[#1a1a1a] border-white/10'
                                            : 'bg-gray-100 border-gray-200'
                                            }`}>
                                            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-[#4cdef5]" />
                                            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#4cdef5]" />
                                            <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#4cdef5]" />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className={`p-4 border-t ${isDark
                                ? 'bg-[#111] border-white/5'
                                : 'bg-gray-50 border-gray-200'
                                }`}>
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                    className="relative group"
                                >
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about projects, skills, or leadership…"
                                        className={`w-full text-sm rounded-xl py-3 pl-4 pr-12 border focus:outline-none transition-all focus:ring-1 ${isDark
                                            ? 'bg-[#1a1a1a] text-white border-white/10 focus:border-[#4cdef5]/50 focus:ring-[#4cdef5]/20'
                                            : 'bg-white text-gray-900 border-gray-300 focus:border-[#4cdef5]/50 focus:ring-[#4cdef5]/20'
                                            }`}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isLoading}
                                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${isDark
                                            ? 'text-[#4cdef5] disabled:text-neutral-600 hover:bg-[#4cdef5]/10'
                                            : 'text-[#4cdef5] disabled:text-gray-400 hover:bg-[#4cdef5]/10'
                                            } disabled:cursor-not-allowed`}
                                    >
                                        <PaperAirplaneIcon className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PortfolioChatbot;
