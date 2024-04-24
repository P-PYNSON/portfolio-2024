import React from "react";

interface NewsCardProps {
  image: string;
  text: string;
}

export default function NewsCard({ image, text }: NewsCardProps) {
  return (
    <div className="flexcolcenter bg-gradient-to-t max-w-md from-transparent to-transparent via-zinc-800 rounded-lg p-6">
      <div className="w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain"
          src={image}
          alt="Toulouse"
        />
      </div>
      <p className="text-slate-200 text-center w-3/4 mt-2">{text}</p>
    </div>
  );
}
