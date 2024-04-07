import NewsletterForm from "@/components/NewsletterForm";
import Socials from "@/components/Socials";
import Posts from "@/components/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <section className="text-white w-screen overflow-hidden h-full common-padding">
        <div className="screen-max-width">
          <div className="mb-12 w-full md:flex gap-1 items-end justify-between">
            <h1 id="title" className="section-heading">Join the VIP waitlist now for</h1>
            <h1 id="title" className="section-heading">Exclusive newsletter benefits!</h1>
        </div>
        </div>
      </section>
      <Posts />
      <NewsletterForm />
      <Socials />
    </>
  )
}
{/* <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Join the VIP waitlist now for</h1>
          <h2 id="title" className="section-heading">Exclusive newsletter benefits!</h2>


   <main className="flex bg-[#03040B] flex-col p-10 min-h-screen">
      <section className="mt-12 mb-12 mx-auto max-w-2xl w-full animate-fadeIn transition duration-200 ease-out">
        <h1 className="z-10 text-7xl font-bold mb-6 text-transparent duration-1000 bg-white cursor-default animate-titleFade whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate-fadeIn">Join the VIP waitlist now for</h1>
        <h1 className="z-10 text-7xl font-bold mb-6 text-transparent duration-1000 bg-white cursor-default animate-titleFade whitespace-nowrap bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 animate-fadeIn">
          Exclusive newsletter benefits!
        </h1>
      </section>

       */}