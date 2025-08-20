import React from "react";
import Card from "./Cards";

function Speakers() {
  const speakers = [
    {
      image: "/Placeholder_Person.jpg",
      name: "Coming Soon",
      designation: "Coming Soon",
      linkedin: "https://ieee-jaduniv.in",
    },
    {
      image: "/Placeholder_Person.jpg",
      name: "Coming Soon",
      designation: "Coming Soon",
      linkedin: "https://ieee-jaduniv.in",
    },
    {
      image: "/Placeholder_Person.jpg",
      name: "Coming Soon",
      designation: "Coming Soon",
      linkedin: "https://ieee-jaduniv.in",
    },

    // Add more speakers as needed...
  ];

  return (
    <div id="speakers">
      <h1 className="w-full text-center text-5xl sm:text-7xl font-extrabold mt-3">SPEAKERS</h1>

      <div className="flex justify-center items-center min-h-screen w-full p-4  box-border">
        <div className="grid gap-8 w-[90%] max-w-7xl sm:grid-cols-3 justify-items-center">
          {speakers.map((speaker, idx) => (
            <Card
              key={idx}
              image={speaker.image}
              name={speaker.name}
              designation={speaker.designation}
              linkedin={speaker.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
