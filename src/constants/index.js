import {
    github,
    photo,
    Auracheck,
    BVRITConnect,
    CBB,
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
},];



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
    live_demo_link: "https://auracheck.vercel.app/",
},
{
    name: "BVRIT Alumni-Student Connect Platform",
    description: "Built a role-based networking platform for students and alumni, including dashboards, mentorship matching, and AI-powered assistance. Features secure authentication, opportunity board and chatbot support.",
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

export { services, programming, frontend, backend, databases, devops, tools, experiences, projects };
