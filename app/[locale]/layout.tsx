import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import AnimatedLayout from './animated-layout';
import "@/app/globals.css";
import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { ToastContainer } from 'react-toastify';
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import ThemedLayout from './themed-layout';

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
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rumiani</title>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{const t=localStorage.getItem('theme');const dark=t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',!!dark);document.documentElement.style.colorScheme=dark?'dark':'light';}catch(e){} })()` }} />
      </Head>
      <body className='max-w-7xl min-h-screen mx-auto'>
        <ThemedLayout>
          <AnimatedLayout>
            <NextIntlClientProvider>
              <Navbar />
              <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
                {children}
              </div>
              <Footer />
              <ToastContainer />
            </NextIntlClientProvider>
          </AnimatedLayout>
        </ThemedLayout>
      </body>
    </html>
  );
}
