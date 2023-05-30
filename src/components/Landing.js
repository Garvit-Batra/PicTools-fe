import React from "react";
import MyImage from "../assets/image.jpg";
import Typewriter from "typewriter-effect";
export default function Landing(props) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="landing">
        <div>
          <h1 className="heading page">
            <Typewriter
              options={{
                strings: [
                  "Pic Tools",
                  "Color Image",
                  "Compress Image",
                  "Resize Image",
                  "Blur Image",
                  "Pick Color",
                  "Crop Image",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(100).deleteAll().start();
              }}
            />
          </h1>
          <h2 className="page">One Stop Place For Image Processing!</h2>
        </div>
        <img className="landing-img mt-3" src={MyImage} alt="landing" />
      </div>
      <footer className="page mt-5">&copy;Garvit Batra {currentYear}</footer>
    </>
  );
}
