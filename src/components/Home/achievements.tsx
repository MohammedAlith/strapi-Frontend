import React from "react";
import { FaCheckCircle, FaUserShield, FaBriefcase, FaAward } from "react-icons/fa";

interface Achievement {
  id: number;
  title: string;
  value: string;
}

async function fetchAchievements(): Promise<Achievement[]> {
  const res = await fetch(
    "https://strapi-backend-alhx.onrender.com/api/home-page?populate[Achievement][populate]=*",
    { next: { revalidate: 60 } } // ISR cache if desired
  );
  if (!res.ok) {
    throw new Error("Failed to fetch stats");
  }
  const data = await res.json();
  return data?.data?.Achievement || [];
}

export default async function Achievements() {
  const stats = await fetchAchievements();

  // Hardcoded icons in the same order as API
  const icons = [
    <FaCheckCircle className=" text-blue-300" />,
    <FaUserShield className=" text-blue-300" />,
    <FaBriefcase className=" text-blue-300" />,
    <FaAward className=" text-blue-300" />,
  ];

  return (
    <div
      className="bg-blue-50 w-full relative p-20"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
    >
      <div className="flex gap-20 justify-center">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center gap-2">
            <div className="text-5xl">{icons[index]}</div>
            <h3 className="text-3xl font-bold text-gray-800 text-center">{stat.value}</h3>
            <p className=" text-gray-500 text-center text-md">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
