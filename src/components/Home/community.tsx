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
  const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  const res = await fetch(
    `${strapiUrl}/api/home-page?populate[community][populate]=*`,
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
    <div className="flex flex-col items-center  w-screen  bg-blue-50 p-4 pt-10 pb-20 md:p-28 md:pb-10">
      {/* Icon */}
      <img
        src={community.img.imgurl}
        height={50}
        width={50}
        className="mb-5"
        alt="Community Icon"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center  mb-4">
        {community.title}
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-500 text-center w-full lg:max-w-2xl mb-8 indent-8">
        {community.desc}
      </p>

      {/* Email Input + Button */}
      <div className="flex w-full justify-center">
        <input
          type="text"
          placeholder={community.button.email}
          className=" border border-r-0 rounded-l-xl px-6 py-3 w-55 md:w-70"
        />
        <button className="bg-blue-700 text-white px-6 py-3 border border-l-0 rounded-r-xl ">
          {community.button.submit}
        </button>
      </div>
    </div>
  );
}
