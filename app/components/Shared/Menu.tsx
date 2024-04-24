import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  //function to close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //function to hide of show menu depending on scrolling direction
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
    <div className="flex w-full flex-col items-center justify-center">
      {scrollDirection == "up" && (
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer fixed top-5 text-center bg-black px-10 py-4 rounded-xl shadow-md shadow-white/80 border-zinc-700 border text-zinc-200 font-bold z-20"
        >
          Menu
          {open && (
            <div ref={menuRef} className="w-full flexcolcenter mt-2 gap-4 p-4">
              <Link
                href="/"
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Home
              </Link>
              <Link
                href="/Mayoo"
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Mayoo
              </Link>
              <Link
                href="/Eromaps"
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Eromaps
              </Link>
              <Link
                href="/Drawings"
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Drawings
              </Link>
              <Link
                href="/About"
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                About
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
