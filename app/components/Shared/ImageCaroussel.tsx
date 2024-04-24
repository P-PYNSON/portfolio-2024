import React, { useState } from "react";
import letfArrow from "./left-arrow.png";
import rightArrow from "./right-arrow.png";
import Image from "next/image";

interface ImageCarousselProps {
  imageArray: string[];
}

export default function ImageCaroussel({ imageArray }: ImageCarousselProps) {
  const [imageArrayIndex, setImageArrayIndex] = useState(0);

  function nextImage() {
    if (imageArrayIndex < imageArray.length - 1) {
      setImageArrayIndex(imageArrayIndex + 1);
    }
  }
  function previousImage() {
    if (imageArrayIndex > 0) {
      setImageArrayIndex(imageArrayIndex - 1);
    }
  }

  return (
    <div className="flex items-center justify-center gap-1 h-72 sm:h-96">
      <button className="h-3/4 w-12 sm:w-24 bg-gradient-to-l from-zinc-700 to-transparent" onClick={() => previousImage()}>
      {/*   <Image className="w-full" src={letfArrow} alt="Left Arrow" /> */}
      </button>
      <div className=" w-full h-full">
        <a
          href={imageArray[imageArrayIndex]}
          className="w-full h-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="object-contain w-full h-full"
            src={imageArray[imageArrayIndex]}
            alt={"slide" + imageArrayIndex}
          />
        </a>
      </div>
      <button className="h-3/4 w-12 sm:w-24 bg-gradient-to-r from-zinc-700 to-transparent" onClick={() => nextImage()}>
      </button>
    </div>
  );
}
