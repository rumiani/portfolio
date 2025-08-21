"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const t = useTranslations("HomePage")
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="lg:h-96 border border-base overflow-auto shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 lg:w-1/3 aspect-square group overflow-hidden">
            <Image
              src="/assets/rumiani.png"
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

            <CardContent className="flex flex-col gap-4 pt-4">
              <p className="leading-relaxed">
                {t("summary")}
              </p>

              <div>
                <h4 className="font-semibold">{t("technologiesTitle")}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "docker", "git"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        
                        className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-auto flex flex-row gap-4">
                <Button asChild variant="outline" size="lg" className="rounded-full shadow-md">
                  <Link href="/about">
                    {t("learnMoreAboutMe")} →
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full shadow-md  animate-bounce">
                  <Link href="/contact">
                    {t("contactMe")} →
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
