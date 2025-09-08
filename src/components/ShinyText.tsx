import React from "react";
import {BiLogoJava} from "react-icons/bi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiHono,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiDocker,
  SiGithub,
  SiCloudflare,
  SiVercel,
} from "react-icons/si";

interface ShinyTextProps {
  texts: string[];
  disabled?: boolean;
  speed?: number;
  className?: string;
  textClass?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Cloudflare: <SiCloudflare className="text-yellow-400" />,
  Tailwindcss: <SiTailwindcss className="text-sky-400" />,
  TypeScript: <SiTypescript className="text-sky-600" />,
  PostgreSQL: <SiPostgresql className="text-sky-400" />,
  ExpressJs: <SiExpress className="text-green-400" />,
  MongoDB: <SiMongodb className="text-green-800" />,
  NodeJs: <SiNodedotjs className="text-gray-200" />,
  NextJS: <SiNextdotjs className="text-gray-200" />,
  Java: <BiLogoJava className="text-orange-600" />,
  Github: <SiGithub className="text-gray-200" />,
  Prisma: <SiPrisma className="text-gray-200" />,
  Vercel: <SiVercel className="text-gray-200" />,
  HTML: <SiHtml5 className="text-orange-400" />,
  Docker: <SiDocker className="text-sky-400" />,
  React: <SiReact className="text-cyan-400" />,
  Hono: <SiHono className="text-orange-300" />,
  CSS: <SiCss3 className="text-blue-400" />,
};

const ShinyText: React.FC<ShinyTextProps> = ({
  texts,
  disabled = false,
  speed = 5,
  className = "",
  textClass = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {texts.map((text, index) => (
        <button
          key={index}
          className={`text-xs sm:text-base px-4 py-2 rounded-lg border border-[#ffffffa4] bg-transparent text-[#ffffffa4] bg-clip-text inline-block ${
            disabled ? "" : "animate-shine"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 55%, rgba(255,215,0,0.8) 70%, rgba(255,255,255,0) 80%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            animationDuration: animationDuration,
          }}>
          <div className="flex flex-row items-center justify-center gap-2">
            {iconMap[text] && <span className="text-lg">{iconMap[text]}</span>}
            <span className={textClass}>{text}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ShinyText;
