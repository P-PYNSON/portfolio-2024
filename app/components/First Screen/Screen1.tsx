import React, { useEffect, useState } from "react";
import SelfyCard from "./SelfyCard";
import ProjectCard from "./ProjectCard";
import Caroussel from "./Caroussel/Caroussel";
import Link from "next/link";

export default function Screen1() {
  return (
    <div className="max-w-screen-2xl w-full flexcolcenter gap-2 min-h-screen py-16">
      <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl p-10 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        YET <span className="font-normal italic">ANOTHER</span>
        <br /> DEV PORTFOLIO
      </h1>
      <div className="w-full flexcolcenter md:flex-row gap-2">
        <div>
          <SelfyCard></SelfyCard>
        </div>
        <div className="w-full flexcolcenter gap-2 sm:max-w-96">
          <Link href="/DelicesGrecs" className="w-full cursor-pointer">
            <ProjectCard title="E-commerce / ERP" teaser="Delicesgrecs.fr" image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/logo.jpg"></ProjectCard>
          </Link>
          <Link href="/Eromaps" className="w-full cursor-pointer">
            <ProjectCard title="website creation" teaser="Eromaps.love" image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/eroprofil-bg.png"></ProjectCard>{" "}
          </Link>
          <Link href="/Mayoo" className="w-full cursor-pointer ">
            <ProjectCard title="app creation" teaser="mayoo (android)" image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/mayoo.png"></ProjectCard>
          </Link>
          <Link href="/Drawings" className="w-full cursor-pointer">
            <ProjectCard title="my art" teaser="some of my drawings" image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Sylk.png"></ProjectCard>
          </Link>
          <Link href="/About" className="w-full cursor-pointer">
            <ProjectCard title="About me" teaser="More infos" image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/news.jpg"></ProjectCard>
          </Link>
        </div>
      </div>
      {/*   <div className="relative w-full mt-8 sm:max-w-screen-lg">
        <Caroussel></Caroussel>
      </div> */}
    </div>
  );
}
