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

export interface MembersSuccessResponse {
  id: string;
  email_address: string;
  unique_email_id: string;
  contact_id: string;
  full_name: string;
  web_id: number;
  email_type: string;
  status: string;
  unsubscribe_reason: string;
  consents_to_one_to_one_messaging: boolean;
  merge_fields: Record<string, any>;
  interests: Record<string, any>;
  ip_signup: string;
  timestamp_signup: string;
  ip_opt: string;
  timestamp_opt: string;
  member_rating: string;
  last_changed: string;
  language: string;
  vip: boolean;
  email_client: string;
  source: string;
  tags_count: number;
  list_id: string;
}

export type BlogPost = {
    id: string,
    title: string,
    date: string,
}