import React from "react";
import { useScramble } from "use-scramble";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Hero() {
  const { ref, replay } = useScramble({ text: "Rewired 2.0", speed: 0.56, step: 1 });
  const EVENT_TIME = new Date().getTime() + 24 * 3600 * 1000 + 5000;
  const FORM_LINK = "";

  return (
    <section className="w-full p-6 relative bg-transparent after:block after:absolute after:left-0 after:top-0 after:opacity-15 after:w-full after:h-full after:bg-[url('assets/hero-photo.png')] after:bg-center after:bg-no-repeat after:bg-cover">
      <div className="relative z-10">
        <h1
          ref={ref}
          onMouseOver={replay}
          className="w-full py-6 sm:py-12 whitespace-nowrap uppercase text-center text-3xl sm:text-6xl lg:text-9xl"
        ></h1>
        <p className="w-full py-3 sm:py-6 text-center text-2xl sm:text-6xl text-shadow-md">
          #Countdown
        </p>
        <div className="w-full place-items-center">
          <FlipClockCountdown className="flipclock" to={EVENT_TIME} />
          <a
            href={FORM_LINK}
            className="block my-3 sm:my-6 px-4 py-2 md:px-8 md:py-4 text-lg sm:text-xl md:text-2xl bg-[oklch(70.4%_0.191_22.216_/_0.3)] relative after:absolute after:border after:w-full after:h-full after:top-2 after:left-2 hover:after:top-1 hover:after:left-1"
          >
            Register!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
