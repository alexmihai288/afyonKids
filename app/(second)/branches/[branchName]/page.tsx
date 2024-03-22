import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

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
            <span className="text-[#2195d2]">s</span> / Afyon{" "}
            {params.branchName === "1"
              ? "Mareşal"
              : params.branchName === "2"
              ? "Uydukent"
              : "Erhmen"}
          </div>
        </div>
        <Image
          src="/branch1.png"
          width={550}
          height={550}
          alt="branch-slider"
        />
      </div>

      <Image
        src="/curly.svg"
        alt="curly arrow"
        width={100}
        height={100}
        className="mx-auto"
      />

      <div className="mt-20 flex items-center">
        <div className="space-y-5">
          <div className={cn(atma.className, "flex items-center gap-5")}>
            <FaCheckCircle className="text-[#fc477e] text-2xl" />
            <p>European Language Portfolio</p>
          </div>
          <div className={cn(atma.className, "flex items-center gap-5")}>
            <FaCheckCircle className="text-[#b250fe] text-2xl" />
            <p>Individual Program</p>
          </div>
          <div className={cn(atma.className, "flex items-center gap-5")}>
            <FaCheckCircle className="text-[#1ab9ff] text-2xl" />
            <p>Enriched Academic Enviroment</p>
          </div>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default page;
