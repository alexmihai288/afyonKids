import Image from "next/image";
import React from "react";
import { BranchesMenu } from "./BranchesMenu";
import { EducationModelMenu } from "./EducationModelMenu";

export const Navbar = () => {
  return (
    <div className="p-5 flex items-center justify-between w-full">
      <Image src="/logo1.png" width={130} height={130} alt="logo-1" />
      <div className="flex items-center gap-5">
        <BranchesMenu />
        <EducationModelMenu />
      </div>
    </div>
  );
};
