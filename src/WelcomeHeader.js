import React from "react";
import Typewriter from "typewriter-effect";

export default function WelcomeHeader(props) {
  let currentTime = new Date(props.data.dateTime);

  function getCurrentHour() {
    let hour = currentTime.getHours();

    return `${hour}`;
  }

  if (getCurrentHour() === 0 && getCurrentHour() < 12) {
    return (
      <div className="WelcomeHeader">
        <Typewriter
          options={{
            strings: [
              "Good Morning.",
              "Welcome to my weather app.",
              "Check the weather of a city below.",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1800,
          }}
        />
      </div>
    );
  } else {
    if (getCurrentHour() > 12 && getCurrentHour() < 17) {
      return (
        <div className="WelcomeHeader">
          <Typewriter
            options={{
              strings: [
                "Good Afternoon.",
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
    } else {
      return (
        <div className="WelcomeHeader">
          <Typewriter
            options={{
              strings: [
                "Good Evening.",
                "Welcome to my weather app.",
                "Look up the weather of a city below.",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1800,
            }}
          />
        </div>
      );
    }
  }
}
