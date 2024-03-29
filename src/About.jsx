import "./About.css";
import { useState } from "react";
import Nav from "./nav";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SocialIcon } from "react-social-icons";

function About() {
  // images for the carousel
  const images = [
    { url: "/Flyer.png" },
    { url: "/Flyer2.png" },
    { url: "/Flyer3.png" },
    { url: "/Flyer4.png" },
    { url: "/Flyer5.jpg" },
    { url: "/Flyer6.jpg" },
    { url: "/Flyer7.png" },
  ];

  const [currIndex, setCurrIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isFirstImage = currIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currIndex - 1;
      setCurrIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastImage = currIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currIndex + 1;
      setCurrIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const goToImage = (imageIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrIndex(imageIndex);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <>
      <Nav></Nav>
      <div className="bg-gradient-to-b from-blue-400">
        <section className="py-16">
          <div className="container mx-auto mt-4 mb-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold">In-vest-ed in A Cappella</h1>
              <p className="text-xl text-black-900 mt-5 mb-16">
                We’re a lower-voices a cappella group known for our fun
                performances and fresh takes on popular songs! It always feels
                sunny when we perform, and not just because of our golden vests!
                Since our founding in 2000, we’ve gone million-view-viral on
                YouTube multiple times, released an album entirely composed of
                original songs, and performed at the 2022 UC Berkeley
                commencement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Events</h2>
                <p className="text-gray-700">
                  We organize Welcome Back to A Cappella, Cal’s a cappella
                  orientation, at the beginning of every semester. Hundreds of
                  students turn out to hear 13+ a cappella groups perform. The
                  show is always fun, and we hope you’ll come! If you cannot
                  make it, you can also watch{" "}
                  <a
                    href="https://www.youtube.com/watch?v=KZe4v5RDWhY&list=PLFs5StaXWEUD76_3SrznJEXLOY_D1qL5R&pp=iAQB"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    videos from Spring 2023.
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Hire Us</h2>
                <p className="text-gray-700">
                  We’re no stranger to weddings, private parties, tailgates, and
                  conferences. We’ve performed at venues including
                  <span className="font-bold"> San Francisco City Hall</span>,
                  <span className="font-bold"> University House</span>, the
                  <span className="font-bold"> Faculty Club</span>, and UC
                  Berkeley’s
                  <span className="font-bold"> 2022 Commencement</span>. See
                  more info here!
                </p>
                {/* put this in the hire us page <p>
                Please e-mail our business manager at
                noteworthy@ucchoral.berkeley.edu and fill out this &nbsp;
                <a
                  className="form"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform"
                  target="_blank"
                >
                  form
                </a>
                . Then we’ll respond to you with a quote as soon as possible. In
                your email, let us know:
                <img src={SF} className="sf" alt="fy" />
              </p> */}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Find Us!</h2>
                <p className="text-gray-700">
                  On a lazy Friday afternoon, come join us for our weekly
                  concert under Sather Gate! You can find us singing there every
                  Friday at 2pm! You can also follow us on{" "}
                  <a
                    href="https://www.instagram.com/cal_noteworthy/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    Instagram
                  </a>
                  {", "} like us on{" "}
                  <a
                    href="https://www.facebook.com/Noteworthy"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    Facebook
                  </a>
                  {", "}follow us on{" "}
                  <a
                    href="https://www.tiktok.com/@uc_noteworthy"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    TikTok
                  </a>
                  {", "}or subscribe to us on{" "}
                  <a
                    href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    YouTube
                  </a>
                  {"."}
                </p>

                <div className="grid grid-cols-4 mt-4 gap-0.5">
                  <div>
                    <a
                      className="button"
                      href="https://www.instagram.com/cal_noteworthy/"
                      target="_blank"
                    >
                      <SocialIcon
                        url="https://www.instagram.com/cal_noteworthy/"
                        target="_blank"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      className="button"
                      href="https://www.facebook.com/Noteworthy"
                      target="_blank"
                    >
                      <SocialIcon
                        url="https://www.facebook.com/Noteworthy"
                        target="_blank"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      className="button"
                      href="https://www.tiktok.com/@uc_noteworthy"
                      target="_blank"
                    >
                      <SocialIcon
                        url="https://www.tiktok.com/@uc_noteworthy"
                        target="_blank"
                      />
                    </a>
                  </div>

                  <div>
                    <a
                      className="button"
                      href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
                      target="_blank"
                    >
                      <SocialIcon
                        url="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
                        target="_blank"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-32">
          <h1 className="text-5xl font-bold">Recent Shows</h1>

          <div className="max-w-[700px] h-[1000px] w-full m-auto py-16 px-4 relative group">
            <div
              className={`w-full h-full bg-center bg-contain bg-no-repeat duration-500 transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              style={{
                backgroundImage: `url(${images[currIndex].url})`,
              }}
            ></div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevImage} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextImage} size={30} />
            </div>

            <div className="flex top-4 py-4 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`text-3xl cursor-pointer ${
                    index === currIndex ? "text-yellow-500" : "text-black"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
