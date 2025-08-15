import { IconType } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type NavItem = {
    name: string;
    href: string;
    icon: IconType;
};

export const socialLinks: NavItem[] = [
    { name: "X", href: "https://x.com/maziarrumiani", icon: FaXTwitter },
    { name: "github", href: "https://github.com/rumiani", icon: FaGithubSquare },
    { name: "linkedin", href: "https://linkedin.com/in/rumiani", icon: FaLinkedin },
];