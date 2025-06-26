import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/doshuwouwouwo",
    icon: <FaGithub size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/firdaus-ramadhana-46b32b338/",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lhodoss/",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@dosh",
    icon: <SiTiktok size={24} />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 items-center justify-center mt-12 sm:justify-start">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="relative group text-gray-600 hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out " aria-label={link.name}>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap z-10">{link.name}</span>
          {link.icon}
        </a>
      ))}
    </div>
  );
}
