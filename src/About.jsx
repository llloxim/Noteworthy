import "./About.css";
import Nav from "./nav";

import SF from "/SFhall.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SocialIcon } from "react-social-icons";
function About() {
  return (
    <>
      <Nav></Nav>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">
              In-vest-ed in A Cappella
            </h1>
            <p className="text-lg text-gray-700">
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
                show is always fun, and we hope you’ll come! If you cannot make
                it, you can also watch{" "}
                <a
                  href="https://www.instagram.com/cal_noteworthy/"
                  className="text-blue-500 underline"
                >
                  videos from Spring 2023.
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Hire Us</h2>
              <p>
                We’re no stranger to weddings, private parties, tailgates, and
                conferences. We’ve performed at venues including
                <span className="font-bold"> San Francisco City Hall</span>,
                <span className="font-bold"> University House</span>, the
                <span className="font-bold"> Faculty Club</span>, and UC
                Berkeley’s
                <span className="font-bold"> 2022 Commencement</span>. See more
                info here!
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
                On a lazy Friday afternoon, come join us for our weekly concert
                under Sather Gate! You can find us singing there every Friday at
                2pm! You can also follow us on{" "}
                <a
                  href="https://www.instagram.com/cal_noteworthy/"
                  className="text-blue-500 underline"
                >
                  Instagram
                </a>
                {", "} like us on{" "}
                <a
                  href="https://www.facebook.com/Noteworthy"
                  className="text-blue-500 underline"
                >
                  Facebook
                </a>
                {", "}follow us on{" "}
                <a
                  href="https://www.tiktok.com/@uc_noteworthy"
                  className="text-blue-500 underline"
                >
                  TikTok
                </a>
                {", "}or subscribe to us on{" "}
                <a
                  href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
                  className="text-blue-500 underline"
                >
                  YouTube
                </a>
                {"."}
              </p>

              {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-1"> */}
              <div className="grid grid-cols-4 mt-4 gap-0.5">
                <div>
                  <a
                    className="button"
                    href="https://www.instagram.com/cal_noteworthy/"
                    target="_blank"
                  >
                    <SocialIcon url="https://www.instagram.com/cal_noteworthy/" />
                  </a>
                </div>

                <div>
                  <a
                    className="button"
                    href="https://www.facebook.com/Noteworthy"
                    target="_blank"
                  >
                    <SocialIcon url="https://www.facebook.com/Noteworthy" />
                  </a>
                </div>

                <div>
                  <a
                    className="button"
                    href="https://www.tiktok.com/@uc_noteworthy"
                    target="_blank"
                  >
                    <SocialIcon url="https://www.tiktok.com/@uc_noteworthy" />
                  </a>
                </div>

                <div>
                  <a
                    className="button"
                    href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
                    target="_blank"
                  >
                    <SocialIcon url="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////////////// old code below: */}

      <div className="block">
        <div className="sep">
          <h1>Events</h1>
          <h4>Shows</h4>
          <Carousel className="flyers" showArrows={true}>
            <div>
              <img src="Flyer.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="Flyer2.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="Flyer3.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="Flyer7.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="Flyer4.png" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="Flyer5.jpg" />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default About;
