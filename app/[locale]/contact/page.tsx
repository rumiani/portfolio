import ContactForm from "@/components/contact-page/contactForm/contactForm";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Rumiani | Contact",
  description: "Contact me for businness inquiries.",
};
export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <div className="">
      <main className="flex flex-col items-center sm:items-start p-4">
        <h1 className=" font-bold mx-auto">{t('title')}</h1>
        <ContactForm/>
      </main>
    </div>
  );
}
