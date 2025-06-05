import { FaReact, FaHtml5, FaGithub, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";
import TooltipWrapper from "./../TooltipWrapper";

const TechIcons = {
  react: () => (
    <TooltipWrapper text="React">
      <FaReact />
    </TooltipWrapper>
  ),
  html5: () => (
    <TooltipWrapper text="HTML5">
      <FaHtml5 />
    </TooltipWrapper>
  ),
  github: () => (
    <TooltipWrapper text="GitHub">
      <FaGithub />
    </TooltipWrapper>
  ),
  vscode: () => (
    <TooltipWrapper text="Visual Studio Code">
      <FaCode />
    </TooltipWrapper>
  ),
  javascript: () => (
    <TooltipWrapper text="JavaScript">
      <SiJavascript />
    </TooltipWrapper>
  ),
  tailwind: () => (
    <TooltipWrapper text="Tailwind CSS">
      <SiTailwindcss />
    </TooltipWrapper>
  ),
  vite: () => (
    <TooltipWrapper text="Vite">
      <SiVite />
    </TooltipWrapper>
  ),
};

export default TechIcons;
