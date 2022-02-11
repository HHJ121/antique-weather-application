import React from "react";
import Typewriter from "typewriter-effect";

export default function WelcomeHeader(props) {
  let currentTime = new Date(props.data.dateTime);

  function getCurrentHour() {
    let hour = currentTime.getHours();

    return `${hour}`;
    
  }

  if (getCurrentHour() === 0 || getCurrentHour() < 12) {
    return (
      <div className="WelcomeHeader">
        <Typewriter
          options={{
            strings: [
              "Good Morning .",
              "Welcome to my weather app !",
              "Check the weather of any city below .",
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
                "Good Afternoon .",
                "Come try out my weather app !",
                "Look up the weather of any city below .",
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
                "Good Evening .",
                "Want to try out my weather app ?",
                "Enter any city below to begin .",
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
