"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Screen1 from "./components/First Screen/Screen1";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollDirection(prevScrollPos > currentScrollPos ? "up" : "down");
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-5 relative py-16">
      <div className="fixed w-full bg-gradient-to-b from-zinc-600 via-transparent to-transparent z-10 h-32 top-0 opacity-20 rounded-b-3xl"></div>
      {scrollDirection == "up" && (
        <div className="fixed top-5 bg-black px-10 py-4 rounded-xl shadow-md shadow-white/80 border-zinc-700 border text-zinc-200 font-bold z-20">
          Menu
        </div>
      )}

      <Screen1></Screen1>
    </main>
  );
}
