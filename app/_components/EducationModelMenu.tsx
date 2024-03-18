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
export const EducationModelMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold text-md hover:text-primaryRed transition-colors">
            Education Model
          </NavigationMenuTrigger>
          <NavigationMenuContent className="py-2.5 flex flex-col font-bold">
            <Link
              href={"/AuthenticEducationModel"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Authentic Education Model
            </Link>
            <Link
              href={"/FeaturesOfOurProgram"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Features of Our Program
            </Link>
            <Link
              href={"/OurCollaboration"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Our Collaboration
            </Link>
            {/* <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Our Events
            </Link> */}
            <Link
              href={"/OurForeignLanguageEducation"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Our Foreign Language Education
            </Link>
            <Link
              href={"/EuropeanLanguagePortfolio"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              European Language Portfolio
            </Link>
            <Link
              href={"/branches/1"}
              className="text-nowrap p-2.5 hover:text-primaryRed transition-colors"
            >
              Our Family Newsletter
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};