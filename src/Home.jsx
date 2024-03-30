import { useState } from "react";
import About from "./About";
import "./App.css";
import Videos from "./Videos";
import Nav from "./nav";
import Gallery from "./gallery";

function Home() {
  return (
    <>
      {/* Scroll snapping currently disabled */}
      <Nav />
      {/* <div className="snap-y snap-proximity w-screen h-screen overflow-y-scroll relative"> */}
      {/* <section className="snap-always snap-start w-screen h-screen"> */}
      <section className="w-screen">
        <div
          className="w-screen h-[1080px] bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url(/Background.jpg)" }}
        >
          <div className="absolute w-screen h-[1080px] flex flex-col justify-center items-center">
            <h3 className="text-white-400 text-5xl font-bold drop-shadow-xl">
              NOTEWORTHY ACAPPELLA
            </h3>
          </div>
        </div>
      </section>

      <div className="flex flex-col">
        {/* <section className="flex-1 snap-always snap-center"> */}
        {/* <div className="flex justify-center items-center h-full"> */}
        <section className="bg-amber-200">
          <About showNav={false} />
          {/* </div> */}
        </section>
      </div>

      <div className="flex flex-col">
        {/* <section className="flex-1 snap-always snap-center bg-teal-200"> */}
        <section className="bg-gray-200">
          {/* <div className="flex justify-center items-center h-full"> */}
          {/* <Videos showNav={false} /> */}
          <Gallery showNav={false} />
          {/* </div> */}
        </section>
      </div>
    </>
  );
}

export default Home;
