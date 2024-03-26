import { metaData } from "@/constants";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Head from "next/head";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['500', '700'],
  variable: '--font-quicksand'
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
      <body className={`${quicksand.variable} font-sans antialiased dark:bg-slate-800`}>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
