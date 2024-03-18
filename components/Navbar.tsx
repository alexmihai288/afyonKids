import Image from "next/image";
import React from "react";
import { BranchesMenu } from "../app/_components/BranchesMenu";
import { EducationModelMenu } from "../app/_components/EducationModelMenu";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-5 flex items-center justify-between w-full">
      <Link href="/">
        <Image src="/logo1.png" width={130} height={130} alt="logo-1" />
      </Link>
      <div className="flex items-center gap-5">
        <BranchesMenu />
        <EducationModelMenu />
      </div>
    </div>
  );
};
