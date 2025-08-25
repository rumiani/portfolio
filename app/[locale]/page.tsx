import HomePage from "@/components/home-page/homePage";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomePage")
  return {
    title: t('metaData.title'),
    description: t('metaData.description'),
  }
}
export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-full">
        <HomePage />
      </main>
    </div>
  );
}
