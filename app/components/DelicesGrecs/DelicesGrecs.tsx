import React from "react";

interface EromapsCardProps {
  text: string;
  topImage?: string;
  bottomImage?: string;
}

export default function EromapsCard({
  text,
  topImage,
  bottomImage,
}: EromapsCardProps) {
    
  let topImageAlt;
  let bottomImageAlt;

  if (topImage) {
    const splitTopImage = topImage.split("/");
    topImageAlt = splitTopImage[splitTopImage.length - 1];
  }
  if (bottomImage) {
    const splitBottomImage = bottomImage.split("/");
    bottomImageAlt = splitBottomImage[splitBottomImage.length - 1];
  }

  return (
    <section className="sm:w-[400px] mt-8 sm:mt-0">
      {topImage && (
        <a
          href={topImage}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 sm:w-96 flexcolcenter mt-5 mx-auto rounded-t-2xl "
        >
          <img
            className="rounded-2xl w-auto h-auto max-h-full max-w-full"
            src={topImage}
            alt={topImageAlt}
          />
        </a>
      )}
      <p className="shadow-inner shadow-black text-slate-200 text-center bottom-0 bg-gradient-to-b from-slate-700 to-black z-10 p-3 rounded-2xl my-1">
        {text}
      </p>
      {bottomImage && (
        <a
          href={bottomImage}
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 sm:w-96 flexcolcenter mx-auto rounded-b-2xl "
        >
          <img
            className="rounded-2xl w-auto h-auto max-h-full max-w-full"
            src={bottomImage}
            alt={bottomImageAlt}
          />
        </a>
      )}
    </section>
  );
}
