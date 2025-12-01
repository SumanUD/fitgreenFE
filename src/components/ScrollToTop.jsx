"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import icon from "@/assets/icons/right.png";

export const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const calcScrollValue = () => {
      const position = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round((position * 100) / calcHeight);
      setScrollPercent(scrollValue);

      if (position > document.documentElement.clientHeight / 2) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", calcScrollValue);
    calcScrollValue(); // run once on mount

    return () => window.removeEventListener("scroll", calcScrollValue);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scrollToTop ${showBtn ? "btn-up" : ""}`}
      onClick={handleScrollTop}
      style={{
        background: `conic-gradient(#5AEF90 ${scrollPercent}%, #187c4d ${scrollPercent}%)`,
      }}
    >
      <span>
        <Image src={icon} alt="scroll to top icons" priority={true}/>
      </span>
    </div>
  );
};
