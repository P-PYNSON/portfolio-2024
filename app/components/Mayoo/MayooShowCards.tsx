import React from 'react'

interface MayooShowCardsProps {
    textTop?:string;
    textBottom?:string
    image:string;
}

export default function MayooShowCards({textTop, textBottom, image}:MayooShowCardsProps) {
  const splitImage = image.split("/");
  const imageAlt = splitImage[splitImage.length - 1]
  
  return (
    <section className='sm:w-96'>
        <p className="text-slate-200 text-center">
          {textTop}
        </p>
        <div className="w-64 sm:w-80 flexcolcenter mt-5 mx-auto">
          <img
            className="rounded-2xl w-auto h-auto max-h-full max-w-full "
            src={image}
            alt={imageAlt}
          />
        </div>
        <p className="text-slate-200 text-center mt-5">
          {textBottom}
        </p>
      </section>
  )
}
