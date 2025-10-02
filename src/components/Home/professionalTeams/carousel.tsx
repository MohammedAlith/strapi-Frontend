"use client";

import { useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  intro: string;
  img: string;
}

export default function ProfessionalTeamsCarousel({ teams }: { teams: TeamMember[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // max starting index = teams.length - itemsPerSlide
  const maxIndex = Math.max(teams.length - itemsPerSlide, 0);

  const Card = ({ team }: { team: TeamMember }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md py-8 px-8 grid gap-4 flex-shrink-0 relative z-10 justify-start">
      <img
        src={team.img}
        alt={team.name}
        className="rounded-full w-28 h-28  flex justify-centerS md:justify-center md:items-center md:mx-auto object-cover"
      />
      <h1 className="text-gray-700 text-xl font-bold text-start md:text-center">{team.name}</h1>
      <p className="text-gray-400 text-md text-start md:text-center">{team.role}</p>
      <p className="text-gray-500 text-md text-start md:text-center">{team.intro}</p>
      <div className="flex gap-5 justify-start md:justify-center mt-2">
        <a href="#"><FaTwitter className="text-sky-400" /></a>
        <a href="#"><FaFacebookF className="text-blue-500" /></a>
        <a href="#"><FaDribbble className="text-rose-500" /></a>
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 transition-transform duration-500 relative">
      {/* Background Decoration */}
      <div
        className="absolute w-24 h-24 rounded-full z-0 hidden md:block"
        style={{
          top: "-2rem",
          left: "-3rem",
          backgroundImage:
            "repeating-linear-gradient(45deg, #f87171 0px, #f87171 2px, transparent 2px, transparent 6px)",
          backgroundColor: "#fff",
        }}
      ></div>

      {/* Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {teams.slice(activeIndex, activeIndex + itemsPerSlide).map((team, idx) => (
          <Card key={idx} team={team} />
        ))}
      </div>

      
     <div className="flex gap-3 mt-5 justify-center">
  {Array.from({ length: maxIndex + 1 }, (_, idx) => (
    <label key={idx} className="relative cursor-pointer">
      <input
        type="radio"
        name="carousel"
        checked={activeIndex === idx}
        onChange={() => setActiveIndex(idx)}
        className="appearance-none w-2 h-2 rounded-full bg-gray-300"
      />
      {activeIndex === idx && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-1 h-1 rounded-full bg-white"></span>
        </span>
      )}
    </label>
  ))}
</div>


    </div>
  );
}
