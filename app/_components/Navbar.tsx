import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="p-5">
      <Image src="/logo1.png" width={130} height={130} alt="logo-1" />
    </div>
  );
};
