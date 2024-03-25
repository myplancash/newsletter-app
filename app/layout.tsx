import { metaData } from "@/constants";
import { Montserrat, Barlow } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Head from "next/head";

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
  variable: '--font-montserrat'
})

const barlow = Barlow({ 
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
  variable: '--font-lora'
});

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metaData.title ? <>{metaData.title}</> : null}</title>
        {metaData.description && <meta name="description" content={metaData.description} />}
      </Head>
      <body className={`${barlow.variable} font-sans antialiased dark:bg-slate-800`}>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
