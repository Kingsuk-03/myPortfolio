import {useEffect, useState} from "react";
import "./App.css";
import Aurora from "./components/Aurora";
import SplitText from "./components/SplitText";
import Nav from "./components/Nav";
import LogoLoop from "./components/LogoLoop";
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
  SiGithub,
  SiCloudflare,
} from "react-icons/si";

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
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Aurora Background */}
        <div className="h-[300px] sm:h-screen">
          <Aurora
            colorStops={["#7CFF67", "#B19EEF", "#5227FF"]}
            blend={0.5}
            amplitude={1.3}
            speed={0.5}
          />
        </div>
        {/* Navbar */}
        <Nav />

        <div className="absolute inset-0 flex flex-col items-center justify-start px-4 text-center pt-30 sm:pt-35 md:pt-50">
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
            className="flex items-center justify-center text-white mt-5 sm:mt-15 lg:mt-20 mx-auto w-full sm:max-w-md md:max-w-2xl lg:max-w-5xl"
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
      </div>
    </>
  );
}

export default App;
