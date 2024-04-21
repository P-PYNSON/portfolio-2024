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
    <div className="flex items-center justify-center max-w-96 sm:w-96 h-96">
      <button onClick={() => previousImage()}>
        <Image className="w-20" src={letfArrow} alt="Left Arrow" />
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
      <button onClick={() => nextImage()}>
        {" "}
        <Image className="w-20" src={rightArrow} alt="Left Arrow" />
      </button>
    </div>
  );
}
