"use client"
import Link from "next/link"
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { navItems } from "../data/navItems";
import { useTranslations } from "next-intl";


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
                    <Link
                        href="https://github.com/rumiani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground text-muted-foreground"
                    >
                        <FaGithubSquare className="h-8 w-8" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/rumiani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground text-muted-foreground"
                    >
                        <FaLinkedin className="h-8 w-8" />
                    </Link>
                    <Link
                        href="https://x.com/maziarrumiani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground text-muted-foreground"
                    >
                        <FaTwitterSquare className="h-8 w-8" />
                    </Link>
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
