import Nav from "./nav";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./gallery.css";
function Gallery() {
  return (
    <>
      <Nav></Nav>
      <h2>
          Our Favorite Videos!
        </h2>
      <div className="center">
        <Carousel className="vid" showArrows={true}>
          <div className="video1">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/7RPiGAzk4wA"
              title="YouTube video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="legend">Legend 1</p>
            <p className="botCaption"> Find us on Youtube!</p>
          </div>
          <div className="video2">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/udeym8-yr7g"
              title="YouTube video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="legend">Legend 1</p>
            <p className="botCaption"> Find us on Youtube!</p>
          </div>
          <div className="video3">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/bW5czKqT05A"
              title="YouTube video 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="legend">Legend 1</p>
            <p className="botCaption"> Find us on Youtube!</p>
          </div>
          <div className="video3">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/P_POJ6dmqNE"
              title="YouTube video 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="legend">Legend 1</p>
            <p className="botCaption"> Find us on Youtube!</p>
          </div>
          <div>
            <img src="Flyer.png" />
            <p className="legend">Legend 2</p>
            <p className="botCaption"> Find us on Youtube!</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Gallery;
