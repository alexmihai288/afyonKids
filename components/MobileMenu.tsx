"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { IoMdMenu } from "react-icons/io";
import { EducationModelMenu } from "@/app/_components/EducationModelMenu";
import { BranchesMenu } from "@/app/_components/BranchesMenu";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const MobileMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit invisible -mr-5">
            <IoMdMenu className="text-4xl text-white visible" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col text-sm">
            <Link
              href="/#education"
              className="hover:bg-gray-300 p-2.5 transition-colors"
            >
              Education model
            </Link>
            <Separator className="bg-red-600" />
            <Link
              href="/#branches"
              className="hover:bg-gray-300 p-2.5 transition-colors"
            >
              Branches
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
