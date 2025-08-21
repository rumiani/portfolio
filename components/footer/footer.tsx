"use client"
import Link from "next/link"
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ThemeToggle from "./themeToggle/themeToggle";
import { navItems } from "@/utils/data/navItems";
import SocialLinks from "./socialLinks/socialLinks";


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
            <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-center gap-2 lg:gap-3">
                <div className="flex justify-between gap-8 w-52">
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
                <div
                >
                    <SocialLinks />
                </div>
            </div>
            <div className="w-fit mx-auto my-2">
                <p className="text-sm text-center text-muted-foreground">
                    © {year ?? ""} {tFooter("name")}. {tFooter("copyright")}
                </p>
            </div>
        </footer>
    )
}
