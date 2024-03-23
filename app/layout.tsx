import { metaData } from "@/constants";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
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
      <head>
        {/* Include meta tags from the metadata */}
        <title>{metaData.title ? <>{metaData.title}</> : null}</title>
        {metaData.description && <meta name="description" content={metaData.description} />}
        {/* Include other meta tags as needed */}
      </head>
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
