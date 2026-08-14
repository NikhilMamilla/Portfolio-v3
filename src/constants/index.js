import {
    github,
    photo,
    Auracheck,
    BVRITConnect,
    CBB,
    DestinAI,
    Studyguardian,
    GDGoC,
    gdg_leadership,
} from '../assets'

import { FaGraduationCap, FaRobot, FaCode, FaDatabase, FaBrain } from 'react-icons/fa'


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "profile",
        title: "Education",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "tech",
        title: "Skills",
    },
    {
        id: "works",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];


const services = [{
    title: "Computer Science Student",
    icon: FaGraduationCap,
},
{
    title: "AI/ML Engineer",
    icon: FaRobot,
},
{
    title: "Frontend Developer",
    icon: FaCode,
},
{
    title: "Backend Developer",
    icon: FaDatabase,
},
];

const programming = [
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
];

const frontend = [
    { name: "React.js", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    { name: "Redux", icon: "devicon-redux-original colored" },
];

const backend = [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express.js", icon: "devicon-express-original" },
    { name: "Flask", icon: "devicon-flask-original" },
    { name: "Socket.io", icon: "devicon-socketio-original" },
];

const databases = [
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
];

const devops = [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
];

const tools = [
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "npm", icon: "devicon-npm-original-wordmark colored" },
    { name: "Netlify", icon: "devicon-netlify-plain colored" },
    { name: "Vercel", icon: "devicon-vercel-original" },
    { name: "Firebase", icon: "devicon-firebase-plain colored" },
];

const experiences = [
    {
        title: "Summer Research Intern",
        company_name: "Indian Institute of Science (IISc), Bengaluru",
        subtitle: "PHCCO Summer Internship — Department of Bioengineering, IISc Bengaluru",
        date: "May 2026 - June 2026",
        iconText: "IISc",
        points: [
            "Computational Research: Worked on computational modeling of tumor–immune interactions and cancer cell heterogeneity.",
            "Agent-Based Modeling: Contributed to the development of an agent-based simulation framework for studying tumor growth and immune responses.",
            "AI & Data Analysis: Explored machine learning and graph-based approaches for modeling immune-cell states and cellular interactions.",
            "Cancer Research: Studied colorectal cancer molecular subtypes and investigated the CMS3 metabolic subtype.",
            "Simulation & Analysis: Implemented simulation components for tumor evolution, immune-cell behavior, cytokine interactions, and Anti-PD-1 therapy.",
            "Research Collaboration: Worked as part of a multidisciplinary research team under the PHCCO Summer Internship program at IISc Bengaluru.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "Tropoleap India",
        date: "February 2026 - June 2026",
        iconText: "Tropoleap",
        points: [
            "Full Stack Development: Developed and maintained web applications using React.js, Node.js, and modern JavaScript technologies.",
            "Backend Development: Designed and integrated RESTful APIs with database services to support scalable application features.",
            "AI & Automation: Worked on AI-powered workflows and automation solutions to improve application functionality and development efficiency.",
            "Collaboration: Worked with development teams to implement features, debug issues, and improve overall application performance.",
            "Engineering Practices: Used Git, GitHub, API testing, and modern development practices throughout the development lifecycle.",
        ],
    },
    {
        title: "Tech-Lead Intern",
        company_name: "Viswam.ai — Summer of AI",
        date: "May 2025 - July 2025",
        iconText: "ViswamAI",
        points: [
            "AI Systems Leadership: Led AI pipeline development using Python, NLP, and Transformer architectures.",
            "Model Training & Evaluation: Guided peers in training and fine-tuning foundational AI models for regional languages.",
            "Data Annotation & Automation: Contributed to dataset creation, automation scripts, and evaluation tools.",
            "Collaboration: Worked under the Viswam.ai initiative in collaboration with IIIT-H, Swecha, and Meta.",
            "Social Impact: Helped build inclusive AI solutions supporting underserved language communities.",
        ],
    },
    {
        title: "Full Stack Web Developer Intern",
        company_name: "Pantech Solutions",
        date: "March 2024 - June 2024",
        iconText: "Pantech",
        points: [
            "Developed responsive web applications using React.js, Node.js, and modern JavaScript frameworks.",
            "Implemented RESTful APIs and database integration using MongoDB and Express.js for backend services.",
            "Collaborated with cross-functional teams to design and implement user-friendly interfaces and features.",
            "Optimized application performance and conducted thorough testing to ensure code quality and reliability.",
            "Gained hands-on experience with version control systems (Git) and agile development methodologies.",
        ],
    },
];



const projects = [
    {
        name: "AuraCheck – Mental Wellness Web App",
        description: "Developed a full-stack wellness platform featuring personalized onboarding, mood/stress/sleep tracking, journaling, and an AI-powered chatbot named AURABOT. Built with React, Firebase, and modern web technologies.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
        ],
        image: Auracheck,
        source_code_link: "https://github.com/NikhilMamilla/Auracheck-v2",
        live_demo_link: "https://login-406b1.web.app/",
    },
    {
        name: "BVRIT Alumni-Student Connect Platform",
        description: "Built a role-based networking platform for students and alumni, including dashboards, mentorship matching, and AI-powered assistance. Features secure authentication, opportunity board and chatbot support.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: BVRITConnect,
        source_code_link: "https://github.com/NikhilMamilla/BVRITAlumniConnect",
        live_demo_link: "https://bvrit-connect-olive.vercel.app/",
    },
    {
        name: "Coding Brigade BVRIT - Official Club Website",
        description: "Created and developed the official website for Coding Brigade BVRIT, the coding club of B V Raju Institute of Technology, Narsapur. Built using React, Three.js, Framer Motion, and GSAP for smooth animations.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "framer",
                color: "pink-text-gradient",
            },
            {
                name: "gsap",
                color: "orange-text-gradient",
            },
        ],
        image: CBB,
        source_code_link: "https://github.com/KarthikSbrshB/cbb-website",
        live_demo_link: "https://cbb.bvrit.ac.in/",
    },
    {
        name: "DestinAI – AI Travel & Booking Concierge",
        description: "Built a real-time AI travel planning dashboard with intelligent multi-stop trip planning, personalized travel personas, and a global hotel concierge. Integrated Mistral AI for travel assistance, Google Maps for location services, and Firebase for authentication and real-time data synchronization.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "mistralai",
                color: "orange-text-gradient",
            },
            {
                name: "firebase",
                color: "blue-text-gradient",
            },
            {
                name: "googlemaps",
                color: "green-text-gradient",
            },
        ],
        image: DestinAI,
        source_code_link: "https://github.com/NikhilMamilla/DestinAI",
        live_demo_link: "https://destin-ai-iota.vercel.app/",
    },
    {
        name: "StudyGuardian AI – Real-Time Study Productivity Assistant",
        description: "Developed an AI-powered computer vision system that analyzes study behavior in real time using webcam-based focus detection, eye tracking, head-pose analysis, and keyboard/mouse activity. The system identifies activities such as reading, writing, thinking, and daydreaming while generating focus scores, productivity analytics, and distraction insights.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "opencv",
                color: "green-text-gradient",
            },
            {
                name: "computervision",
                color: "pink-text-gradient",
            },
            {
                name: "machinelearning",
                color: "orange-text-gradient",
            },
            {
                name: "ai",
                color: "blue-text-gradient",
            },
        ],
        image: Studyguardian,
        source_code_link: "https://github.com/NikhilMamilla/StudyGuardianAI",
    },
    {
        name: "GDG On Campus BVRIT – Official Website",
        description: "Designed and developed the official website for GDG On Campus BVRIT, creating a responsive platform for the developer community. Implemented modern UI components, animated interactions, team and community sections, contact functionality, and social integrations using React-based technologies and Tailwind CSS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "vite",
                color: "orange-text-gradient",
            },
        ],
        image: GDGoC,
        source_code_link: "https://github.com/NikhilMamilla/GDGoc",
        live_demo_link: "https://gdgoc-bvrit.vercel.app/",
    },
];

export { services, programming, frontend, backend, databases, devops, tools, experiences, projects };
