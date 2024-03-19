import Nav from "./nav";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./gallery.css";
function Gallery() {

    return (
        <>
        <Nav></Nav>
        <div className="center">
        <Carousel className="vid" showArrows={true}>
                <div>
                    <img src="Backround.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="Flyer.png" />
                    <p className="legend">Legend 2</p>
                </div>
        </Carousel>
            </div>
        </>
    );
  }
  
  export default Gallery;