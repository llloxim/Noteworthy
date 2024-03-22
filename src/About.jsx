import "./About.css";
import Nav from "./nav";

import SF from "/SFhall.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { SocialIcon } from 'react-social-icons'
function About() {

    return (
        <>
        <Nav></Nav>
        <div className="about-desc">
            <h1>About Us</h1>
            <h2>We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</h2>
            <h2>Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</h2>
        </div>
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
            <div className="sep">
                <h1>Hire Us</h1>
                <h4>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this &nbsp;
                    <a className="form" href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform" target="_blank">form</a>
                    <img src={SF} className="sf" alt="fy"/>
                </h4>

                <div className="sep">
                <h1>Follow Us</h1>
                <h4>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this form. Then we’ll respond to you with a quote as soon as possible. In your email, let us know:</h4>
                <div className="grid-container">
                    <div className="grid-item"><a className="button" href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank"><SocialIcon url="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" /></a></div>
                    <div className="grid-item"><a className="button" href="https://www.instagram.com/cal_noteworthy/" target="_blank"><SocialIcon url="https://www.instagram.com/cal_noteworthy/" /></a></div>
                    <div className="grid-item"><a className="button" href="https://www.facebook.com/Noteworthy" target="_blank"><SocialIcon url="https://www.facebook.com/Noteworthy" /></a></div>
                    <div className="grid-item"><a className="button" href="https://www.tiktok.com/@uc_noteworthy" target="_blank"><SocialIcon url="https://www.tiktok.com/@uc_noteworthy" /></a></div>
                </div>
            </div>
                
            </div>
        </div>

        </>
    );
  }
  
  export default About;