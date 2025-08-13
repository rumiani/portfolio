"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
export default function CatchAllPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-md text-center shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              {t("title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">{t("description")}</p>
            <Button asChild size="lg">
              <Link href="/">{t("go_home")}</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
