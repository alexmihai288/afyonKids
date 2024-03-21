import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";

const atma = Atma({ subsets: ["latin"], weight: "700" });

const page = ({ params }: { params: { branchName: string } }) => {
  return (
    <Container>
      <div className="flex items-center justify-center gap-5">
        <IoIosPin className="text-6xl text-primaryRed" />
        <div>
          <p className="text-4xl text-[#70747f]">Address</p>
          <p className="text-xl text-[#1b0238] font-bold mt-2.5">
            Mareşal Fevzi Çakmak Mah. 447 St. No:17 - Merkez/AFYON
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-20">
        <div className="">
          <p className={cn("text-[#2b3c6b] text-4xl", atma.className)}>
            My English
          </p>{" "}
          <p
            className={cn(
              "text-[#2b3c6b] text-5xl mt-5 max-w-md leading-tight",
              atma.className
            )}
          >
            My Second Native English
          </p>
          <div
            className={cn(
              "mt-10 text-4xl bg-[#2c4073] text-white p-5 rounded-full",
              atma.className
            )}
          >
            <span className="text-[#f6d72e]">A</span>
            <span className="text-[#e6252b]">K</span>
            <span className="text-[#2195d2]">D</span>{" "}
            <span className="text-[#a1c643]">K</span>
            <span className="text-[#f6d72e]">i</span>
            <span className="text-[#e6252b]">d</span>
            <span className="text-[#2195d2]">s</span> / Afyon Mareshal
          </div>
        </div>
        <Image
          src="/branch1.png"
          width={550}
          height={550}
          alt="branch-slider"
        />
      </div>

      <Image src="/curly.svg" alt="curly arrow" width={100} height={100} />
    </Container>
  );
};

export default page;
