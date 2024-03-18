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
export const BranchesMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-md hover:text-primaryRed transition-colors">
            Branches
          </NavigationMenuTrigger>
          <NavigationMenuContent className="py-2.5 flex flex-col font-bold">
            <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Mareşal AKD kids
            </Link>
            <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Uydukent AKD kids
            </Link>
            <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Erhmen AKD kids
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
