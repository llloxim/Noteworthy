import "./About.css";
import Nav from "./nav";
import Flyer from "/Flyer.png";
import SF from "/SFhall.jpg";
function About() {

    return (
        <>
        <Nav></Nav>
        <div>
            <h1>About Us</h1>
            <h2>We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</h2>
            <h2>Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.</h2>
        </div>
        <div className="block">
            <div className="sep">
                <h1>Events</h1>
                <h4>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this form. Then we’ll respond to you with a quote as soon as possible. In your email, let us know:</h4>
                <img src={Flyer} className="flyer" alt="fly"/>
            </div>
            <div className="sep">
                <h1>Hire Us</h1>
                <h4>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this &nbsp;
                    <a className="form" href="https://docs.google.com/forms/d/e/1FAIpQLSexPGp4LpkvAaE66Kmh5EllvAaXQtPmGquz_1dDo9g2PZ01hg/viewform" target="_blank">form</a>
                    <img src={SF} className="sf" alt="fy"/>
                </h4>
                
            </div>
            <div className="sep">
                <h1>Follow Us</h1>
                <h4>Please e-mail our business manager at noteworthy@ucchoral.berkeley.edu and fill out this form. Then we’ll respond to you with a quote as soon as possible. In your email, let us know:</h4>
                <div className="grid-container">
                    <div className="grid-item"><a className="button" href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank">form</a></div>
                    <div className="grid-item"><a className="button" href="https://www.instagram.com/cal_noteworthy/" target="_blank">form</a></div>
                    <div className="grid-item"><a className="button" href="https://www.facebook.com/Noteworthy" target="_blank">form</a></div>
                    <div className="grid-item"><a className="button" href="https://www.tiktok.com/@uc_noteworthy" target="_blank">form</a></div>
                </div>
            </div>
        </div>

        </>
    );
  }
  
  export default About;