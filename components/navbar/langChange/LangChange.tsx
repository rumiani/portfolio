'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function Toggle() {
    const router = useRouter();
    const pathname = usePathname()
    const currentPath = pathname.split("/")[1];
    const nextLocale = currentPath === "fa" ? "en" : "fa";
    const newPath = pathname.replace(currentPath, nextLocale);

    return (
        <button onClick={() => router.push(`${newPath}`)}
            className="`px-3 py-1 text-sm rounded"
        >
            {nextLocale === "en" ? "EN" : "فارسی"}
        </button>
    );
}
