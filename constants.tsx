import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/myplancash",
    handle: "myplancash",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sergioestebantorres/",
    handle: "sergioestebantorres",
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/keeprules",
    handle: "@keeprules",
  },
];

const title = "Sergio Esteban Torres";
const description =
  "Highly skilled Full-Stack Software Engineer 🧑🏻‍💻 adept at harnessing the latest advancements in technology to create groundbreaking solutions.";
const image = "/assets/images/profile.png"

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://portfolio-website-ruddy-beta.vercel.app",
    siteName: "Sergio Esteban Torres",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@keeprules",
  },
};