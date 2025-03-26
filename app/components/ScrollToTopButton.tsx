"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0});
    }
  };

  return (
    <button
      className={`fixed bottom-0 right-0 bg-white text-black rounded-full px-2 py-2 mr-6 mb-[71px] z-50 flex items-center cursor-pointer gap-2 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="inline-block h-4 w-4" />
    </button>
  );
}
