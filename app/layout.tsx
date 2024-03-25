import { metaData } from "@/constants";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Head from "next/head";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
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
      <body className={`${IBMPlex.variable} font-sans antialiased dark:bg-slate-800`}>
        {children} 
        <Footer/>
      </body>
    </html>
  );
}
