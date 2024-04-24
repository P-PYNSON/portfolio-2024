"use client";
import type { NextPageWithLayout } from "./_app";
import { useState, type ReactElement } from "react";
import Layout from "../pages/layout";
import Menu from "@/app/components/Shared/Menu";
import Screen1 from "@/app/components/First Screen/Screen1";

const Page: NextPageWithLayout = () => {
  const [screenToLoad, setScreenToLoad] = useState("screen1");
  return (
    <main className="flex w-full flex-col items-center justify-center bg-black px-5 relative">
      <div className="fixed w-full bg-gradient-to-b from-zinc-600 via-transparent to-transparent z-10 h-32 top-0 opacity-20 rounded-b-3xl"></div>

      <Screen1></Screen1>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
