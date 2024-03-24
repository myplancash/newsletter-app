import React from "react";

export default function Footer() {
  return (
    // flex justify-center items-center py-8
    <footer className="mx-auto bg-[#03040B] flex flex-col justify-center items-center py-8 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Sergio Esteban Torres. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}