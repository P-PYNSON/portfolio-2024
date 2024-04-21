import React from "react";

export default function SelfyCard() {
  return (
    <div className="bg-gradient-to-t from-zinc-950 to-zinc-700 py-5 sm:px-10 px-8 rounded-xl flexcolcenter gap-5 max-w-96 h-[480px]">
      <div className="w-60 h-60">
        <img
          className="rounded-xl w-full h-full object-contain shadow-lg shadow-white/80"
          src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/me1-min.jpg"
          alt=""
        />
      </div>

      <div className="text-slate-200 flexcolcenter gap-5">
        <h1 className="text-3xl font-bold text-center">Philippe Pynson</h1>
        <div className="bg-black py-2 px-4 rounded-xl">
          <p className="slateGradient text-2xl font-semibold ">Fullstack Dev</p>
        </div>
        <p className="text-center text-lg">
          Looking for internship near Toulouse
        </p>
      </div>
    </div>
  );
}
