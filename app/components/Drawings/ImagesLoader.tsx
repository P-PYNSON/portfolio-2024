import React, { useEffect, useState } from "react";

interface ImagesLoaderProps {
  image: string;
}

export default function ImagesLoader({ image }: ImagesLoaderProps) {

  const splitTopImage = image.split("/");
  const imageAlt = splitTopImage[splitTopImage.length - 1];

  return (
    <a
      href={image}
      className="w-72 h-72 sm:h-96 sm:w-96 flexcolcenter mt-5 mx-auto rounded-2xl bg-gradient-to-b  from-zinc-700 to-transparent p-1"
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className={`rounded-2xl w-auto h-auto max-h-full max-w-full `} // Hide image until loaded
      />
    </a>
  );
}
