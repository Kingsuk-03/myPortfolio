import React from "react";
import type {ReactNode} from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    animation: `gradient-x ${animationSpeed}s linear infinite`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  } as React.CSSProperties;

  return (
    <div
      className={`relative mx-auto flex max-w-fit items-center justify-center font-medium ${className}`}>
      <div className="relative z-10 inline-block" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
