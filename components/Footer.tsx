import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import React from "react";
import { Container } from "./Container";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
const atma = Atma({ subsets: ["latin"], weight: "700" });

export const Footer = () => {
  return (
    <div className="mt-10 py-10 flex items-center justify-between bg-[#121112] text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
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
                href={"https://www.instagram.com/afyontriovistaakdkids/"}
                className="bg-primaryRed rounded-full flex items-center p-2.5"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="">
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
              <div className="">
                <p className="text-lg">Phone</p>
                <p className="text-sm">0850 80 80 453</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 mt-5">
              <IoIosMail className="text-sm text-primaryRed self-start" />
              <div className="">
                <p className="text-lg">Email</p>
                <p className="text-sm">info@akdkids.com</p>
              </div>
            </div>
          </div>{" "}
          <div className="">
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
                href={"https://www.instagram.com/afyontriovistaakdkids/"}
                className="bg-primaryRed rounded-full flex items-center p-2.5"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
