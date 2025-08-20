import React from "react";
import linkedinIcon from "../assets/linkedin.svg";

const Card = ({ image, name, designation, linkedin }) => (
  <div className="z-10 bg-background border border-red rounded-lg pt-4 w-full max-w-xs md:max-w-sm lg:max-w-md shadow-md text-center flex-1 hover:bg-zinc-900/10 duration-300">
    <img src={image} alt={name} className="w-[92%] aspect-square rounded-md object-cover object-top mb-3 mx-auto " />
    <h3 className="mt-2 mb-1 text-2xl uppercase">{name}</h3>
    <p className="text-white mb-3 text-lg pt-1">{designation}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 font-bold hover:underline"
    >
      <div className="w-10 h-10 align-middle mx-auto mb-3">
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          style={{ filter: "invert(1)" }}
          className="w-8 mx-auto mb-3 hover:w-9 transition-all duration-300 hover:brightness-0 hover:invert"
        />
      </div>
    </a>
  </div>
);

export default Card;
