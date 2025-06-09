// src/components/Icons/SocialIcons.jsx
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import TooltipWrapper from "./../TooltipWrapper";

const iconStyle =
  "text-white text-2xl hover:scale-125 hover:text-green-bright transition-transform";

const SocialIcons = {
  linkedin: () => (
    <TooltipWrapper text="LinkedIn">
      <FaLinkedin className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  instagram: () => (
    <TooltipWrapper text="Instagram">
      <FaInstagram className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  facebook: () => (
    <TooltipWrapper text="Facebook">
      <FaFacebook className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  twitter: () => (
    <TooltipWrapper text="Twitter">
      <FaTwitter className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
  github: () => (
    <TooltipWrapper text="GitHub">
      <FaGithub className={iconStyle} aria-hidden="true" />
    </TooltipWrapper>
  ),
};

export default SocialIcons;
