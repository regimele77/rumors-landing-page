"use client";

import { useEffect } from "react";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-white font-sans text-[#1B1F4A] antialiased">
        <main id="content" className="mx-auto flex min-h-full w-full max-w-[90rem] flex-col justify-center px-6 py-24 md:px-10">
          <h1 className="display">Error</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6B6F80] md:text-xl">
            Something broke on our side. Try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-10 inline-flex w-fit border border-[#1B1F4A] px-6 py-3"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
