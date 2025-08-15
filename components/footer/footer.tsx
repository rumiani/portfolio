"use client"
import Link from "next/link"
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { navItems } from "../data/navItems";
import { useTranslations } from "next-intl";
import { socialLinks } from "../data/socials";


export function Footer() {
    const t = useTranslations("Navbar");
    const tAbout = useTranslations("AboutPage");
    const tGeneral = useTranslations("General");
    const translatedNavItems = navItems.map(item => ({
        ...item,
        title: t(item.title),
    }));
    return (
        <footer className="w-full border-t mt-8 p-4">
            <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-2 md:gap-3">
                <div className="flex gap-8 w-fit">
                    {translatedNavItems.map((item) => {
                        return <Link
                            href={item.href}
                            key={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                        >
                            {item.title}
                        </Link>
                    })}
                </div>
                <div className="flex justify-center gap-8 mx-auto w-fit">
                    {socialLinks.map((item) => {
                        return <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.name}
                            className="hover:text-foreground text-muted-foreground"
                        >
                            <item.icon className="h-8 w-8" />
                        </Link>
                    })}
                </div>
                <div className="w-fit">
                    <p dir="auto" className="text-sm text-center text-muted-foreground">
                        © {new Date().getFullYear()} {tAbout("name")}. {tGeneral("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
