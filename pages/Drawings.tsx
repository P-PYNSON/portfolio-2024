"use client";
import ImagesLoader from "@/app/components/Drawings/ImagesLoader";
import ImageCaroussel from "@/app/components/Shared/ImageCaroussel";
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "./layout";
import { NextPageWithLayout } from "./_app";

const Drawings: NextPageWithLayout = () => {
  const drawingArray = [
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Azyra+side.jpeg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Azyra+color.jpeg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Azyra+front.jpeg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Alira+prev+2-min.jpg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Alira+close+up-min.jpg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Copie+de+Lynda+copy-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Lynda-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/LUA+1+d(1)-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Brian+both-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/f14bf525-cc26-4d47-80b2-4d80d428ec4f-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Luna+1-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Capture+d%E2%80%99%C3%A9cran+2021-11-30+232809-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Goth+face-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Capture+d%E2%80%99%C3%A9cran+2022-11-16+204452-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Cigy.jpeg",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/a617d3d0-fca7-4e55-9b7a-d6e022d8e8cc-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/MageGc-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Matt%C3%A9o+artboard-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Medus-min.png",
    "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/Blason+Template-min.png",
  ];

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [showmore, setShowmore] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
  
      <div className="max-w-screen-2xl w-full flexcolcenter gap-2 min-h-screen py-16">
        <h1 className="text-center font-semibold text-4xl sm:text-6xl md:text-7xl px-10 py-5 mt-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
          DRAWINGS
        </h1>
        <p className="text-slate-200 max-w-screen-lg">
          I&apos;ve always been quite shy about my artworks. I don&apos;t draw a
          lot these days either. But I&apos;ve been told I should put them here,
          so why not. Constructive criticism is welcome, keeping in mind this is
          merely a hobby.
        </p>
        {width >= 830 && (
          <div className="flexcolcenter">
            <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-5 mt-5">
              {drawingArray.slice(0, 6).map((drawing, index) => (
                <ImagesLoader key={index} image={drawing}></ImagesLoader>
              ))}
            </section>
            {showmore && (
              <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-5 mt-5">
                {drawingArray.slice(6).map((drawing, index) => (
                  <ImagesLoader key={index} image={drawing}></ImagesLoader>
                ))}
              </section>
            )}
            {!showmore && (
              <button
                onClick={() => {
                  setShowmore(true);
                }}
                className="text-white font-bold rounded-xl mt-10 w-1/2 bg-gradient-to-b from-zinc-700 to-transparent h-12"
              >
                SHOW MORE
              </button>
            )}
          </div>
        )}
        {width < 830 && (
          <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center mt-5">
            <ImageCaroussel imageArray={drawingArray}></ImageCaroussel>
          </section>
        )}
        <div className="mt-10">
          <video controls width="640" height="360">
            <source
              src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/Drawings/AzyraVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
   
  );
}

Drawings.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Drawings;
