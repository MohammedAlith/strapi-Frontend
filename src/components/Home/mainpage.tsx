"use client";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Main() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* Slide 1 */}
        <div className="flex-none w-screen h-120 sm:h-screen md:h-screen relative flex flex-col items-center md:justify-center md:items-start px-6 md:px-20 pt-16 md:pt-20 lg:pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://sandbox.elemisthemes.com/assets/img/photos/bg7.jpg')",
              filter: "brightness(90%)",
            }}
          ></div>

          <div className="relative z-10 w-full md:w-lg text-white flex flex-col gap-7 md:gap-6 lg:gap-6 p-4 md:p-8 items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold  pt-2 md:pt-0">
              We bring solutions to make life easier.
            </h2>
            <p className="text-xl md:text-2xl">
              We are a creative company that focuses on long-term relationships with customers.
            </p>
            <button className="bg-transparent border-2 border-white text-white text-lg px-6 py-3 rounded-full self-center md:self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex-none w-screen h-auto md:min-h-screen relative flex flex-col items-center md:justify-center px-6 pt-16 md:pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://sandbox.elemisthemes.com/assets/img/photos/bg8.jpg')",
              filter: "brightness(70%)",
            }}
          ></div>

          <div className="relative z-10 max-w-2xl text-center md:text-left text-white flex flex-col gap-6 md:gap-7 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-6xl font-bold">
              We are trusted by over a million customers.
            </h2>
            <p className="text-xl md:text-2xl">
              Here a few reasons why our customers choose us.
            </p>

            <div className="flex justify-center  mt-4">
              <div className="animate-pulse w-20 h-20 flex justify-center items-center bg-white rounded-full">
                <a
                  href="https://sandbox.elemisthemes.com/assets/media/movie.mp4"
                  className="relative w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <span className="absolute w-full h-full rounded-full bg-white opacity-30 animate-ping "></span>
                  <FaPlay className="text-black text-xl relative z-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex-none w-screen h-auto md:min-h-screen relative flex flex-col items-center md:justify-center px-6 pt-16 md:pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://sandbox.elemisthemes.com/assets/img/photos/bg9.jpg')",
              filter: "brightness(70%)",
            }}
          ></div>

<div className="relative z-10 text-white flex flex-col text-center gap-4 md:gap-6 items-start md:items-center lg:items-end  md:text-left w-full lg:max-w-2xl lg:-right-50 md:px-6 ">
  <h2 className="text-4xl md:text-6xl font-bold pt-8 md:pt-0">
    Just sit and relax.
  </h2>
  <p className="text-xl md:text-2xl p-0 lg:ps-42">
    We make sure your spending is stress free so that you can have the perfect control.
  </p>
  <button className="bg-transparent border-2 border-white text-white text-lg font-semibold px-6 py-3 mt-4 rounded-full self-center">
    Contact Us
  </button>
</div>


        </div>
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
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-blue-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
