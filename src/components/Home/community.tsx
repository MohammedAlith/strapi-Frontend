// app/components/CommunitySection.tsx
import React from "react";

interface CommunityButton {
  email: string;
  submit: string;
}

interface CommunityImg {
  imgurl: string;
}

interface CommunityData {
  title: string;
  desc: string;
  button: CommunityButton;
  img: CommunityImg;
}

async function fetchCommunity(): Promise<CommunityData | null> {
  const res = await fetch(
    "https://strapi-backend-alhx.onrender.com/api/home-page?populate[community][populate]=*",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.community || null;
}

export default async function CommunitySection() {
  const community = await fetchCommunity();
  if (!community) return null;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50 px-4 py-20">
      {/* Icon */}
      <img
        src={community.img.imgurl}
        height={50}
        width={50}
        className="mb-5"
        alt="Community Icon"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        {community.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-500 text-center max-w-2xl mb-8">
        {community.desc}
      </p>

      {/* Email Input + Button */}
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder={community.button.email}
          className="flex-1 border border-r-0 rounded-l-xl px-4 py-3 focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-r-xl hover:bg-blue-700 transition">
          {community.button.submit}
        </button>
      </div>
    </div>
  );
}
