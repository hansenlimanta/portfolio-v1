import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "../utils/icons";
import { useIsSmall } from "../hooks/useMediaQuery";
import { skills } from "../utils/data";
import Meta from "../components/Meta";
import logo from "../public/nameLogo2.svg";
import logoV from "../public/nameLogo2-vertical.svg";
import ContactMe from "./../components/ContactMe";
import LinkItem from "../components/LinkItem";

function About(props) {
    const isSmall = useIsSmall();
    const [isHoverResume, setIsHoverResume] = useState(false);
    const [isHoverProj, setIsHoverProj] = useState(false);

    return (
        <>
            <Meta title="About | Hansen Limanta" />
            <AboutCont>
                <Logo>
                    {isSmall ? (
                        <Image layout="fixed" src={logoV} alt="logo" />
                    ) : (
                        <Image layout="fixed" src={logo} alt="logo" />
                    )}
                </Logo>
                <AboutMe>
                    <h1 style={{ marginBottom: 0 }}>Hello!</h1>
                    <p>
                        My web development journey began in 2019, leading me to
                        major in Computer Science at Bina Nusantara University,
                        where I graduated in August 2023. My internship at
                        Sagara Technology was a pivotal experience, allowing me
                        to contribute to the Sagara Foundation CSR site and
                        solidifying my skills in Vue.js and user interface
                        design. I am now a Senior Developer at AdIns, where I
                        specialize in developing new features for core systems
                        within the multi-finance industry.
                    </p>
                    <HoverText
                        onMouseEnter={() => setIsHoverResume(true)}
                        onMouseLeave={() => setIsHoverResume(false)}
                        whileHover={{ color: "#ff5733" }}
                    >
                        <motion.a href="/resume.pdf" target="_blank">
                            <motion.div
                                animate={
                                    isHoverResume
                                        ? { color: "#FF5733" }
                                        : { color: "#3A3A3A" }
                                }
                            >
                                <MdOutlineKeyboardArrowDown
                                    style={{ verticalAlign: "middle" }}
                                />{" "}
                            </motion.div>{" "}
                            resume
                        </motion.a>
                        <Underline
                            initial={false}
                            animate={{ right: isHoverResume ? 0 : "100%" }}
                        />
                    </HoverText>
                    <h2>Skills</h2>
                    <Skills>
                        {skills.map((item) => {
                            return (
                                <Skill
                                    key={item.name}
                                    whileHover={{
                                        borderColor: "#FF5733",
                                        color: "#fff",
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    {item.name}
                                    <motion.div
                                        whileHover={{
                                            opacity: 1,
                                            transition: { duration: 0.2 },
                                        }}
                                        className="child"
                                    >
                                        <item.Icon
                                            style={{ verticalAlign: "middle" }}
                                            color="#ff5733"
                                        />
                                    </motion.div>
                                </Skill>
                            );
                        })}
                    </Skills>
                    <h2>Experience</h2>
                    <h3>Senior Developer</h3>
                    <h4>
                        PT Adicipta Inovasi Teknologi (AdIns) · 2025 - Present
                    </h4>
                    <ul>
                        <li>
                            At AdIns, a leading IT solutions provider for
                            multi-finance companies, I design, develop, and
                            deploy new features for core systems using .NET and
                            Angular.
                        </li>
                        <li>
                            My role involves not only hands-on coding but also
                            conducting code reviews to maintain high-quality
                            standards.
                        </li>
                        <li>
                            I am actively involved in the entire feature
                            lifecycle, from initial development and integration
                            with tools like RabbitMQ and Camunda, to final
                            deployment in a production environment.
                        </li>
                    </ul>
                    <h3>Fullstack Developer</h3>
                    <h4>Midas Daya Teknologi · 2023 — Jan 2025</h4>
                    <ul>
                        <li>
                            As a Midas Daya Teknologi employee at Bank Muamalat
                            Indonesia, I developed and maintained the branch
                            delivery system using Vue.js and Java Spring Boot.
                        </li>
                        <li>
                            I created clean, modular, and testable code for both
                            frontend and backend, promptly addressing bugs and
                            performance issues.
                        </li>
                    </ul>
                    <h3>Frontend Developer</h3>
                    <h4>Sagara Technology · Oct — Dec 2022</h4>
                    <ul>
                        <li>
                            I developed and maintained Vue.js frontends,
                            including the Sagara Foundation CSR site, showcasing
                            expertise in scalable and user-friendly interfaces.
                        </li>
                        <li>
                            Implemented mobile-responsive features for improved
                            user experience, collaborating with back-end
                            developers and designers to enhance overall
                            usability.
                        </li>
                    </ul>
                    <h2>Get in Touch</h2>
                    <p>
                        I&apos;m open to Job opportunities where I can
                        contribute, learn and grow.
                    </p>
                    <StyledLinks>
                        <ContactMe styling={{ margin: 0 }} />
                        <LinkItem
                            linkto="/projects"
                            text="see my projects"
                            isHover={isHoverProj}
                            setHover={setIsHoverProj}
                            styling={{ fontSize: "1.125rem" }}
                        />
                    </StyledLinks>
                </AboutMe>
            </AboutCont>
        </>
    );
}

const AboutCont = styled.div`
    display: flex;
    height: 100%;
    background-color: #fff;
`;
const Logo = styled.div`
    position: fixed;
    height: 100vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    padding: 0 calc(50px + 2vw) 0 calc(70px + 2vw);
    @media (max-width: 800px) {
        width: 45px;
        top: 0;
        left: 15px;
        padding: 0;
        z-index: 1;
    }
`;
const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 700px;
    padding: 15vh 5vw 15vh 0;
    margin-left: 50vw;
    h2 {
        margin: 0;
    }
    h3 {
        margin: 10px 0 0 0;
        font-weight: 600;
    }
    h4 {
        margin: 0 0 10px 0;
        font-weight: 400;
    }
    p {
        margin: 10px 0;
    }
    ul {
        margin-top: 0;
        padding-left: 30px;
    }
    @media (max-width: 800px) {
        margin: 0;
        padding: 100px 20px 100px 80px;
    }
`;
const HoverText = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    overflow-x: hidden;
    padding-bottom: 5px;
    a {
        font-size: 1.25rem;
        margin: 0;
        cursor: pointer;
        display: flex;
    }
`;
const Underline = styled(motion.div)`
    position: absolute;
    margin-top: 1px;
    height: 2px;
    width: 100%;
    background-color: #ff5733;
    border-radius: 2px;
    bottom: 0;
    right: 100%;
`;
const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 350px;
    gap: 8px;
    margin: 20px 0;
`;
const Skill = styled(motion.div)`
    padding: 4px 12px;
    border-radius: 12px;
    border: 1px solid #3a3a3a;
    background-color: #ffffff;
    position: relative;
    font-size: 1.25rem;
    .child {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`;
const StyledLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 16px;
`;

export default About;
