import React from "react";
import Typewriter from "typewriter-effect";

export default function WelcomeHeader(props) {
    return (
      <div className="WelcomeHeader">
        <Typewriter
          options={{
            strings: [
              "Hello.",
              "Welcome to my weather app.",
              "Where would you like to look up the weather?",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1800,
          }}
        />
      </div>
    );
}