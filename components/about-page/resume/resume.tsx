"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Resume() {
    const downloadUrl =
        "https://docs.google.com/document/d/e/2PACX-1vS_cyJy3MVvl5cy4jEQJGivSc59a59oC7Lmi_-y_jkJDY76CGdcnPUpW-FHb78pEelhr23ge9awk5ze/pub"  

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold">Resume</h1>
            <div className="w-full max-w-4xl aspect-[8.5/11] rounded-2xl shadow-lg overflow-hidden">
                <iframe
                    src="https://docs.google.com/document/d/e/2PACX-1vS_cyJy3MVvl5cy4jEQJGivSc59a59oC7Lmi_-y_jkJDY76CGdcnPUpW-FHb78pEelhr23ge9awk5ze/pub?embedded=true"
                    className="w-full max-w-4xl h-full border-0"
                />
            </div>
            <Button
                asChild
                className="mt-4 rounded-full px-6 py-2 text-sm font-medium shadow-md"
            >
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                </a>
            </Button>
        </div>
    );
}
