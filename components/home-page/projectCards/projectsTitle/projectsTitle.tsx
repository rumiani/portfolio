import { useTranslations } from 'next-intl'
import React from 'react'
export default function ProjectsTitle() {
    const t = useTranslations("Projects")
    return (
        <div>
            <h2 className="text-4xl font-bold">{t("title")}</h2>
        </div>
    )
}
