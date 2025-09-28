"use client";

import { useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  intro: string;
  img: string;
}

export default function ProfessionalTeams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [showCircle, setShowCircle] = useState(true);
  const [loading, setLoading] = useState(true); // 

  // Fetch from Strapi API
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch(
          "https://strapi-backend-alhx.onrender.com/api/home-page?populate[teamsprofessional][populate]=*",
          { next: { revalidate: 60 } }
        );
        const json = await res.json();
        const data = json?.data?.teamsprofessional;

        if (data) {
          const teamCards = data.details.map(
            (detail: any, index: number): TeamMember => ({
              name: detail.name,
              role: detail.role,
              intro: detail.intro,
              img: data.Imgs[index]?.imgurl || "",
            })
          );
          setTeams(teamCards);
        }
      } catch (err) {
        console.error("Error fetching teams:", err);
      } finally {
        setLoading(false); 
      }
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    let lockedDirection: "up" | "down" | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY + 5) {
        if (lockedDirection !== "down") {
          setShowCircle(false);
          lockedDirection = "down";
        }
      } else if (currentScrollY < prevScrollY - 5) {
        if (lockedDirection !== "up") {
          setShowCircle(true);
          lockedDirection = "up";
        }
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create slides (3 per view)
  const slides = [
    teams.slice(0, 3),
    teams.slice(1, 4),
    teams.slice(2, 5),
    teams.slice(3, 6),
  ];

  const Card = ({ team }: { team: TeamMember }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-12 grid gap-5 flex-shrink-0 w-80 relative z-10">
      <img
        src={team.img}
        alt={team.name}
        className="rounded-full w-28 h-28 mx-auto object-cover"
      />
      <h1 className="text-gray-700 text-xl font-bold text-center">{team.name}</h1>
      <p className="text-gray-400 text-md text-center">{team.role}</p>
      <p className="text-gray-500 text-md text-center">{team.intro}</p>
      <div className="flex gap-5 justify-center mt-2">
        <a href="#"><FaTwitter className="text-sky-400" /></a>
        <a href="#"><FaFacebookF className="text-blue-500" /></a>
        <a href="#"><FaDribbble className="text-rose-500" /></a>
      </div>
    </div>
  );

  // 🔹 Show Loader Screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-blue-500  rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid p-20 gap-5 relative">
      {/* Header */}
      <div className="flex flex-col gap-5 justify-center items-center">
        <img
          src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/team.svg"
          alt="about-svg"
          width={60}
          height={120}
        />
        <h1 className="text-4xl text-center text-gray-700 font-semibold mx-60">
          Save your time and money by choosing our professional team.
        </h1>
      </div>

      {/* Carousel */}
      <div className="flex gap-8 transition-transform duration-500 relative">
        <div
          className={`absolute w-24 h-24 rounded-full z-0 transition-all duration-500 ease-out ${
            !showCircle ? "translate-y-0" : "translate-y-0 "
          }`}
          style={{
            top: "-2rem",
            left: "-3rem",
            backgroundImage:
              "repeating-linear-gradient(45deg, #f87171 0px, #f87171 2px, transparent 2px, transparent 6px)",
            backgroundColor: "#fff",
          }}
        ></div>

        {slides[activeIndex]?.map((team, idx) => (
          <Card key={idx} team={team} />
        ))}
      </div>

      {/* Carousel Buttons */}
      <div className="flex justify-center gap-3 mt-5">
        {slides.map((_, idx) => (
          <label key={idx} className="relative cursor-pointer">
            <input
              type="radio"
              name="carousel"
              checked={activeIndex === idx}
              onChange={() => setActiveIndex(idx)}
              className="appearance-none w-4 h-4 rounded-full bg-gray-300"
            />
            {activeIndex === idx && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
