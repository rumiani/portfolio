import ContactForm from "@/components/contact-page/contactForm/contactForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage")
  return {
    title: t('metaData.title'),
    description: t('metaData.description'),
  }
}
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
