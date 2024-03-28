import About from "./About";
import "./App.css";
import Videos from "./Videos";
import Nav from "./nav";

function Home() {
  return (
    <>
      {/* Without scroll snapping */}
      {/* <Nav />
      <div>
        <section className="w-screen h-screen">
          <div
            className="w-full h-full bg-cover bg-fixed"
            style={{ backgroundImage: "url(/Background.jpg)" }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            <h3 className="text-white-400 text-5xl font-bold drop-shadow-xl">
              NOTEWORTHY ACAPPELLA
            </h3>
          </div>
        </section>

        <section className="bg-amber-200">
          <About></About>
        </section>

        <section className="bg-teal-200">
          <Videos></Videos>
          <p className="text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div> */}

      {/* Scroll snapping */}
      <Nav></Nav>
      <div className="snap-y snap-proximity w-screen h-screen overflow-y-scroll relative">
        <section className="snap-always snap-start w-screen h-screen">
          <div
            className="w-full h-full bg-cover bg-fixed"
            style={{ backgroundImage: "url(/Background.jpg)" }}
          ></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            <h3 className="text-white-400 text-5xl font-bold drop-shadow-xl">
              NOTEWORTHY ACAPPELLA
            </h3>
          </div>
        </section>

        <div className="flex flex-col h-screen">
          <section className="flex-1 snap-always snap-center bg-amber-200">
            <div className="flex justify-center items-center h-full">
              <p className="text-6xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col h-screen">
          <section className="flex-1 snap-always snap-center bg-teal-200">
            <div className="flex justify-center items-center h-full">
              <p className="text-6xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
