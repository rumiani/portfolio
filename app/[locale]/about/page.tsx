import Resume from "@/components/about-page/resume/resume";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('AboutPage');

  return (
    <div >
      <main >
        <Resume/>
      </main>
    </div>
  );
}
