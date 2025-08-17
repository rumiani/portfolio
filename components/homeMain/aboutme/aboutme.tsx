"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="overflow-hidden border border-gray-200 shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* IMAGE SECTION */}
          <div className="relative w-full lg:w-1/3 aspect-square group overflow-hidden">
            <Image
              src="/assets/rumiani.png" // put your image path here
              alt="My Photo"
              fill
              className="object-cover transition duration-500 group-hover:brightness-110"
              priority
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <h2 className="text-white text-2xl font-bold">Maziar Rumiani</h2>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <CardHeader className="pb-0">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-gray-500 text-sm">Software Engineer • Problem Solver • Creator</p>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 pt-4">
              <p className="text-gray-700 leading-relaxed">
                I’m a passionate developer who loves building clean, scalable,
                and impactful applications. With a strong background in web
                technologies, I enjoy turning complex problems into elegant
                solutions.
              </p>

              <div>
                <h4 className="font-semibold">Technologies I use:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "docker","git"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild size="lg" className="rounded-full shadow-md">
                  <a href="/about">
                    Learn More About Me →
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
