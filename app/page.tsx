"use client";
import { Container } from "@/components/Container";
import { Navbar } from "../components/Navbar";
import { Atma } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

const atma = Atma({ subsets: ["latin"], weight: "700" });

export default function Home() {
  useEffect(() => {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.type = "text/javascript";
    googleTranslateScript.async = true;
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    document.body.appendChild(googleTranslateScript);

    return () => {
      document.body.removeChild(googleTranslateScript);
    };
  }, []);
  return (
    <main className="relative z-20">
      <video
        src="/main-video.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[100vh] brightness-75"
      ></video>
      <div className="h-full min-h-[90vh] md:h-[60vh] max-h-[100vh]  absolute top-0 left-0 right-0 p-2 sm:px-5 sm:py-2.5 md:px-10 md:py-5 z-50">
        <Container>
          <Navbar whereClause="main" />
        </Container>
        <Container className="absolute left-0 right-0 top-0 flex items-center h-full w-full">
          <p
            className={cn(
              "text-6xl text-white max-w-[550px] break-words mt-20",
              atma.className
            )}
          >
            English is My Second Native Language
          </p>
        </Container>
      </div>

      <Container className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-56 rotate-[30deg] bg-gradient-to-tr from-white to-primaryRed opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex items-center justify-between mt-20">
          <div className="p-5 rounded-md shadow-lg bg-[#f1e7ff]">
            <h1 className="font-bold text-2xl">Mareşal AKD kids</h1>
            <div className="flex items-center gap-2.5 mt-2.5">
              <MdLocationPin className="text-primaryRed" />
              <p>Mareşal Fevzi Çakmak Mah. 447 Sk. No:17 - Merkez/AFYON</p>
            </div>
            <Image
              src="/school-logo.jpg"
              width={500}
              height={500}
              alt="school-image"
              className="rounded-sm mt-5"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
