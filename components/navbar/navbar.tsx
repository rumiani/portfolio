"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { List } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./langChange/LangChange";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { navItems } from "@/utils/data/navItems";
import { useTheme } from "next-themes";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();
    const {theme} = useTheme()
    const pathWithoutLang = "/" + pathName.split("/").slice(2).join("/");
    const t = useTranslations("Navbar");

    const translatedNavItems = navItems.map(item => ({
        ...item,
        title: t(item.title),
    }));

    return (
        <nav className="w-full border-b border-base px-4 py-3 md:flex md:justify-between md:items-center">
            <div className="flex justify-between items-center ">
                <div className="flex flex-row ">
                    <Link href="/" className="text-xl font-bold">
                        <Image src="/logo.png" alt="Logo" width={32} height={32} className="round rounded-full" />
                    </Link>
                    <LanguageSwitcher />
                </div>
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <List />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className={`${theme === "light"? "bg-white":"bg-gray-900" } w-64`}>
                            <div className="flex justify-between items-center mb-4">
                                <SheetTitle className="text-lg font-bold p-2">
                                    {t("menu")}
                                </SheetTitle>
                                <button></button>
                            </div>
                            <div className="flex flex-col gap-2">
                                {translatedNavItems.map((item) => {
                                    const isActive = pathWithoutLang === item.href;
                                    return <Link
                                        key={item.href}
                                        href={item.href}
                                        className="p-2 hover:shadow shadow-2xl flex flex-row gap-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        {isActive ?
                                            <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} /> :
                                            <item.iconOutline className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                                        }
                                        {item.title}
                                    </Link>
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
                {translatedNavItems.map((item) => {
                    const isActive = pathWithoutLang === item.href;
                    return <Link
                        key={item.href}
                        href={item.href}
                        className={`${isActive ? "font-bold" : ""} flex flex-row gap-2 w-24  p-2 hover:shadow `}
                    >
                        {isActive ?
                            <item.icon className="w-5 h-5 shrink-0" strokeWidth={1.5} /> :
                            <item.iconOutline className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                        }
                        {item.title}
                    </Link>
                })
                }
            </div>
        </nav >
    );
}
