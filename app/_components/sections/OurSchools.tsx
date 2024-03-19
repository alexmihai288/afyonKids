import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";
const atma = Atma({ subsets: ["latin"], weight: "700" });

export const OurSchools = () => {
  return (
    <>
      <p
        className={cn(
          "text-2xl max-w-[550px] break-words mt-20 border-b-2 border-primaryRed w-fit",
          atma.className
        )}
      >
        Our Schools In Afyon
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-10">
        {" "}
        <div className="p-5 rounded-md shadow-lg bg-[#f1e7ff] hover:scale-105 transition-transform">
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
            className="rounded-sm mt-5 w-full"
          />
          <Link
            href="/branches/1"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#23cc88] hover:bg-[#157f54] mt-10"
            )}
          >
            View more{" "}
          </Link>
        </div>
        <div className="p-5 rounded-md shadow-lg bg-[#f1e7ff] hover:scale-105 transition-transform">
          <h1 className="font-bold text-2xl">Uydukent AKD kids</h1>
          <div className="flex items-center gap-2.5 mt-2.5">
            <MdLocationPin className="text-primaryRed" />
            <p>Mareşal Fevzi Çakmak Mah. 447 Sk. No:17 - Merkez/AFYON</p>
          </div>
          <Image
            src="/school-logo.jpg"
            width={500}
            height={500}
            alt="school-image"
            className="rounded-sm mt-5 w-full"
          />
          <Link
            href="/branches/1"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#23cc88] hover:bg-[#157f54] mt-10"
            )}
          >
            View more{" "}
          </Link>
        </div>
        <div className="p-5 rounded-md shadow-lg bg-[#f1e7ff] hover:scale-105 transition-transform">
          <h1 className="font-bold text-2xl">Erhmen AKD kids</h1>
          <div className="flex items-center gap-2.5 mt-2.5">
            <MdLocationPin className="text-primaryRed" />
            <p>Mareşal Fevzi Çakmak Mah. 447 Sk. No:17 - Merkez/AFYON</p>
          </div>
          <Image
            src="/school-logo.jpg"
            width={500}
            height={500}
            alt="school-image"
            className="rounded-sm mt-5 w-full"
          />
          <Link
            href="/branches/1"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-[#23cc88] hover:bg-[#157f54] mt-10"
            )}
          >
            View more{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
