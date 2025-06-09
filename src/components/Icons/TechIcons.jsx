// src/components/Icons/TechIcons.jsx
import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaJsSquare,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import TooltipWrapper from "./../TooltipWrapper";

const iconStyle = "w-6 h-6";

const TechIcons = {
  react: () => (
    <TooltipWrapper text="React">
      <FaReact className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  html5: () => (
    <TooltipWrapper text="HTML5">
      <FaHtml5 className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  github: () => (
    <TooltipWrapper text="GitHub">
      <FaGithub className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  vscode: () => (
    <TooltipWrapper text="Visual Studio Code">
      <VscCode className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  javascript: () => (
    <TooltipWrapper text="JavaScript">
      <FaJsSquare className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  tailwind: () => (
    <TooltipWrapper text="Tailwind CSS">
      <SiTailwindcss className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  vite: () => (
    <TooltipWrapper text="Vite">
      <SiVite className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  figma: () => (
    <TooltipWrapper text="Figma">
      <FaFigma className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
};

export default TechIcons;
