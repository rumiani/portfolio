import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import AnimatedLayout from './animated-layout';
import "@/app/globals.css";
import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { ToastContainer } from 'react-toastify';
import Head from "next/head";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rumiani</title>
      </Head>
      <body>
        <NextIntlClientProvider>
          <Navbar />
          <AnimatedLayout>
            <div className='min-h-screen'>
              {children}
            </div>
          </AnimatedLayout>
          <Footer />
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
