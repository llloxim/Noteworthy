import { useState } from "react";
import About from "./About";
import "./App.css";
import Videos from "./Videos";
import Nav from "./nav";

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
        <section className="bg-teal-200">
          <div className="flex justify-center items-center h-full">
            {/* <Videos showNav={false} /> */}
            <p className="text-6xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
