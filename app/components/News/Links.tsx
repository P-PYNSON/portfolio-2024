import React from "react";

export default function Links() {
  return (
    <div className="mt-10 justify-around flex flex-wrap gap-10">
      <a
        href="mailto:phil.pynson@gmail.com"
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        <img
          className="w-12 h-12"
          src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/mail.png"
          alt="mail"
        />
        <p className="text-slate-200 font-bold text-xl">
          phil.pynson@gmail.com
        </p>
      </a>
      <a
        href="https://www.linkedin.com/in/philippe-pynson/"
        className="flex  flex-col sm:flex-row items-center gap-2"
      >
        <img
          className="w-12 h-12"
          src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/linkedin.png"
          alt="LinkedIn"
        />
        <p className="text-slate-200 font-bold text-xl">LinkedIn</p>
      </a>
      <a href="" className="flex flex-col sm:flex-row items-center gap-2">
        <img
          className="w-12 h-12"
          src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/About/git.png"
          alt="Github"
        />
        <p className="text-slate-200 font-bold text-xl">GitHub</p>
      </a>
    </div>
  );
}
