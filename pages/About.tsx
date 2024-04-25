import React, { ReactElement } from "react";
import NewsCard from "../app/components/News/NewsCard";
import Links from "../app/components/News/Links";
import { NextPageWithLayout } from "./_app";
import Layout from "./layout";

const About: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-2xl w-full flexcolcenter gap-2 min-h-screen py-16">
      <h1 className="text-center font-semibold text-4xl sm:text-6xl md:text-7xl px-10 py-5 mt-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        ABOUT ME
      </h1>
      <p className="text-slate-200 max-w-screen-lg">Some more informations !</p>
      <Links></Links>

      <a
        className="bg-zinc-600 text-slate-200 p-6 mt-5 rounded-xl w-64 text-center font-bold underline"
        href="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/CV+PYNSON+Philippe+(1).pdf"
        download="cv_Pynson_Philippe.pdf"
      >
        Download my CV
      </a>

      <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center  gap-5 mt-5">
        <NewsCard
          text=" Found an awesome school for 2024, starting in September ! Now I just
        need to find an apprenticeship !"
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/3-31921_clip-art-pictures.png"
        ></NewsCard>
        <NewsCard
          text="Heating up my poor soul under the sun of France's South. I live in
          Toulouse, the pink city!"
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/toulouse.jpg"
        ></NewsCard>
        <NewsCard
          text=" The two demons haunting my life everyday..."
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/KaliVels.jpg"
        ></NewsCard>
      </section>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
