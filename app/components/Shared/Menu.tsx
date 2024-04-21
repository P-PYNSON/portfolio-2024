import React, { useEffect, useRef, useState } from "react";

interface MenuProps {
  setScreenToLoad: (screen: string) => void;
}

export default function Menu({ setScreenToLoad }: MenuProps) {
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
              <button
                onClick={() => setScreenToLoad("screen1")}
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Home
              </button>
              <button
                onClick={() => setScreenToLoad("mayoo")}
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Mayoo
              </button>
              <button
                onClick={() => setScreenToLoad("eromaps")}
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Eromaps
              </button>
              <button
                onClick={() => setScreenToLoad("eromaps")}
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                Drawings
              </button>
              <button
                onClick={() => setScreenToLoad("eromaps")}
                className="w-full rounded-xl p-4 border-y border-white hover:shadow-md hover:shadow-white"
              >
                About
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
