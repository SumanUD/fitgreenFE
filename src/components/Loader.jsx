"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/fitgreen-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Loader = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  // 🔹 Show loader on route change
  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // 🔹 Control body scroll when loader is visible
  useEffect(() => {
    if (show) {
      // Disable scroll completely
      document.body.style.overflow = "hidden";
    } else {
      // Only vertical scroll
      // document.body.style.overflowX = "hidden";
      // document.body.style.overflowY = "initial";
      document.body.style.overflow = "visible";
    }

    return () => {
      // Reset on unmount
      document.body.style.overflow = "visible";
      // document.body.style.overflowX = "visible";
      // document.body.style.overflowY = "visible";
    };
  }, [show]);

  return (
    <div className={`loader ${show ? "" : "hide"}`}>
      <Image src={logo} alt="logo" />
    </div>
  );
};
