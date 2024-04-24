"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Screen1 from "./components/First Screen/Screen1";
import Mayoo from "./components/Mayoo/Mayoo";
import Menu from "./components/Shared/Menu";
import Eromaps from "./components/Eromaps/Eromaps";
import Drawings from "./components/Drawings/Drawings";
import News from "./components/News/News";

export default function Home() {
  const [screenToLoad, setScreenToLoad] = useState("drawings");

  //scroll back to top on screen change
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    scrollToTop();
  }, []);

  //function to hide of show menu depending on scrolling direction

  return (
    <main className="flex w-full flex-col items-center justify-center bg-black px-5 relative">
      <div className="fixed w-full bg-gradient-to-b from-zinc-600 via-transparent to-transparent z-10 h-32 top-0 opacity-20 rounded-b-3xl"></div>

      <Menu setScreenToLoad={setScreenToLoad}></Menu>
      {screenToLoad == "screen1" && (
        <Screen1 setScreenToLoad={setScreenToLoad}></Screen1>
      )}
      {screenToLoad == "mayoo" && <Mayoo></Mayoo>}
      {screenToLoad == "eromaps" && <Eromaps></Eromaps>}
      {screenToLoad == "drawings" && <Drawings></Drawings>}
      {screenToLoad == "news" && <News></News>}
    </main>
  );
}
