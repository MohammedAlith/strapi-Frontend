"use client";
import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const [pricing, setPricing] = useState<any>(null);

  useEffect(() => {
    async function fetchPricing() {
      const res = await fetch("https://strapi-backend-alhx.onrender.com/api/service-page?populate=Pricing", {
        cache: "no-store",
      });
      const json = await res.json();
      setPricing(json.data.Pricing);
    }
    fetchPricing();
  }, []);

  if (!pricing) return <p>Loading...</p>;

  return (
    <div className="grid gap-12">
      {/* Switcher */}
      <div className="flex items-center lg:justify-end gap-3">
        <p className="mb-0">{pricing.choose.type1}</p>
        <div
          onClick={() => setYearly(!yearly)}
          className="relative flex items-center w-14 h-7 bg-gray-200 rounded-full cursor-pointer"
        >
          <div
            className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-blue-500 transition-transform duration-300 ${
              yearly ? "translate-x-7" : ""
            }`}
          ></div>
        </div>
        <p className="mb-0">
          {pricing.choose.type2}{" "}
          <span className="text-red-500">({pricing.choose.saving})</span>
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-8 relative">
        {/* Premium Plan */}
        <div className="bg-white rounded-2xl p-24 md:p-20 lg:p-16 border border-gray-300">
          <div className="text-4xl font-bold text-gray-700">
            {yearly ? pricing.pricecard.card1.amount2 : pricing.pricecard.card1.amount1}
          </div>
          <h4 className="mt-4 text-xl font-semibold">{pricing.pricecard.card1.plan}</h4>

          <ul className="mt-6 mb-8 flex flex-col gap-3 text-gray-700">
            {Object.values(pricing.pricecard.card1.list).map((item: any, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-50">
                  {/* ✅ Last item different icon */}
                  {i === 4 ? (
                    <FaTimes className="text-red-500" />
                  ) : (
                    <FaCheck className="text-blue-500" />
                  )}
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block w-full text-center bg-blue-500 text-white font-semibold py-3 mt-2 rounded-full"
          >
            {pricing.pricecard.card1.button}
          </a>
        </div>

        {/* Corporate Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-24 md:p-20 lg:p-16 border border-gray-300 relative">
          <div className="text-4xl font-bold text-gray-700">
            {yearly ? pricing.pricecard.card2.amount2 : pricing.pricecard.card2.amount1}
          </div>
          <h4 className="mt-4 text-xl font-semibold">{pricing.pricecard.card2.plan}</h4>

          <ul className="mt-6 mb-8 space-y-3 text-gray-700">
            {Object.values(pricing.pricecard.card2.list).map((item: any, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-50">
                  <FaCheck className="text-blue-500" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block w-full text-center bg-blue-500 text-white font-semibold py-3 rounded-full hover:scale-105 transition"
          >
            {pricing.pricecard.card2.button}
          </a>
        </div>
      </div>
    </div>
  );
}
