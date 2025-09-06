// import {useEffect, useState} from "react";
import "./App.css";
import CircularText from "./components/CircularText";
import TiltedCard from "./components/TiltedCard";
import SplitText from "./components/SplitText";
import LogoLoop from "./components/LogoLoop";
import Aurora from "./components/Aurora";
import Nav from "./components/Nav";
import myImage from "./assets/myImage.jpg";
import {FaNodeJs} from "react-icons/fa";
import {
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
} from "react-icons/si";
import ShinyText from "./components/ShinyText";

const techLogos = [
  {node: <SiJavascript />, title: "React", href: "https://www.javascript.com/"},
  {node: <SiReact />, title: "React", href: "https://react.dev"},
  {node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com"},
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {node: <FaNodeJs />, title: "React", href: "https://nodejs.org/en"},
  {node: <SiExpress />, title: "Express.js", href: "https://expressjs.com/"},
  {node: <SiHono />, title: "Express.js", href: "https://hono.dev/"},
  {node: <SiMongodb />, title: "Express.js", href: "https://www.mongodb.com/"},
  {node: <SiPostgresql />, title: "Express.js", href: "https://www.postgresql.org/"},
  {node: <SiPrisma />, title: "Next.js", href: "https://www.prisma.io/"},
  {node: <SiGit />, title: "Express.js", href: "https://git-scm.com/"},
  {node: <SiDocker />, title: "Express.js", href: "https://www.docker.com/"},
  {node: <SiGithub />, title: "Express.js", href: "https://github.com/Kingsuk-03"},
  {
    node: <SiCloudflare />,
    title: "Next.js",
    href: "https://www.cloudflare.com/lp/pg-one-platform-ppc/?&utm_campaign=&utm_term=&gad_campaignid=22527073640",
  },
  {node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org"},
];
function App() {
  return (
    <>
      <div className="relative w-full h-[550px] sm:h-[600px] md:h-[700px] lg:h-screen overflow-hidden sm:mb-10 md:mb-20 lg:mb-50 ">
        <section id="home">
          {/* Aurora Background */}
          <div className="h-[550px] sm:fixed sm:inset-0 sm:-z-10">
            <Aurora
              colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
              blend={0.5}
              amplitude={1.3}
              speed={0.5}
            />
          </div>
          {/* Navbar */}
          <Nav />

          <div className="absolute inset-0 flex flex-col items-center justify-start px-4 text-center pt-30 sm:pt-35 md:pt-45 lg:pt-55">
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
              className="flex items-center justify-center text-white mt-5 sm:mt-15 md:mt-20 lg:mt-25 mx-auto w-full sm:max-w-md md:max-w-4xl lg:max-w-5xl"
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
        <section id="about" className="scroll-mt-70">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:px-20 lg:ml-15">
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
              <div className="text-center mb-5 lg:text-start font-semibold text-white text-[26px] sm:text-[50px] leading-8 sm:leading-15">
                About Me
              </div>
              <div className="text-center lg:text-start font-light text-slate-100 text-[18px] sm:text-2xl leading-5 sm:leading-7">
                I am — a Full-stack developer with a passion for crafting scalable,
                AI-powered web applications. I specialize in building modern,
                responsive interfaces and robust backend systems using technologies
                like React, Node.js, Prisma ORM, and PostgreSQL.
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="skills" className="scroll-mt-55">
        <div className="flex flex-col lg:flex-row mt-25 lg:mt-60 lg:items-center lg:justify-center lg:gap-10 mb-30">
          <div className="mb-15 sm:m md:pl-20 lg:pl-35 lg:ml-30 lg:w-1/2 border-amber-50">
            <div className="text-center mb-5 lg:text-start font-semibold text-white text-[30px] sm:text-[55px] leading-8 sm:leading-15">
              Skills
            </div>
            <div className="m-5 sm:m-0">
              <ShinyText
                texts={[
                  "Javascript",
                  "Java",
                  "TypeScript",
                  "React",
                  "Tailwindcss",
                  "NodeJS",
                  "ExpressJs",
                  "Hono",
                  "Mongodb",
                  "Postgresql",
                  "Prisma",
                  "NextJS",
                  "Git",
                  "Docker",
                  "Github",
                  "Cloudflare",
                ]}
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </div>
          </div>
          <div className="hidden sm:block border-amber-50 lg:w-1/2">
            <CircularText
              text="EAT*SLEEP*CODE*REPEAT*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
