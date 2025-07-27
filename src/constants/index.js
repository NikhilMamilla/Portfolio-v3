import {
    github,
    photo,
    Auracheck,
    BVRITConnect,
    CBB,
    css,
    mysql,
    aws,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    python,
    java,
    c,
    docker,
    postgresql,
    firebase,
} from '../assets'

import { FaGraduationCap, FaRobot, FaCode, FaDatabase, FaBrain } from 'react-icons/fa'


export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
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

const languages = [{
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
];

const technologies = [{
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
];

const experiences = [{
    title: "Tech-Lead Intern",
    company_name: "Viswam.ai — Summer of AI",
    date: "May 2025 - July 2025",
    points: [
        "AI Systems Leadership: Led AI pipeline development using Python, NLP, and Transformer architectures.",
        "Model Training & Evaluation: Guided peers in training and fine-tuning foundational AI models for regional languages.",
        "Data Annotation & Automation: Contributed to dataset creation, automation scripts, and evaluation tools.",
        "Collaboration: Worked under the Viswam.ai initiative in collaboration with IIIT-H, Swecha, and Meta.",
        "Social Impact: Helped build inclusive AI solutions supporting underserved language communities.",
    ],
}, {
    title: "Full Stack Web Developer Intern",
    company_name: "Pantech Solutions",
    date: "March 2024 - June 2024",
    points: [
        "Developed responsive web applications using React.js, Node.js, and modern JavaScript frameworks.",
        "Implemented RESTful APIs and database integration using MongoDB and Express.js for backend services.",
        "Collaborated with cross-functional teams to design and implement user-friendly interfaces and features.",
        "Optimized application performance and conducted thorough testing to ensure code quality and reliability.",
        "Gained hands-on experience with version control systems (Git) and agile development methodologies.",
    ],
}, ];



const projects = [{
        name: "AuraCheck – Mental Wellness Web App",
        description: "Developed a full-stack wellness platform featuring personalized onboarding, mood/stress/sleep tracking, journaling, and an AI-powered chatbot named AURABOT. Built with React, Firebase, and modern web technologies.",
        tags: [{
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
        source_code_link: "https://github.com/NikhilMamilla/Auracheck",
        live_demo_link: "https://auracheck-f408f.web.app/",
    },
    {
        name: "BVRIT Alumni-Student Connect Platform",
        description: "Built a role-based networking platform for students and alumni, including dashboards, mentorship matching, and AI-powered assistance. Features secure authentication, opportunity board, event tools, and chatbot support using Gemini API.",
        tags: [{
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
        live_demo_link: "https://minor-project-64ad1.web.app/",
    },
    {
        name: "Coding Brigade BVRIT - Official Club Website",
        description: "Created and developed the official website for Coding Brigade BVRIT, the coding club of B V Raju Institute of Technology, Narsapur. Built using React, Three.js, Framer Motion, and GSAP for smooth animations.",
        tags: [{
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
];

export { services, technologies, languages, experiences, projects };