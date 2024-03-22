import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import React from "react";
import { Container } from "./Container";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { EducationModels } from "@/constants";
const atma = Atma({ subsets: ["latin"], weight: "700" });

export const Footer = () => {
  const removeSpacesAndConcatenate = (str: string) => {
    return str.replace(/\s+/g, "");
  };

  return (
    <div className="mt-10 py-10 flex items-center justify-between bg-[#121112] text-white">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col self-start gap-10 md:flex-row">
            <div className="self-start">
              <h1 className={cn(atma.className, "text-4xl")}>AKD KIDS</h1>
              <p className="my-5 max-w-sm">
                It is Turkey&apos;s largest chain of pre-school education
                institutions.
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href={"/"}
                  className="bg-primaryRed rounded-full flex items-center p-2.5"
                >
                  <TiSocialFacebook className="text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/afyonkarahisarakdkids/"}
                  className="bg-primaryRed rounded-full flex items-center p-2.5"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
              </div>
            </div>
            <div className="self-start">
              <h1
                className={cn(
                  atma.className,
                  "text-4xl",
                  "border-b-2 border-b-primaryRed w-1/2 whitespace-nowrap"
                )}
              >
                Contact Us
              </h1>
              <div className="flex items-center gap-2.5 mt-5">
                <FaPhoneAlt className="text-sm text-primaryRed self-start" />
                <Link href="tel:0850 80 80 453" className="">
                  <p className="text-lg">Phone</p>
                  <p className="text-sm">0850 80 80 453</p>
                </Link>
              </div>
              <div className="flex items-center gap-2.5 mt-5">
                <IoIosMail className="text-xl text-primaryRed self-start" />
                <Link href="mailto:info@akdkids.com" className="">
                  <p className="text-lg">Email</p>
                  <p className="text-sm">info@akdkids.com</p>
                </Link>
              </div>
            </div>{" "}
          </div>

          <div className="flex flex-col self-start gap-10 md:flex-row">
            <div className="self-start">
              <h1
                className={cn(
                  atma.className,
                  "text-4xl",
                  "border-b-2 border-b-primaryRed w-1/2 whitespace-nowrap"
                )}
              >
                Quick Menu
              </h1>
              <div className="flex flex-col gap-2.5 mt-5">
                {EducationModels.map((educationModel) => (
                  <Link
                    key={educationModel.title}
                    href={`/${removeSpacesAndConcatenate(
                      educationModel.title
                    )}`}
                    className="hover:text-primaryRed transition-colors flex items-center gap-2.5"
                  >
                    <LuDot className="text-xl" /> {educationModel.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="self-start">
              <h1
                className={cn(
                  atma.className,
                  "text-4xl",
                  "border-b-2 border-b-primaryRed w-1/2 whitespace-nowrap"
                )}
              >
                Branches
              </h1>
              <div className="flex flex-col gap-2.5 mt-5">
                <Link
                  href={"/branches/1"}
                  className="text-nowrap hover:text-primaryRed transition-colors flex items-center gap-2.5"
                >
                  <MdLocationPin /> Mareşal AKD kids
                </Link>
                <Link
                  href={"/branches/1"}
                  className="text-nowrap hover:text-primaryRed transition-colors flex items-center gap-2.5"
                >
                  <MdLocationPin /> Uydukent AKD kids
                </Link>
                <Link
                  href={"/branches/1"}
                  className="text-nowrap hover:text-primaryRed transition-colors flex items-center gap-2.5"
                >
                  <MdLocationPin /> Erhmen AKD kids
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
