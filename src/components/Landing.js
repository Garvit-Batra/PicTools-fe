import React from "react";
import Typewriter from "typewriter-effect";
export default function Landing(props) {
  return (
    <div className="landing">
      <h1 className="heading">
        <Typewriter
          options={{
            strings: [
              "Pic Tools",
              "Color Image",
              "Restore Image",
              "Crop Image",
              "Compress Image",
              "Resize Image",
            ],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(100).deleteAll().start();
          }}
        />
      </h1>
      <h2>One Stop Place For Image processing!</h2>
    </div>
  );
}
