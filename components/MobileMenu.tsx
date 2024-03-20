"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoMdMenu } from "react-icons/io";
import { BranchesMenu } from "@/app/_components/BranchesMenu";
import { EducationModelMenu } from "@/app/_components/EducationModelMenu";
import { useModal } from "@/hooks/use-modal";

export const MobileMenu = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "mobileMenu";

  console.log(isModalOpen);
  return (
    <DropdownMenu open={isModalOpen} onOpenChange={onClose}>
      <DropdownMenuContent className="w-56 bg-red-500 z-50">
        <p>da</p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
