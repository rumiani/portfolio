import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import AnimatedLayout from '../../components/providers/animated-layout';
import "@/app/globals.css";
import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { ToastContainer } from 'react-toastify';
import ThemedLayout from '../../components/providers/themed-layout';
import { Inter } from "next/font/google";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Rumiani',
  icons: {
    icon: '/favicon.ico',
  }
}


const inter = Inter({
  subsets: ["latin"],
  display: "swap",   // important
});
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} suppressHydrationWarning className={inter.className}
      data-scroll-behavior="smooth">
      <body className='max-w-7xl min-h-screen mx-auto'>
        <ThemedLayout>
          <NextIntlClientProvider>
            <div className='fixed w-full top-0 bg-white dark:bg-gray-900 z-10'>
              <Navbar />
            </div>
            <div className='w-full mt-20 p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden'>
              <AnimatedLayout>
                {children}
              </AnimatedLayout>
            </div>
            <Footer />
            <ToastContainer />
          </NextIntlClientProvider>
        </ThemedLayout>
      </body>
    </html>
  );
}
