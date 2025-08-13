"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguageStore();
    const router = useRouter();
    const pathname = usePathname();

    function changeLang(lang: "fa" | "en") {
        setLanguage(lang);
        router.replace(pathname, { locale: lang });
    }

    return (
        <div className="flex gap-2">
            {language === "fa" ?
                <button
                    className={`px-3 py-1 rounded `}
                    onClick={() => changeLang("en")}
                >
                    English
                </button> :
                <button
                    className={`px-3 py-1 rounded `}
                    onClick={() => changeLang("fa")}
                >
                    فارسی
                </button>
            }
        </div>
    );
}
