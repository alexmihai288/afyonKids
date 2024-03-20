"use client";

import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MobileNav = ({ whereClause }: { whereClause?: string }) => {
  const { isActive, setIsActive, fromMenu, setFromMenu } = useMenu();
  const path = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [path]);

  return (
    <div className="sm:hidden relative z-50">
      <div
        className={`flex flex-col ${
          !isActive ? "gap-1" : "gap-0"
        } cursor-pointer`}
        onClick={() => {
          if (fromMenu) {
            setFromMenu(false);
            setIsActive(false);
          } else {
            setIsActive(!isActive);
            setFromMenu(true);
          }
        }}
      >
        <div
          className={cn(
            "line1 duration-150 line w-[20px] h-[4.15px] bg-black",
            whereClause === "main" && "bg-white",
            isActive && "activeMenu"
          )}
        />
        <div
          className={cn(
            "line2 duration-150 line w-[20px] h-[4.15px] bg-black",
            whereClause === "main" && "bg-white",
            isActive && "activeMenu"
          )}
        />
        <div
          className={cn(
            "line3 duration-150 line w-[20px] h-[4.15px] bg-black",
            whereClause === "main" && "bg-white",
            isActive && "activeMenu"
          )}
        />
      </div>
    </div>
  );
};

export default MobileNav;
