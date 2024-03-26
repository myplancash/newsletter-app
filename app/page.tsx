import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Posts from "@/components/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-[#03040B] flex flex-col items-center justify-center p-10 min-h-screen">
      <div className="space-y-1">
        <h1 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-titleFade sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Join the VIP waitlist now for
        </h1>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl animate-titleFade md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate-fadeIn">
          Exclusive newsletter benefits!
        </h1>
      </div>
      <Posts />
      <NewsletterForm />
      <Socials />
    </main>
  );
}
