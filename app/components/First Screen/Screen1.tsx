import React from "react";
import SelfyCard from "./SelfyCard";
import ProjectCard from "./ProjectCard";
import Caroussel from "./Caroussel/Caroussel";

interface screen1Props {
  setScreenToLoad: (screen: string) => void;
}

export default function Screen1({ setScreenToLoad }: screen1Props) {
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
          <div className="w-full cursor-pointer " onClick={()=>{setScreenToLoad("mayoo")}}>
            <ProjectCard
              title="app creation"
              teaser="mayoo (android)"
              image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/mayoo.png"
            ></ProjectCard>
          </div>
          <div className="w-full cursor-pointer" onClick={()=>{setScreenToLoad("eromaps")}}>
            <ProjectCard
              title="website creation"
              teaser="Eromaps.love"
              image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/eroprofil-bg.png"
            ></ProjectCard>{" "}
          </div>
          <div className="w-full cursor-pointer" onClick={()=>{setScreenToLoad("drawings")}}>
            <ProjectCard
              title="my art"
              teaser="some of my drawings"
              image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Sylk.png"
            ></ProjectCard>
          </div>
          <div className="w-full cursor-pointer" onClick={()=>{setScreenToLoad("news")}}>
            <ProjectCard
              title="news"
              teaser="About me"
              image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/news.jpg"
            ></ProjectCard>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-8 sm:max-w-screen-lg">
        <Caroussel></Caroussel>
      </div>
    </div>
  );
}
