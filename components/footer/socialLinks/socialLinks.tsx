import { socialLinks } from "@/utils/data/socials"
import Link from "next/link"

export default function SocialLinks() {
    return <div className="flex justify-between gap-8 w-52"
    >
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
}