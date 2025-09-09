import "./App.css";
import TiltedCard from "./components/TiltedCard";
import SplitText from "./components/SplitText";
import LogoLoop from "./components/LogoLoop";
import myImage from "./assets/myImage.jpg";
import Aurora from "./components/Aurora";
import Nav from "./components/Nav";
import Pic from "./assets/dp.png";
import dig_dicegame from "./assets/projects/dig_dicegame.png";
import bloggSite from "./assets/projects/bloggSite.png";
import Portfolio from "./assets/projects/portfolio.png";
import GradientText from "./components/GradientText";
import CardSwap, {Card} from "./components/CardSwap";
import ProfileCard from "./components/ProfileCard";
import ContactForm from "./components/ContactForm";
import payTm from "./assets/projects/payTm.jpeg";
import {FaGraduationCap} from "react-icons/fa6";
import ShinyText from "./components/ShinyText";
import {GoArrowUpRight} from "react-icons/go";
import {FaNodeJs} from "react-icons/fa";
import {
  SiLeetcode,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiHono,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiGit,
  SiDocker,
  SiGithub,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";
import GithubPopup from "./components/GithubPopup";
const techLogos = [
  {
    node: <SiJavascript />,
    title: "Javascript",
    href: "https://www.javascript.com/",
  },
  {node: <SiReact />, title: "React", href: "https://react.dev"},
  {node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com"},
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {node: <FaNodeJs />, title: "NodeJs", href: "https://nodejs.org/en"},
  {node: <SiExpress />, title: "Express.js", href: "https://expressjs.com/"},
  {node: <SiHono />, title: "Hono", href: "https://hono.dev/"},
  {node: <SiMongodb />, title: "Express.js", href: "https://www.mongodb.com/"},
  {node: <SiPostgresql />, title: "Mongodb", href: "https://www.postgresql.org/"},
  {node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io/"},
  {node: <SiGit />, title: "Git", href: "https://git-scm.com/"},
  {node: <SiDocker />, title: "Docker", href: "https://www.docker.com/"},
  {node: <SiGithub />, title: "Github", href: "https://github.com/Kingsuk-03"},
  {
    node: <SiCloudflare />,
    title: "Cloudflare",
    href: "https://www.cloudflare.com",
  },
  {node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org"},
  {node: <SiVercel />, title: "Vercel", href: "https://www.javascript.com/"},
];
function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[550px] sm:h-[600px] md:h-[700px] lg:h-screen overflow-hidden sm:mb-10 md:mb-20 lg:mb-60 ">
        <section id="home">
          {/* Aurora Background */}
          <div className="h-screen fixed inset-0 -z-10">
            <Aurora
              colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
              blend={0.5}
              amplitude={1.3}
              speed={0.5}
            />
          </div>

          <Nav />

          <div className="absolute inset-0 flex flex-col items-center justify-start px-4 text-center pt-35 sm:pt-35 md:pt-45 lg:pt-55">
            <div className="flex items-center justify-center mb-2 sm:mb-4">
              <picture>
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp"
                  type="image/webp"
                />
                <img
                  className="h-6 w-6 sm:h-10 sm:w-10"
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif"
                  alt="😉"
                />
              </picture>
              <SplitText
                text="Hey There! I'm Kingsuk Bose"
                className="font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-3xl ml-2"
                delay={50}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{opacity: 0, y: 40}}
                to={{opacity: 1, y: 0}}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>

            <div className="max-w-2xl px-4">
              <p className="font-semibold text-white text-[32px] sm:text-[58px] leading-8 sm:leading-15">
                Building Scalable Web Experiences with Modern Tech
              </p>
            </div>

            <div className="max-w-2xl mt-2 mx-3 sm:mx-0">
              <p className="font-light text-slate-100 text-[20px] sm:text-3xl leading-5 sm:leading-7">
                From hackathons to real-world projects, I design and develop secure,
                responsive, and innovative software solutions.
              </p>
            </div>
            <div
              className="flex items-center justify-center text-white mt-8 sm:mt-15 md:mt-20 lg:mt-23 mx-auto overflow-hidden w-full sm:max-w-md md:max-w-4xl lg:max-w-5xl"
              style={{height: "100px", position: "relative"}}>
              <LogoLoop
                logos={techLogos}
                speed={25}
                direction="left"
                logoHeight={55}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        {/* About Section */}
        <section id="about" className="scroll-mt-41 sm:scroll-mt-55">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:px-20 lg:mx-20">
            <div className="h-[100px] w-[100px] rounded-2xl block md:hidden border-2 border-white shadow-[0_0_25px_white] sm:rounded-lg sm:w-[300px] md:h-[300px] mb-5 lg:mb-0 overflow-hidden">
              <img src={myImage} alt="Kingsuk Bose" />
            </div>
            <div className="hidden md:block border-2 border-white shadow-[0_0_25px_white] rounded-lg w-[270px] h-[270px] md:mb-2 lg:mb-0 overflow-hidden">
              <TiltedCard
                imageSrc={myImage}
                altText="Kingsuk Bose"
                captionText="Kingsuk Bose -Developer"
                containerHeight="270px"
                containerWidth="270px"
                imageHeight="270px"
                imageWidth="270px"
                rotateAmplitude={11}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>
            <div className="sm:px-0 w-2/3 flex flex-col justify-start text-white md:p-15 lg:px-20 ">
              <div className="lg:flex lg:gap-5 text-center mb-5 lg:text-start font-semibold text-white text-[26px] sm:text-[50px] leading-8 sm:leading-15">
                About Me
                <a href="https://leetcode.com/u/Kingsuk09/" target="_blank">
                  <SiLeetcode className="hidden lg:block" />
                </a>
              </div>
              <div className="text-center lg:text-start font-light text-slate-100 text-[19px] sm:text-2xl leading-5 sm:leading-7">
                I am — a Full-stack developer with a passion for crafting scalable,
                AI-powered web applications. I specialize in building modern,
                responsive interfaces and robust backend systems using technologies
                like React, Node.js, Prisma ORM, and PostgreSQL.
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Skills Section */}
      <section
        id="skills"
        className="mb-25 mt-30 sm:mt-45 scroll-mt-25 sm:scroll-mt-40">
        <div className="mb-10 text-center lg:w-1/2">
          <GradientText
            colors={[
              "rgba(255,255,255,0.0)", // fully transparent edge
              "rgba(255,255,255,0.6)", // soft white
              "rgba(255,255,255,1.0)", // pure bright white (shine core)
              "rgba(255,255,255,0.6)", // soft white
              "rgba(255,255,255,0.0)", // fully transparent edge
            ]}
            animationSpeed={10}
            showBorder={false}
            className="text-center mb-5 lg:text-start font-semibold text-[35px] sm:text-[55px] leading-8 sm:leading-15">
            Skills
          </GradientText>
        </div>
        <div className="flex flex-row items-center justify-center max-w-full sm:w-1/2 mx-5 sm:mx-auto">
          <ShinyText
            texts={[
              "JavaScript",
              "Java",
              "TypeScript",
              "React",
              "Tailwindcss",
              "Hono",
              "NodeJs",
              "ExpressJs",
              "MongoDB",
              "Prisma",
              "PostgreSQL",
              "NextJS",
              "Cloudflare",
              "Docker",
              "Github",
              "Vercel",
            ]}
            disabled={false}
            speed={5}
            className="justify-center"
            textClass="md:text-lg lg:text-xl"
          />
        </div>
      </section>

      {/* Projects section */}
      <section
        id="projects"
        className="sm:py-16 scroll-mt-25 sm:scroll-mt-15 sm:mb-50">
        <div className="mb-10 text-center lg:w-1/2">
          <GradientText
            colors={[
              "rgba(255,255,255,0.0)", // fully transparent edge
              "rgba(255,255,255,0.6)", // soft white
              "rgba(255,255,255,1.0)", // pure bright white (shine core)
              "rgba(255,255,255,0.6)", // soft white
              "rgba(255,255,255,0.0)", // fully transparent edge
            ]}
            animationSpeed={10}
            showBorder={false}
            className="text-center mb-5 lg:text-start font-semibold text-[30px] sm:text-[55px] leading-8 sm:leading-15">
            Projects
          </GradientText>
        </div>
        <div className="max-w-6xl mx-auto px-4 space-y-8 bg-transparent">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg">
              <div className="max-w-full mb-4 sm:mb-2">
                <img
                  src={bloggSite}
                  alt="blogging site"
                  className="border border-white rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition"
                />
              </div>
              <h3 className="text-xl text-center mb-5 lg:text-start font-semibold text-white text-[30px] sm:text-[35px] leading-8 sm:leading-15">
                AI - Powered Blogging Website
              </h3>
              <div className="mb-5">
                <ShinyText
                  texts={[
                    "TypeScript",
                    "Hono",
                    "React",
                    "Tailwindcss",
                    "PostgreSQL",
                    "Prisma",
                    "Cloudflare",
                  ]}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Kingsuk-03/Medium-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white  text-sm sm:text-base cursor-pointer rounded-xl
                 bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
                 shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
                 text-shadow">
                    <SiGithub />
                    Github
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                   bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                   blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
                <a
                  href="https://medium-project-lovat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group" // <-- add this
                >
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
               bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
               shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
               text-shadow">
                    <GoArrowUpRight /> Live Demo
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                 bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                 blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg">
              <div className="max-w-full mb-4 sm:mb-2">
                <img src={Portfolio} alt="blogging site" className="rounded-xl" />
              </div>
              <h3 className="text-xl text-center mb-5 lg:text-start font-semibold text-white text-[30px] sm:text-[35px] leading-8 sm:leading-15">
                My Portfolio Website
              </h3>
              <div className="mb-5">
                <ShinyText
                  texts={[
                    "TypeScript",
                    "React",
                    "Tailwindcss",
                    "Motion",
                    "GSAP",
                    "Ogl",
                    "Github",
                    "Vercel",
                  ]}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Kingsuk-03/Medium-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
                 bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
                 shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
                 text-shadow">
                    <SiGithub />
                    Github
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                   bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                   blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
                <a
                  href="https://medium-project-lovat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group" // <-- add this
                >
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
               bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
               shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
               text-shadow">
                    <GoArrowUpRight /> Live Demo
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                 bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                 blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg">
              <div className="max-w-full mb-4 sm:mb-2">
                <img
                  src={payTm}
                  alt="blogging site"
                  className="border border-white rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition"
                />
              </div>
              <h3 className="text-xl text-center mb-5 lg:text-start font-semibold text-white text-[30px] sm:text-[35px] leading-8 sm:leading-15">
                PayTM - Clone
              </h3>
              <div className="mb-5">
                <ShinyText
                  texts={[
                    "JavaScript",
                    "NodeJs",
                    "ExpressJs",
                    "React",
                    "Tailwindcss",
                    "MongoDB",
                  ]}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Kingsuk-03/Medium-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
                 bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
                 shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
                 text-shadow">
                    <SiGithub />
                    Github
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                   bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                   blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
                <a
                  href="https://github.com/Kingsuk-03/PayTM-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group" // <-- add this
                >
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
               bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
               shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
               text-shadow">
                    <GoArrowUpRight /> Live Demo
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                 bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                 blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg">
              <div className="max-w-full mb-4 sm:mb-2">
                <img
                  src={dig_dicegame}
                  alt="Dice Game Preview"
                  className="rounded-xl shadow-[0_0_15px_rgba(216,52,95,0.6)] hover:shadow-[0_0_25px_rgba(216,52,95,0.8)] transition"
                />
              </div>
              <h3 className="text-xl text-center mb-5 lg:text-start font-semibold text-white text-[30px] sm:text-[35px] leading-8 sm:leading-15">
                DIG - Dice Game
              </h3>
              <div className="mb-5">
                <ShinyText
                  texts={["JavaScript", "HTML", "CSS", "Github", "Vercel"]}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Kingsuk-03/Dice_Game-PIG-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group">
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
                 bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
                 shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
                 text-shadow">
                    <SiGithub />
                    Github
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                   bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                   blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
                <a
                  href="https://dice-game-pig.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group" // <-- add this
                >
                  <div
                    className="relative flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base cursor-pointer rounded-xl
               bg-[linear-gradient(90deg,#5bfcc4,#f593e4,#71a4f0)]
               shadow-[inset_0px_0px_5px_#ffffffa9,inset_0px_35px_30px_#000,0px_5px_10px_#000000cc]
               text-shadow">
                    <GoArrowUpRight /> Live Demo
                    <span
                      className="absolute inset-0 rounded-xl transition-all duration-300
                 bg-[conic-gradient(#0000_80deg,#40baf7,#f34ad7,#5bfcc4,#0000_280deg)]
                 blur-0 -z-10 group-hover:blur-[15px] group-active:blur-[5px] group-active:translate-y-[1px]"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="scroll-mt-25 sm:scroll-mt-38 sm:mb-40 flex justify-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 text-white rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg m-5 sm:m-10 lg:m-5 p-6 w-full sm:max-w-5xl overflow-hidden">
          {/* Heading */}
          <div className="text-center lg:p-5 lg:text-left font-semibold text-white text-[26px] sm:text-[40px] lg:text-[50px] leading-8 sm:leading-[3.5rem] lg:leading-[4rem]">
            <div>
              <FaGraduationCap className="hidden lg:block" />
              Education
            </div>
            <p className="font-light sm:font-medium text-2xl lg:mr-40">
              Education is not the learning of facts, but the training of the mind to
              think.
            </p>
          </div>

          {/* Card Swap */}
          <div className="h-auto w-auto pt-40 sm:w-full lg:w-[70%] md:h-[450px] relative">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}>
              {/* Cards here */}
              <Card className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-green-400/10 to-transparent backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-green-300 bg-clip-text text-transparent">
                  B.Tech (CSE)
                </h3>
                <p className="text-3xl mb-2.5">Netaji Subhash Engineering College</p>
                <p>Sep 2022 - Present</p>
                <p className="font-semibold mb-2.5">CGPA - 7.73</p>
                <p className="hidden sm:block text-[20px]">
                  Courses: Operating Systems, Data Structures, Analysis Of
                  Algorithms, Artificial Intelligence, Machine Learning, Networking,
                  DBMS
                </p>
                <p className="block sm:hidden text-[20px]">
                  Courses: Operating Systems, DSA, Artificial Intelligence, Machine
                  Learning, Networking, DBMS
                </p>
              </Card>

              <Card className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-green-400/20 via-violet-500/10 to-transparent backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-300 to-violet-400 bg-clip-text text-transparent">
                  Higher Secondary (W.B.C.H.S.E)
                </h3>
                <p className="text-3xl mb-2.5">Sonarpur Vidyapith</p>
                <p>Jan 2020 - July 2021</p>
                <p className="font-semibold mb-2.5">Percentage - 78.4%</p>
                <p className="text-[20px]">
                  Courses: Physics, Chemistry, Mathematics, Computer Science
                </p>
              </Card>

              <Card className="p-6 rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/20 via-green-400/10 to-transparent backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 to-green-300 bg-clip-text text-transparent">
                  Secondary (W.B.B.S.E)
                </h3>
                <p className="text-3xl mb-2.5">Sonarpur Vidyapith</p>
                <p>Jan 2018 - May 2019</p>
                <p className="font-semibold mb-2.5">Percentage - 86.8%</p>
                <p className="text-[20px]">
                  Courses: Physical Science, Life Science, Mathematics, Computer
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 scroll-mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8">
          {/* Profile Card */}
          <div className="hidden sm:block max-w-md">
            <ProfileCard
              name="Kingsuk Bose"
              title="FullStack Developer"
              handle="kingsuk.dev"
              status="Online"
              avatarUrl={Pic}
              iconUrl={Pic}
              grainUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>

          {/* Contact Form */}
          <div className="flex-1 max-w-lg">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <section id="footer">
        <div className="text-white flex flex-col sm:flex-row items-center justify-around mx-6 sm:mx-12 my-5 sm:my-10">
          <div className="mb-2 sm:mb-0">
            <GithubPopup
              target=""
              link="#home"
              text="© Kingsuk Bose 2025"></GithubPopup>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4">
            <GithubPopup
              target="_blank"
              text="Star This Portfolio on Github"
              link="https://github.com/Kingsuk-03/myPortfolio"></GithubPopup>
            <GithubPopup
              target="_blank"
              text="Github"
              link="https://github.com/Kingsuk-03"></GithubPopup>
            <GithubPopup
              target="_blank"
              text="LinkedIn"
              link="https://www.linkedin.com/in/kingsuk-bose-995615245/"></GithubPopup>
            <GithubPopup
              target="_blank"
              text="LeetCode"
              link="https://leetcode.com/u/Kingsuk09/"></GithubPopup>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 lg:hidden">
            <a
              href="https://github.com/Kingsuk-03"
              target="_blank"
              className="hover:text-[#97ccf7] hover:drop-shadow-[0_0_8px_#97ccf7] transition-all duration-300">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/kingsuk-bose-995615245/"
              target="_blank"
              className="hover:text-[#97ccf7] hover:drop-shadow-[0_0_8px_#97ccf7] transition-all duration-300">
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Kingsuk09/"
              target="_blank"
              className="hover:text-[#97ccf7] hover:drop-shadow-[0_0_8px_#97ccf7] transition-all duration-300">
              LeetCode
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden whitespace-nowrap w-full text-white font-bold text-xl">
          <div className="flex text-4xl px-8 mb-5 animate-[marquee_10s_linear_infinite] hover:text-[#97ccf7] hover:drop-shadow-[0_0_8px_#97ccf7] transition-all duration-300">
            <div>
              Thanks ✦ For ✦ Visiting ✦ My ✦ Portfolio ✦Thanks ✦ For ✦ Visiting ✦ My
              ✦ Portfolio ✦
            </div>
            <div>
              Thanks ✦ For ✦ Visiting ✦ My ✦ Portfolio ✦Thanks ✦ For ✦ Visiting ✦ My
              ✦ Portfolio ✦
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
