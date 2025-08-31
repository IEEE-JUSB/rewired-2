import React from "react";
import { useScramble } from "use-scramble";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import { Link } from "react-router-dom";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Hero() {
  const { ref, replay } = useScramble({ text: "Rewired 2.0", speed: 0.56, step: 1 });
  const EVENT_TIME = new Date(2025, 8, 13, 10, 0).getTime();

  return (
    <section className="min-h-[90svh] w-full p-6 relative bg-transparent after:block after:absolute after:left-0 after:top-0 after:opacity-15 after:w-full after:h-full after:bg-[url('assets/hero-photo.png')] after:bg-center after:bg-no-repeat after:bg-cover">
      <div className="relative z-10">
        <h1
          ref={ref}
          onMouseOver={replay}
          className="w-full py-6 sm:py-16 whitespace-nowrap uppercase text-center text-5xl sm:text-6xl lg:text-9xl"
        ></h1>
        <p className="w-full py-3 sm:py-6 text-center text-2xl sm:text-6xl text-shadow-md relative z-0">
          #Countdown
        </p>
        <div className="flex flex-col w-full place-items-center">
          <div className="w-full sm:w-1/2 flex justify-center my-8">
            <FlipClockCountdown className="flipclock" to={EVENT_TIME} />
          </div>
          <Link
            to="/register"
            className="block my-6 px-8 py-4 text-xl md:text-2xl bg-[oklch(70.4%_0.191_22.216_/_0.3)] relative after:absolute after:border after:w-full after:h-full after:top-2 after:left-2 hover:after:top-1 hover:after:left-1"
          >
            Register!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
