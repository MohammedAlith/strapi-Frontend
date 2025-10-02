"use client";

import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";

type Slide = {
  title: string;
  desc: string;
  button: string;
};

type Hero = {
  url1: string;
  url2: string;
  url3: string;
  videourl: string;
  slides: {
    slide1: Slide;
    slide2: Slide;
    slide3: Slide;
  };
};

export default function Main() {
  const [current, setCurrent] = useState(0);
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
         const strapiUrl = 'https://strapi-backend-alhx.onrender.com';

      try {
        const res = await fetch(
          `${strapiUrl}/api/home-page?populate[hero][populate]=*`
        );
        const data = await res.json();
        setHero(data.data.hero);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    };
    fetchHero();
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));

  if (!hero) return <div className="text-white text-center py-20">Loading...</div>;

  const slideImages = [hero.url1, hero.url2, hero.url3];
  const slideData = [hero.slides.slide1, hero.slides.slide2, hero.slides.slide3];

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slideImages.map((img, idx) => (
          <div
            key={idx}
            className="flex-none w-screen h-120 sm:h-screen md:h-screen relative flex flex-col items-center md:justify-center md:items-start px-6 md:px-20 pt-16 md:pt-20 lg:pt-32"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')`, filter: "brightness(70%)" }}
            ></div>

            <div className="relative z-10 w-full md:w-lg text-white flex flex-col gap-7 md:gap-6 lg:gap-6 p-4 md:p-8 items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold pt-2 md:pt-0">
                {slideData[idx].title}
              </h2>
              <p className="text-xl md:text-2xl">{slideData[idx].desc}</p>

              {slideData[idx].button === "playIcon" ? (
                <div className="flex justify-center mt-4">
                  <div className="animate-pulse w-20 h-20 flex justify-center items-center bg-white rounded-full">
                    <a
                      href={hero.videourl}
                      className="relative w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300"
                    >
                      <span className="absolute w-full h-full rounded-full bg-white opacity-30 animate-ping"></span>
                      <FaPlay className="text-black text-xl relative z-10" />
                    </a>
                  </div>
                </div>
              ) : (
                <button className="bg-transparent border-2 border-white text-white text-lg px-6 py-3 rounded-full self-center md:self-start">
                  {slideData[idx].button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        <FaArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 flex w-full justify-center gap-3">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-500" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
