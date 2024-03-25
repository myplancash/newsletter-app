import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Posts from "@/components/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <main className="mx-auto bg-[#03040B] flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 min-h-screen">
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent duration-100 bg-white cursor-default text-stroke animate-titleFade whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate-fadeIn">
          Join the VIP waitlist now for
        </h2>
        <h1 className="z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent duration-100 bg-white cursor-default whitespace-nowrap bg-clip-text animate-titleFade bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate-fadeIn">
          Exclusive newsletter benefits!
        </h1>
      </div>
      <div className="mt-8 md:mt-12">
        <Posts />
      </div>
      <div className="mt-8 md:mt-12">
        <NewsletterForm />
      </div>
      <div className="mt-8 md:mt-12">
        <Socials />
      </div>
    </main>
    </div>

  );
}
