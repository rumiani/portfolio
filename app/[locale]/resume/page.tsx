import Resume from "@/components/about-page/resume/resume";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ResumePage")
  return {
    title: t('metaData.title'),
    description: t('metaData.description'),
  }
}
export default function About() {
  return (
    <div >
      <main >
        <Resume/>
      </main>
    </div>
  );
}
