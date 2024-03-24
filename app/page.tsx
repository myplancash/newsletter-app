import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main className="mx-auto bg-[#03040B] flex flex-col items-center justify-center p-8 md:p-24 min-h-screen">
      <div className="space-y-1 text-center">
        <h2 className="z-10 text-3xl font-bold text-transparent duration-100 bg-white cursor-default text-stroke animate-titleFade sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-fadeIn">
          Join the VIP waitlist now for
        </h2>
        <h1 className="z-10 text-4xl font-bold text-transparent duration-100 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-fadeIn">
          Exclusive newsletter benefits!
        </h1>
      </div>
      <Posts />
      <NewsletterForm />
      <Socials />
    </main>
  );
}
