import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import TooltipWrapper from "./../TooltipWrapper";

const iconStyle = "text-white text-2xl hover:scale-110 transition-transform";

const SocialIcons = {
  linkedin: () => (
    <TooltipWrapper text="LinkedIn">
      <FaLinkedin className={iconStyle} />
    </TooltipWrapper>
  ),
  instagram: () => (
    <TooltipWrapper text="Instagram">
      <FaInstagram className={iconStyle} />
    </TooltipWrapper>
  ),
  facebook: () => (
    <TooltipWrapper text="Facebook">
      <FaFacebook className={iconStyle} />
    </TooltipWrapper>
  ),
  twitter: () => (
    <TooltipWrapper text="Twitter">
      <FaTwitter className={iconStyle} />
    </TooltipWrapper>
  ),
  github: () => (
    <TooltipWrapper text="GitHub">
      <FaGithub className={iconStyle} />
    </TooltipWrapper>
  ),
};

export default SocialIcons;
