"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const BranchesMenu = ({ whereClause }: { whereClause?: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              whereClause === "main" && "bg-inherit text-white",
              `font-bold text-md ${
                whereClause !== "main"
                  ? "hover:text-primaryRed"
                  : "hover:text-white"
              } transition-colors`
            )}
          >
            Branches
          </NavigationMenuTrigger>
          <NavigationMenuContent className="py-2.5 flex flex-col font-bold">
            <Link
              href="/branches/1"
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Mareşal AKD kids
            </Link>
            <Link
              href="/branches/2"
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Uydukent AKD kids
            </Link>
            <Link
              href="/branches/3"
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Triovista AKD kids
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
