"use client";

import { Spinner } from "@/components/general/Spinner";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Resume() {
    const downloadUrl =
        "https://docs.google.com/document/d/1QO7eUzZ5abFjS4zvpmj5M1-nAlSKueuYJF0uKQhKkMg/export?format=pdf";

    const { resolvedTheme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const t = useTranslations('AboutPage');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-full max-w-4xl h-[80vh] bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />;
    }
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold">{t("resume")}</h1>

            <div className="relative w-full max-w-4xl aspect-[8.5/11] rounded-2xl shadow-lg overflow-hidden">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <Spinner diameter={40} border={3} />
                    </div>
                )}

                <iframe
                    src="https://docs.google.com/document/d/e/2PACX-1vS_cyJy3MVvl5cy4jEQJGivSc59a59oC7Lmi_-y_jkJDY76CGdcnPUpW-FHb78pEelhr23ge9awk5ze/pub?embedded=true"
                    className={`w-full h-full border-0 ${resolvedTheme === "dark"
                        && "bg-gray-900 [filter:invert(1)_hue-rotate(180deg)]"
                        }`}
                    onLoad={() => setLoading(false)}
                />
            </div>

            <Button
                asChild
                variant="outline"
                className="mt-4 rounded-full px-6 py-2 text-sm font-medium shadow-md"
            >
                <a href={downloadUrl} target="_blank">
                    <Download className="w-4 h-4 mr-2" />
                    {t("download")}
                </a>
            </Button>
        </div>
    );
}
