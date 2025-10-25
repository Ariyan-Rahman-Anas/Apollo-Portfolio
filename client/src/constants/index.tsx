import { allAssets } from "@/assets";
import { MarqueeSkillI } from "@/types/home.types";
import { Facebook, Github, Linkedin} from "lucide-react"

  export const statsData = [
        {
            id: 1,
            title: 2,
            subtitle: "Years",
            description: "Experiences",
            icon: allAssets.careerStats.experience
        },
        {
            id: 2,
            title: 5,
            description: "Certificates",
            icon: allAssets.careerStats.certificate
        },
        {
            id: 3,
            title: 2,
            description: "Technologies",
            icon: allAssets.careerStats.technology
        },
        {
            id: 4,
            title: 2,
            description: "Projects",
            icon: allAssets.careerStats.projects
        },
    ] 

  export const expertiseData = [
        {
            icon: allAssets.expertise.frontend,
            title: "Front-End Development",
            description: "Skilled in building dynamic, responsive user interfaces with React, HTML5, and CSS3. Experienced in using Tailwind CSS and Bootstrap to create visually appealing, fast-loading, and accessible web applications."
        },
        {
            icon: allAssets.expertise.backend,
            title: "Back-End Engineering",
            description: "Experienced in developing scalable server-side applications using Node.js, Express, and MongoDB. Proficient in designing RESTful APIs and ensuring secure, efficient backend systems."
        },
        {
            icon: allAssets.expertise.problemSolving,
            title: "Creative Problem Solving",
            description: "Adept at analyzing complex challenges and delivering innovative, efficient solutions through clean, maintainable code and continuous learning."
        },
        {
            icon: allAssets.expertise.debug,
            title: "Precision Debugging",
            description: "Proficient in systematically identifying and resolving bugs and performance issues to ensure robust, stable, and high-quality software."
        }
]
    
export const getInTouchLinks = [
        {
            color: "hover:bg-[#0a66c2]",
            icon: <Linkedin size={28} />,
            url:"https://www.linkedin.com/in/ariyanrahmananas"
        },
        {
            color: "hover:bg-black",
            icon: <Github size={28} />,
            url:"https://github.com/Ariyan-Rahman-Anas"
        },
        {
            color: "hover:bg-[#0866ff]", 
            icon: <Facebook size={28} />,
            url:"https://www.facebook.com/ariyanrahmananas69"
        }
]
    
export const marqueeSkills:MarqueeSkillI[] = [
    { name: 'HTML', icon: "https://img.icons8.com/?size=1000&id=20909&format=png&color=000000" },
    { name: 'CSS', icon: "https://img.icons8.com/?size=1000&id=21278&format=png&color=000000" },
    { name: 'BootStrap', icon: "https://img.icons8.com/?size=1000&id=g9mmSxx3SwAI&format=png&color=000000" },
    { name: 'Tailwind', icon: "https://img.icons8.com/?size=1000&id=4PiNHtUJVbLs&format=png&color=000000" },
    { name: 'JavaScript', icon: "https://img.icons8.com/?size=1000&id=108784&format=png&color=000000" },
    { name: 'TypeScript', icon: "https://img.icons8.com/?size=1000&id=wpZmKzk11AzJ&format=png&color=000000" },
    { name: 'React', icon: "https://img.icons8.com/?size=1000&id=123603&format=png&color=000000" },
    { name: 'Next.js', icon: "https://img.icons8.com/?size=1000&id=yUdJlcKanVbh&format=png&color=000000" },
    { name: 'Redux', icon: "https://img.icons8.com/?size=1000&id=jD-fJzVguBmw&format=png&color=000000" },
    { name: 'Node.js', icon: "https://img.icons8.com/?size=1000&id=hsPbhkOH4FMe&format=png&color=000000" },
    { name: 'Express.js', icon: "https://img.icons8.com/?size=1000&id=SDVmtZ6VBGXt&format=png&color=000000" },
    { name: 'MongoDB', icon: "https://img.icons8.com/?size=1000&id=B403GJErHZpx&format=png&color=000000" },
    { name: 'Mongoose', icon: "https://img.icons8.com/?size=1000&id=gKfcEStXI1Hm&format=png&color=000000" },
    { name: 'REST API', icon: "https://img.icons8.com/?size=1000&id=WJ8XAkZfPW93&format=png&color=000000" },
    { name: 'PostgreSQL', icon: "https://img.icons8.com/?size=1000&id=38561&format=png&color=000000" },
];