import {motion, useScroll, useTransform, type MotionValue} from "motion/react";
import {useRef} from "react";
import ProjectCard from "./ProjectCard";

export interface Project {
  image: string;
  alt?: string;
  title: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  imageClassName?: string;
}

interface ProjectsStackProps {
  projects: Project[];
  /** Sticky top offset in pixels for the first card. Defaults to 90. */
  baseTopPx?: number;
  /** Each subsequent card sticks this many px lower than the previous, creating the stacked-edge peek. */
  topStepPx?: number;
}

/**
 * Vertical stack of project cards with the popular "Apple-style" sticky
 * stacking scroll effect:
 *
 * - All cards share a single parent so they can all be sticky simultaneously.
 * - Each card sticks slightly lower than the previous one, so the top edge
 *   of older cards peeks out above the active card (visible card stack).
 * - Older cards scale down gently as new cards slide over them, giving
 *   a 3D depth feel without overdoing it.
 *
 * The intended UX: as the user scrolls through this section, each
 * new project card slides up over the previous one — exactly what was
 * asked for ("one after another project card will come on the top").
 */
const ProjectsStack: React.FC<ProjectsStackProps> = ({
  projects,
  baseTopPx = 90,
  topStepPx = 26,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the entire stack.
  // 0 → section's top reaches viewport top (first card has just stuck).
  // 1 → section's bottom reaches viewport bottom (the stack is fully assembled).
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative pb-[0vh]">
      {projects.map((project, i) => (
        <StackEntry
          key={project.title}
          project={project}
          index={i}
          total={projects.length}
          scrollProgress={scrollYProgress}
          baseTopPx={baseTopPx}
          topStepPx={topStepPx}
        />
      ))}
    </div>
  );
};

interface StackEntryProps {
  project: Project;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
  baseTopPx: number;
  topStepPx: number;
}

const StackEntry: React.FC<StackEntryProps> = ({
  project,
  index,
  total,
  scrollProgress,
  baseTopPx,
  topStepPx,
}) => {
  // Each card scales from 1 down to a smaller value, but ONLY after the
  // next card starts arriving. The last card never scales.
  // Card i shrinks during scroll progress [(i+1)/total, 1].
  const targetScale = 1 - (total - index - 1) * 0.05;
  const startProgress = (index + 1) / total;

  const scale = useTransform(
    scrollProgress,
    [startProgress, 1],
    [1, targetScale],
  );

  // Each card sticks slightly lower than the previous → produces the
  // visible "stacked edge" of older cards behind the active one.
  const stickyTop = baseTopPx + index * topStepPx;

  return (
    <div
      className="sticky py-[5vh] sm:py-[7vh]"
      style={{top: `${stickyTop}px`}}>
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}>
        <ProjectCard {...project} />
      </motion.div>
    </div>
  );
};

export default ProjectsStack;
