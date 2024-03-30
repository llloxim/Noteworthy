import Nav from "./nav";
import "./gallery.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

function Gallery({ showNav }) {
  const videos = [{ id: "n0p8MxT8AxI" }, { id: "kW57PpibCMA" }];

  const [currIndex, setCurrIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isFirstImage = currIndex === 0;
      const newIndex = isFirstImage ? videos.length - 1 : currIndex - 1;
      setCurrIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  };

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const isLastImage = currIndex === videos.length - 1;
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
      {showNav && <Nav />}

      <div className="bg-gradient-to-b from-blue-400">
        <section className="pt-16 pb-32">
          <h1 className="text-5xl font-bold mb-8">Our Favorite Videos</h1>

          <div className="max-w-[1080px] h-[800px] w-full m-auto py-16 px-4 relative group">
            <div
              className={`w-full h-full aspect-w-16 aspect-h-9 duration-500 transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videos[currIndex].id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full absolute top-0 left-0"
              ></iframe>
            </div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevImage} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextImage} size={30} />
            </div>

            <div className="flex top-4 py-20 justify-center">
              {videos.map((image, index) => (
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

export default Gallery;
