import About from "./About";
import "./App.css";
import Videos from "./Videos";
import Nav from "./nav";

function Home() {
  return (
    <>
      <Nav></Nav>

      <div className="snap-y snap-proximity w-screen h-screen pb-8 overflow-y-scroll">
        <section className="snap-always snap-start w-screen h-screen relative">
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

        <section className="snap-always snap-center w-screen h-screen bg-amber-200">
          {/* <About></About> */}
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

        <section className="snap-always snap-center w-screen h-screen  bg-teal-200">
          {/* <Videos></Videos> */}
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
      </div>
    </>
  );
}

export default Home;
