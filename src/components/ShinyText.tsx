import React from "react";

interface ShinyTextProps {
  texts: string[]; // accept multiple strings
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  texts,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className="flex flex-wrap gap-3">
      {texts.map((text, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg border border-[#ffffffa4] bg-transparent text-[#ffffffa4] bg-clip-text inline-block ${
            disabled ? "" : "animate-shine"
          } ${className}`}
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 55%, rgba(255,215,0,0.8) 70%, rgba(255,255,255,0) 80%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            animationDuration: animationDuration,
          }}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
