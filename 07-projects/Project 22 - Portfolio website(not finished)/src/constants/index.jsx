import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";
import { SiPostgresql } from 'react-icons/si'; 
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";
import { Github } from "lucide-react";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Nagaruru Rohankumar Reddy",
  role: "Computer Science Enthusiast",
  subheading: "B.Tech student passionate about building scalable web applications, exploring modern technologies, and applying computer science principles to solve real-world problems .",
};

export const PROJECTS = [
 {
  id: 1,
  title: "Animood",
  description:
    "Recommends anime based on your mood, connects to the Jikan API via Axios, styled with DaisyUI",
  techStack: ["React", "Node.js", "Express", "RESTful APIs"],
  imgSrc: project1,
  link: "https://example-ecommerce.com",
  Github: "",
},

  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  Github: ""
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
    Github: "",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
    Github: "",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
    Github: "",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
    link: "https://react.dev/reference/react",
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
    link: "https://www.postgresql.org/docs/",
  }
  // {
  //   name: "GraphQL",
  //   icon: <RiGitBranchLine className="text-pink-400" />,
  // },
];

export const EXPERIENCES = [
  {
    yearRange: "2025 (June-July)",
    role: "ML Engineer",
    company: "Manav Rachna International Institute Of Research And Studies.",
    description:
"Implemented medical image segmentation using deep learning models such as U-Net and MedSAM. Employed the BRATS (Brain Tumor) dataset and designed a custom U-Net architecture for brain tumor prediction, achieving an IoU of 0.809, an accuracy of 89.4%, and a validation loss of 0.133 and segemented the result through MedSAM." ,
   techStack: ["Python","MONAI", "MedSAM" ,"Unet"],
  },
  // {
  //   yearRange: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description:
  //     "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
  //   techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  // },
  // {
  //   yearRange: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description:
  //     "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
  //   techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   yearRange: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "PayPal",
  //   description:
  //     "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
  //   techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  // },
];

export const EDUCATION = [
 {
  id: 1,
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Manav Rachna Educational Institute of Research and Studies, Faridabad, Haryana",
  duration: "Expected graduation 2027",
  description:
"Pursuing B.Tech in Computer Science and Engineering (Core)."},
{
  id: 2,
  degree: "Higher Secondary Education",
  institution: "Narayana Junior College, Anantapur, Andhra Pradesh",
  duration: "2021 - 2023",
  description:
    "Completed Higher Secondary Education with a focus on Science stream, strengthening fundamentals in Physics, Chemistry, and Mathematics.",
},

{
  id: 3,
  degree: "Secondary Education (Class 10)",
  institution: "Sree Ayyappa Education Centre (CBSE)",
  duration: "March 2021",
  description:
    "Completed Class 10 with a strong academic record of 91%.",
}

];

// export const TESTIMONIAL = {
//   name: "Sarah Doe",
//   title: "CEO, TechCorp",
//   quote:
//     "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
//   image: personImage,
// };
