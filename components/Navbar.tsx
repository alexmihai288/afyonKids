import Image from "next/image";
import React from "react";
import { BranchesMenu } from "../app/_components/BranchesMenu";
import { EducationModelMenu } from "../app/_components/EducationModelMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoMdMenu } from "react-icons/io";
import { OpenModal } from "./OpenModal";

export const Navbar = ({ whereClause }: { whereClause?: string }) => {
  return (
    <div
      className={cn(
        whereClause !== "main" && "p-5",
        "flex items-center justify-between w-full"
      )}
    >
      <Link href="/" className="z-50 w-fit">
        <Image src="/logo1.png" width={130} height={130} alt="logo-1" />
      </Link>
      <div className="hidden sm:flex items-center gap-5 ">
        <BranchesMenu whereClause={whereClause} />
        <EducationModelMenu whereClause={whereClause} />
      </div>
      <div className="sm:hidden z-50">
        <OpenModal type="mobileMenu">
          <IoMdMenu className="text-4xl text-white" />
        </OpenModal>
      </div>
    </div>
  );
};
