import React, { ReactElement } from "react";
import EromapsCard from "../app/components/Eromaps/EromapsCard";
import ImageCaroussel from "../app/components/Shared/ImageCaroussel";
import Layout from "./layout";
import { NextPageWithLayout } from "./_app";

const DelicesGrecs: NextPageWithLayout = () => {
  return (
    <div className="max-w-screen-2xl w-full flexcolcenter min-h-screen py-16 gap-5">
      <h1 className="text-center text-wrap font-semibold text-4xl sm:text-6xl md:text-7xl px-10 py-5 mt-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        E-Commerce <span className="font-extrabold italic">DelicesGrecs</span>
      </h1>
      <div className="w-72 h-36 ">
        <img
          className="w-full h-full object-fill rounded-3xl shadow-lg shadow-blue-800 p-2 bg-white"
          src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/LOGO.png"
          alt="eroprofil-bg"
        />
      </div>
      <p className="text-center text-slate-200 mt-3 max-w-6xl">
        Solo work during my internship. E-commerce and ERP for a Greek food distributor. Can be used by B2C and B2B clients, price and delivery varying depending on the client.
        Full fledged website, with a back-office for the admin, and a CRM for the sales team. {" "}
        <a
          href="https://delicesgrecs.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          DelicesGrecs.fr
        </a>{" "}
        !
      </p>
      <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-10">
        <EromapsCard
          text="As a paid feature, the registration is done through the main website, 'erotypes.com'. Access is paid for through Stripe, which triggers the creation of a new user in our own database (via webhooks), avoiding the need to create an account on both websites."
          topImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/connection-min.png"
        ></EromapsCard>
        <EromapsCard
          text="Once connected, users can choose a 'Map', a theme. Every map contains questionnaires."
          topImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/destination-min.png"
          bottomImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/map-min.png"
        ></EromapsCard>
        <EromapsCard
          text="Users' results are saved, treated, and displayed in their profile. Multiple displays and graphs are available."
          topImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/resultats1-min.png"
          bottomImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/resultats2-min.png"
        ></EromapsCard>
        <EromapsCard
          text="Multiple resources are available, including videos and audios."
          bottomImage="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/integration-min.png"
        ></EromapsCard>
      </section>
      <h1 className="text-center font-semibold text-4xl px-10 py-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        What I&apos;m using
      </h1>
      <p className="text-slate-200">
        I&apos;m using Laravel with Inertia. The back-end is in PHP, following
        Laravel&apos;s MVC structure. <br />
        The front-end is using React (thanks to Inertia). <br />
        PostgreSQL for the database, with Eloquent ORM. <br />
        Hosted on DigitalOcean servers.
      </p>

      <div className="flexcolcenter md:flex-row gap-5 mt-5">
        <a
          href="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/results3-min.png"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 sm:w-96 flexcolcenter mx-auto rounded-b-2xl "
        >
          <img
            className="rounded-2xl w-auto h-auto max-h-full max-w-full"
            src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/results3-min.png"
            alt="Eromaps results 3"
          />
        </a>
        <a
          href="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/welcome-min.png"
          target="_blank"
          rel="noopener noreferrer"
          className="w-72 sm:w-96 flexcolcenter mx-auto rounded-b-2xl "
        >
          <img
            className="rounded-2xl w-auto h-auto max-h-full max-w-full"
            src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/EromapsScreens/welcome-min.png"
            alt="Eromaps welcome"
          />
        </a>
      </div>
    </div>
  );
};

DelicesGrecs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DelicesGrecs;