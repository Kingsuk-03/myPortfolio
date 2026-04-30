import ShinyText from "./ShinyText";
import {SiGithub} from "react-icons/si";
import {GoArrowUpRight} from "react-icons/go";

interface ProjectCardProps {
  image: string;
  alt?: string;
  title: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  /** Optional override for the image className (border / glow). */
  imageClassName?: string;
}

const DEFAULT_IMAGE_CLASS =
  "w-full border border-white rounded-xl shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition";

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  alt = "project preview",
  title,
  techStack,
  githubLink,
  liveLink,
  imageClassName = DEFAULT_IMAGE_CLASS,
}) => {
  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition bg-white/10 backdrop-blur-lg">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center">
        {/* LEFT — Project image (keeps natural aspect ratio) */}
        <div className="w-full md:w-1/2 lg:w-[55%] flex-shrink-0">
          <img src={image} alt={alt} className={imageClassName} />
        </div>

        {/* RIGHT — Title, tech stack, buttons */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col gap-5 sm:gap-6">
          {/* Title */}
          <h3 className="text-center md:text-left font-semibold text-white text-[28px] sm:text-[34px] lg:text-[40px] leading-tight">
            {title}
          </h3>

          {/* Tech stack — same ShinyText component as original */}
          <div>
            <ShinyText
              texts={techStack}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>

          {/* Buttons — exact same style as original */}
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <a
              href={githubLink}
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
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group">
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
  );
};

export default ProjectCard;
