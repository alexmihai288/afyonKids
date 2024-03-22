"use client";

import { useMenu } from "@/hooks/use-menu";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  const { isActive, setIsActive } = useMenu();

  const handleClickOutside = () => {
    setIsActive(false);
  };
  const ref = useRef(null);

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      className={`z-50 absolute left-0 right-0 top-0 bottom-0 duration-150 ${
        !isActive
          ? "z-50 h-0 opacity-0 pointer-events-none"
          : "text-ddtWhite grainy h-[180px] w-full z-50 rounded-b-lg"
      }`}
    >
      <Link href="/" onClick={() => setIsActive(false)}>
        <Image src="/logo2.png" alt="logo" width={150} height={150} />
      </Link>
      <div className="flex flex-col justify-center gap-5 h-full text-[#2194d2]">
        <Link
          onClick={() => setIsActive(false)}
          href="/#education"
          className="text-[1.1em] w-fit mx-auto tracking-widest hover:text-[#145e85] hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-primaryRed after:duration-200"
        >
          Education Model
        </Link>
        <Link
          onClick={() => setIsActive(false)}
          href="/#branches"
          className="text-[1.1em] w-fit mx-auto tracking-widest hover:text-[#145e85] hover:font-medium hover:scale-95 active:scale-90 duration-200 after:content-[''] after:w-[0] after:h-[0] relative after:absolute after:-bottom-[2px] after:left-[50%] after:-translate-x-[50%] hover:after:w-full hover:after:h-[1px] hover:after:bg-primaryRed after:duration-200"
        >
          Branches
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
