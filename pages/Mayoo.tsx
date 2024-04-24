import React, { ReactElement, useEffect } from "react";
import MayooShowCards from "../app/components/Mayoo/MayooShowCards";
import ImageCaroussel from "../app/components/Shared/ImageCaroussel";
import Layout from "./layout";
import { NextPageWithLayout } from "./_app";

const Mayoo: NextPageWithLayout = () => {
  //scroll back to top on screen change
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="max-w-screen-2xl w-full flexcolcenter gap-5 min-h-screen py-16">
      <h1 className="text-center font-semibold text-4xl sm:text-6xl md:text-7xl px-10 py-5 mt-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        ANDROID APP <span className="font-extrabold italic">MAYOO</span>
      </h1>
      <img
        className="w-36 rounded-3xl shadow-lg shadow-purple-800"
        src="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/mayoo.png"
        alt=""
      />
      <section className="sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-5 mt-5">
        <MayooShowCards
          textTop="Cute looking cooking app, to manage recipes and make grocery lists !
          Allow creation, modifications, and sharing of food recipes amongst
          users."
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/showRecipe-min.png"
        ></MayooShowCards>
        <MayooShowCards
          textTop="Auhentification through AWS Cognito and user-pools. Datas saved in AWS DynamoDB tables.
       Api calls are made through an API gateway and serverless Lambda functions."
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/mayooauth-min.png"
        ></MayooShowCards>
        <MayooShowCards
          textTop="In collaboration with Spoonacular API to fetch ingredients and nutritional values.
       Multiple functionalities like image modifications (see additional screenshots)."
          image="https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/spoon.png"
        ></MayooShowCards>
      </section>
      <h1 className="text-center font-semibold text-4xl px-10 py-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        What I&apos;m using
      </h1>
      <p className="text-slate-200">
        I&apos;m using React Native for the front-end. <br /> For the backend
        it&apos;s the AWS environment, through AWS Amplify (CLI). <br />
        Includes Cognito for authentification, DynamoDB for data storage, Lambda
        for serverless functions, and an API gateway for Spoonacular
        communications.
      </p>
      <h1 className="text-center font-semibold text-4xl px-10 py-5 bg-gradient-to-r from-slate-600 via-slate-50 to-slate-700 text-transparent bg-clip-text">
        Some more images
      </h1>
      <div>
        <ImageCaroussel
          imageArray={[
            "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/addingredient-min.png",
            "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/delete-min.png",
            "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/instructions-min.png",
            "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/mayoophoto-min.png",
            "https://portfoliophilpynson.s3.eu-north-1.amazonaws.com/maooScreens/saved-min.png",
          ]}
        ></ImageCaroussel>
      </div>
    </div>
  );
};

Mayoo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Mayoo;
