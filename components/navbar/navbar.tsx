// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { List, X } from "lucide-react";
import Image from "next/image";
import { navItems } from "../data/navItems";
import LanguageSwitcher from "./langChange/LangChange";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full border-b border-gray-200 bg-white px-4 py-3 md:flex md:justify-between md:items-center">
            <div className="flex justify-between items-center">
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
                        <SheetContent side="right" className="w-64">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-bold p-2">Menu</span>
                                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                                    {/* <X /> */}
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                                    {/* <X /> */}
                                </Button>
                            </div>
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-700 hover:text-gray-900 p-2 hover:shadow shadow-2xl"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-gray-900"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav >
    );
}
