// types.d.ts

// Import any existing types you might need
import { Image } from "your-image-library"; // Example import, adjust as necessary
// types.d.ts

import { Metadata as NextMetadata } from 'next';

interface CustomMetadata extends Omit<NextMetadata, 'canonical'> {
  canonical: string;
}

export { CustomMetadata };


// Define the Metadata interface
interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Image[]; // Adjust based on your image library and usage
    locale: string;
    type: string;
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-video-preview": number;
      "max-image-preview": string;
      "max-snippet": number;
    };
  };
  twitter: {
    title: string;
    description: string;
    card: string;
    images: string[]; // Adjust based on your image library and usage
    creator: string;
  };
  canonical: string; // New property for canonical URL
}

// Export the Metadata interface
export { Metadata };
