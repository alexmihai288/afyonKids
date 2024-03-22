import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";
import { IoIosPin } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsChatRightTextFill } from "react-icons/bs";
import { EducationModelnfo, EducationModels } from "@/constants";

const atma = Atma({ subsets: ["latin"], weight: "700" });

const page = ({ params }: { params: { branchName: string } }) => {
  const branch = EducationModelnfo[Number(params.branchName) - 1];

  return (
    <Container>
      <div className="flex items-center justify-center gap-5 mt-20">
        <IoIosPin className="text-6xl text-primaryRed" />
        <div>
          <p className="text-4xl text-[#70747f]">Address</p>
          <p className="text-xl text-[#1b0238] font-bold mt-2.5">
            {branch.location}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-20">
        <div className="">
          <p
            className={cn(
              "text-[#2b3c6b] text-4xl lg:text-left text-center",
              atma.className
            )}
          >
            My English
          </p>{" "}
          <p
            className={cn(
              "text-[#2b3c6b] text-5xl mt-5 max-w-md leading-tight sm:max-w-full lg:text-left text-center",
              atma.className
            )}
          >
            My Second Native English
          </p>
          <div
            className={cn(
              "mt-10 text-4xl bg-[#2c4073] w-fit mx-auto lg:mx-0 text-white p-5 rounded-full text-center",
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
              : "Triovista"}
          </div>
        </div>
        <Image
          src="/branch1.png"
          width={550}
          height={550}
          alt="branch-slider"
          className="mt-10 lg:mt-0 mx-auto lg:mx-0"
        />
      </div>

      <Image
        src="/curly.svg"
        alt="curly arrow"
        width={100}
        height={100}
        className="mx-auto hidden md:block"
      />

      <div className="mt-20 flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="space-y-20 mx-auto lg:mx-0">
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
        <Image
          src="/curly.svg"
          alt="curly arrow"
          width={100}
          height={100}
          className="mx-auto md:hidden"
        />

        <div className="flex flex-col mx-auto lg:mx-0 gap-20">
          <div className="flex flex-col md:flex-row md:items-start gap-20">
            <div className="flex gap-5 self-start">
              <FaMapLocationDot className="text-6xl text-[#169d8d]" />
              <div className="">
                <p className={cn(atma.className, "text-2xl")}>Official</p>
                <p className="text-[#70747f] text-xl">
                  Afyon{" "}
                  {params.branchName === "1"
                    ? "Mareşal"
                    : params.branchName === "2"
                    ? "Uydukent"
                    : "Triovista"}
                </p>
              </div>
            </div>
            <div className="flex gap-5 self-start">
              <BsTelephoneOutboundFill className="text-6xl text-[#de769f]" />
              <div className="">
                <p className={cn(atma.className, "text-2xl")}>Telephone</p>
                <p className="text-[#70747f] text-xl">{branch.phoneNumber}</p>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col  md:flex-row md:items-start gap-20">
            <div className="flex gap-5 self-start">
              <MdLocationPin className="text-6xl text-[#ffb518]" />
              <div className="">
                <p className={cn(atma.className, "text-2xl")}>Address</p>
                <p className="text-[#70747f] text-xl max-w-[150px]">
                  {branch.location}
                </p>
              </div>
            </div>
            <div className="flex gap-5 self-start">
              <BsChatRightTextFill className="text-6xl text-[#fa6450]" />
              <div className="">
                <p className={cn(atma.className, "text-2xl")}>Email</p>
                <p className="text-[#70747f] text-xl">{branch.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
