import HomeMain from "@/components/homeMain/homeMain";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="font-sans">
      <main className="w-full">
        <section className="p-2 md:p-4">
          <HomeMain />
        </section>
      </main>
    </div>
  );
}
