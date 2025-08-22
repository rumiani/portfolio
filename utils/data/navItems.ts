import { IconType } from "react-icons";
import {
  HiHome,
  HiOutlineHome,
  HiUser,
  HiOutlineUser,
  HiFolder,
  HiOutlineFolder,
  HiMail,
  HiOutlineMail,
} from "react-icons/hi";

type NavItem = {
  title: string;
  href: string;
  icon: IconType;        // Filled
  iconOutline: IconType; // Outline
};

export const navItems: NavItem[] = [
  { title: "home", href: "/", icon: HiHome, iconOutline: HiOutlineHome },
  { title: "resume", href: "/resume", icon: HiUser, iconOutline: HiOutlineUser },
  { title: "contact", href: "/contact", icon: HiMail, iconOutline: HiOutlineMail },
];
