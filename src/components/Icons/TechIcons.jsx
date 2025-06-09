import { FaReact, FaHtml5, FaGithub, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiFigma } from "react-icons/si";
import TooltipWrapper from "./../TooltipWrapper";

const TechIcons = {
  react: function ReactIcon() {
    return (
      <TooltipWrapper text="React">
        <FaReact />
      </TooltipWrapper>
    );
  },
  html5: function Html5Icon() {
    return (
      <TooltipWrapper text="HTML5">
        <FaHtml5 />
      </TooltipWrapper>
    );
  },
  github: function GitHubIcon() {
    return (
      <TooltipWrapper text="GitHub">
        <FaGithub />
      </TooltipWrapper>
    );
  },
  vscode: function VSCodeIcon() {
    return (
      <TooltipWrapper text="Visual Studio Code">
        <FaCode />
      </TooltipWrapper>
    );
  },
  javascript: function JavaScriptIcon() {
    return (
      <TooltipWrapper text="JavaScript">
        <SiJavascript />
      </TooltipWrapper>
    );
  },
  tailwind: function TailwindIcon() {
    return (
      <TooltipWrapper text="Tailwind CSS">
        <SiTailwindcss />
      </TooltipWrapper>
    );
  },
  vite: function ViteIcon() {
    return (
      <TooltipWrapper text="Vite">
        <SiVite />
      </TooltipWrapper>
    );
  },
  figma: function FigmaIcon() {
    return (
      <TooltipWrapper text="Figma">
        <SiFigma />
      </TooltipWrapper>
    );
  },
};

export default TechIcons;
