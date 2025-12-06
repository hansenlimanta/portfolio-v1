import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineMail,
    DiGit,
    DiJavascript1,
    DiReact,
    SiNextdotjs,
    SiVuetify,
    SiTailwindcss,
    SiFramer,
    SiStyledcomponents,
    FaVuejs,
} from "./icons";

export const experienceData = [
    {
        date: "2025 - Present",
        tools: [
            ".NET",
            "Angular",
            "RabbitMQ",
            "Camunda",
            "SQL Server",
            "Postgres",
            "Git",
        ],
        link: "https://www.linkedin.com/company/pt-adicipta-inovasi-teknologi/",
        title: "Senior Developer · PT Adicipta Inovasi Teknologi (AdIns)",
        desc: `At AdIns, a leading IT solutions provider for multi-finance companies, I design, develop, and deploy new features for core systems using .NET and Angular. My role involves not only hands-on coding but also conducting code reviews to maintain high-quality standards. I am actively involved in the entire feature lifecycle, from initial development and integration with tools like RabbitMQ and Camunda, to final deployment in a production environment.`,
    },
    {
        date: "2023 — Jan 2025",
        tools: ["Vue", "Vuetify", "Java", "Springboot", "Vuex", "Git"],
        link: "https://www.linkedin.com/company/pt-midas-daya-teknologi/mycompany/",
        title: "Fullstack Developer · Midas Daya Teknologi",
        desc: `As a Midas Daya Teknologi employee at Bank Muamalat
        Indonesia, I developed and maintained the branch delivery system
        using Vue.js and Java Spring Boot. I created clean, modular,
        and testable code for both frontend and backend, promptly
        addressing bugs and performance issues. Staying current with
        the latest technologies and best practices, I contributed to
        the success and innovation of Bank Muamalat Indonesia.`,
    },
    {
        date: "Oct — Dec 2022",
        tools: ["React", "Styled Components", "UI/UX"],
        link: "https://www.linkedin.com/company/sagara-asia/",
        title: "Frontend Developer · Sagara Technology",
        desc: `I developed and maintained Vue.js frontends, including the
        Sagara Foundation CSR site, showcasing expertise in scalable
        and user-friendly interfaces. Implemented mobile-responsive
        features for improved user experience, collaborating with
        back-end developers and designers to enhance overall
        usability.`,
    },
];
export const projectsData = [
    {
        title: "Linkbud - Linktree Alternative",
        tools: [
            "Next.js",
            "Typescript",
            "Zustand",
            "TRPC",
            "Prisma",
            "NextAuth",
            "Tailwind CSS",
            "Radix UI",
        ],
        link: "https://linkbud.hansenlimanta.com/",
        image: "/projects/linkbud.webp",
        desc: `LinkBud is a versatile Linktree clone app that empowers you to create a personalized list of links and choose the appearance that suits your style.`,
        github: "https://github.com/hansenlimanta/linkbud",
    },
    {
        title: "Portfolio v2",
        tools: "React, NextJs, Tailwind",
        link: "https://hansenlimanta-v2.vercel.app/",
        image: "/projects/hansenlimanta-v2.png",
        desc: `This is my personal portfolio project, inspired by the design and structure of Brittany Chiang's Portfolio. The objective is to reverse engineer aspects of the website to gain insights into its layout, style, and functionality.`,
        github: "https://github.com/hansenlimanta/portfolio-v2",
    },
    {
        title: "Ignite - GameList",
        tools: [
            "React",
            "Redux",
            "Axios",
            "Framer Motion",
            "Styled Components",
        ],
        link: "https://hansen-ignite-gameslist.netlify.app/",
        image: "/projects/ignite1.jpg",
        desc: `A web app to see a list of upcoming, popular and newest games based on the rawg.io api. You can also search by game name and view game details such as the console that provides it and game screenshots`,
        github: "https://github.com/hansenlimanta/GameList",
    },
    {
        title: "Personal Notes App",
        tools: ["React", "Styled Components", "UI/UX"],
        link: "https://hansen-personal-notes.netlify.app/",
        image: "/projects/notes1.jpg",
        desc: `A web app for taking notes. You can archive or delete notes that are no longer used. Equipped with a search feature that will search according to the title of the notes.`,
        github: "https://github.com/hansenlimanta/PersonalNotes",
    },
    {
        title: "Music Player",
        tools: ["React", "SASS"],
        link: "https://hansen-music-player.netlify.app/",
        image: "/projects/music1.jpg",
        desc: `A music service developed with the react framework. Has several choices of songs to play with an attractive appearance and a progress bar that adjusts the album cover.`,
        github: "https://github.com/hansenlimanta/MusicPlayer",
    },
    {
        title: "HTML - CSS Portfolio",
        tools: ["HTML", "CSS", "SASS", "JavaScript"],
        link: "https://hansen-htmlcss.netlify.app/",
        image: "/projects/htmlcss1.jpg",
        desc: `I created this project at the beginning of my frontend journey to hone my HTML and CSS knowledge. Using only html and css, I learned how layouts should be made with html semantics, how to make attractive animations, and also navigate between pages.`,
        github: "https://github.com/hansenlimanta/HTML-CSS-Portfolio",
    },
];

export const navLink = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT" },
    { path: "/projects", name: "PROJECTS" },
    { path: "/playground", name: "PLAYGROUND" },
];

export const extLink = [
    {
        path: "https://github.com/hansenlimanta",
        Icon: () => <AiOutlineGithub size={30} />,
    },
    {
        path: "https://www.instagram.com/hansen_limanta/",
        Icon: () => <AiOutlineInstagram size={30} />,
    },
    {
        path: "https://www.linkedin.com/in/hansenlimanta/",
        Icon: () => <AiOutlineLinkedin size={30} />,
    },
    {
        path: "mailto:hansenlimanta@gmail.com",
        Icon: () => <AiOutlineMail size={30} />,
    },
];

export const skills = [
    {
        name: "Git",
        Icon: () => (
            <DiGit style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
    {
        name: "JavaScript",
        Icon: () => (
            <DiJavascript1
                style={{ verticalAlign: "middle" }}
                color="#ff5733"
            />
        ),
    },
    {
        name: "React",
        Icon: () => (
            <DiReact style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
    {
        name: "NextJS",
        Icon: () => (
            <SiNextdotjs style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
    {
        name: "Framer Motion",
        Icon: () => (
            <SiFramer style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
    {
        name: "Styled Components",
        Icon: () => (
            <SiStyledcomponents
                style={{ verticalAlign: "middle" }}
                size={30}
                color="#ff5733"
            />
        ),
    },
    {
        name: "Tailwind CSS",
        Icon: () => (
            <SiTailwindcss
                style={{ verticalAlign: "middle" }}
                color="#ff5733"
            />
        ),
    },
    {
        name: "Vue",
        Icon: () => (
            <FaVuejs style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
    {
        name: "Vuetify",
        Icon: () => (
            <SiVuetify style={{ verticalAlign: "middle" }} color="#ff5733" />
        ),
    },
];
