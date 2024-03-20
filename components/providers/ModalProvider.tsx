"use client";

import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <MobileMenu />
    </>
  );
};
