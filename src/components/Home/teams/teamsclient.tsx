"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

type TeamDetail = {
  id: number;
  intro: string;
  name: string;
  role: string;
};

export default function TeamsCarousel({ items }: { items: TeamDetail[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px] bg-blue-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:pt-24 md:pt-10 gap-6">
      {/* Carousel Content */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full flex flex-col gap-3"
            >
              <div className="relative">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-gray-300 absolute text-7xl -left-4 -top-2"
                />
                <p className="relative z-10 text-gray-700 text-xl font-medium leading-7">
                  {item.intro}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-gray-700 text-lg">
                  {item.name}
                </p>
                <p className="text-gray-500 text-md">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Radios */}
      <div className="flex gap-3">
        {items.map((_, idx) => (
          <label key={idx} className="relative cursor-pointer">
            <input
              type="radio"
              name="carousel"
              checked={activeIndex === idx}
              onChange={() => setActiveIndex(idx)}
              className="appearance-none w-3 h-3 rounded-full bg-gray-300"
            />
            {activeIndex === idx && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
