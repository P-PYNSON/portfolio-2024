import React from "react";

interface projectCardProps {
  title: string;
  teaser: string;
  image: string;
}

export default function ProjectCard({
  title,
  teaser,
  image,
}: projectCardProps) {
  return (
    <main className="flex w-full h-28 items-center justify-center gap-2">
      <div className=" bg-zinc-900 h-full  w-8/12 p-4 rounded-2xl flexcolcenter border-zinc-800 border">
        <p className="text-slate-200 text-lg uppercase font-bold">{title}</p>
        <p className="text-slate-300 text-sm uppercase font-semibold mt-2">
          {teaser}
        </p>
      </div>
      <div
        className={`w-28 h-28 flex justify-center items-center bg-zinc-900 rounded-2xl bg-cover`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/*  <img className="rounded-2xl object-contain" src={image} alt="" /> */}
      </div>
    </main>
  );
}
