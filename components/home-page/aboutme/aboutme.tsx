import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import AboutMeMotion from "./aboutMeMotion/aboutMeMotion";

export default function AboutMe() {
  const t = useTranslations("HomePage")

  return (
    <AboutMeMotion>
      <Card className="md:h-96 border border-base overflow-auto shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 lg:w-1/3 aspect-square group overflow-hidden">
            <Image
              src="/assets/rumiani.avif"
              alt="My Photo"
              fill
              className="object-cover transition duration-500 group-hover:brightness-110"
              priority
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <h2 className="text-white text-2xl font-bold">{t("name")}</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col mt-4 sm:mt-0">
            <CardHeader className="pb-0">
              <h2 className="text-3xl font-bold">{t("name")}</h2>
              <p className={` text-sm`}>
                {t("jobTitle")}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-2">
              <p className="leading-relaxed">
                {t("summary")}
              </p>
              <div>
                <h3 className="font-semibold">{t("technologiesTitle")}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "docker", "git"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-xs px-1 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="mt-auto flex flex-row gap-4">
                <Button asChild size="lg" className="shadow-md">
                  <Link href="/resume">
                    {t("learnMoreAboutMe")} →
                  </Link>
                </Button>
                <Button asChild size="lg" className="rainbow-border shadow-md">
                  <Link href="/contact">
                    <span className="btn-inner">
                      {t("contactMe")} →
                    </span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </AboutMeMotion>
  );
}
