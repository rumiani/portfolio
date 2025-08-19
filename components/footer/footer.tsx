"use client"
import Link from "next/link"
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ThemeToggle from "./themeToggle/themeToggle";
import { socialLinks } from "@/utils/data/socials";
import { navItems } from "@/utils/data/navItems";


export function Footer() {
    const [year, setYear] = useState<number | null>(null)
    const t = useTranslations("Navbar");
    const tFooter = useTranslations("Footer");
    const translatedNavItems = navItems.map(item => ({
        ...item,
        title: t(item.title),
    }));


    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
    return (
        <footer className="relative w-full border-t mt-8 p-4">
            <div className="fixed bottom-16 right-4"><ThemeToggle /></div>
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
                    <p className="text-sm text-center text-muted-foreground">
                        © {year ?? ""} {tFooter("name")}. {tFooter("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
