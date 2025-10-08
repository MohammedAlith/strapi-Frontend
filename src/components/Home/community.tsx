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
    `${strapiUrl}/api/home-page?populate[community][populate]=*`
    // ,
    // { next: { revalidate: 60 } }
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
     <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 507.4 512"
          className="w-20 h-20 mb-4"
        >
          {/* Puzzle piece fill */}
          <path 
            className="fill-blue-200" 
            d="M257.9 15.2v65.1c-28.7-15.6-64.7-5-80.3 23.8s-5 64.7 23.8 80.3c17.6 9.6 38.9 9.6 56.6 0v65.1h59.9c-8.4-31.6 10.5-64 42.1-72.4 31.6-8.4 64 10.5 72.4 42.1 2.6 9.9 2.6 20.4 0 30.3h59.9V70.7c0-30.7-24.9-55.5-55.5-55.5H257.9z"
          />
          
          {/* Puzzle piece outline */}
          <path 
            className="" 
            d="M436.7 0h-366C31.7 0 0 31.7 0 70.7v370.6c0 39 31.7 70.7 70.7 70.7h188.1c8.4 0 15.2-6.8 15.2-15.1V453c5.5 1 11.2 1.3 16.8 1 17.5-.9 34.2-7.9 47.1-19.9 30.1-28 31.7-75.1 3.7-105.2-23.2-24.8-60.2-30.8-90-14.6-7.3 4-10.1 13.2-6.1 20.6 4 7.4 13.2 10.1 20.6 6.1 7.4-4 15.7-5.8 24.1-5.2 24.3 1.7 42.6 22.8 40.9 47-1.5 21.8-19.8 39.8-41.7 40.8-8.1.4-16.1-1.4-23.2-5.3-2.2-1.2-4.7-1.8-7.3-1.8-8.4 0-15.2 6.8-15.2 15.2v49.9h-173c-22.3 0-40.3-18.1-40.3-40.3V264.6h28.7c-.5 2.6-.8 5.2-1 7.8-2.9 41 28 76.6 69 79.5 1.8.1 3.6.2 5.3.2 18.8.1 37-7.1 50.7-20 24.8-23.2 30.8-60.1 14.6-89.9-.1-.2-.2-.3-.3-.5-4.1-7.3-13.4-9.9-20.7-5.7-7.3 4.1-9.9 13.4-5.7 20.7 4 7.4 5.8 15.8 5.2 24.2-1.7 24.3-22.8 42.5-47.1 40.8-21.8-1.5-39.8-19.8-40.8-41.7-.4-8.1 1.4-16.1 5.2-23.3 1.2-2.2 1.9-4.7 1.9-7.3 0-8.4-6.8-15.2-15.2-15.2H30.4V70.7c0-22.3 18.1-40.3 40.3-40.3h172v28.7c-8.7-1.6-17.6-1.6-26.2 0-40.5 7.2-67.4 45.9-60.1 86.4s45.9 67.4 86.4 60.1v43.9c0 8.4 6.8 15.2 15.2 15.2h59.9c1.6 0 3.2-.3 4.7-.7 8-2.6 12.3-11.2 9.7-19.2-.6-2.5-1-5.1-1.2-7.7-1.5-24.3 16.9-45.2 41.2-46.7.9-.1 1.8-.1 2.7-.1 3.8 0 7.6.5 11.3 1.5 23.5 6.2 37.5 30.4 31.3 53.9-.3 1.3-.5 2.6-.5 3.9 0 8.4 6.8 15.2 15.2 15.2h59.9c8.4 0 15.2-6.8 15.2-15.2V70.7c-.1-39-31.7-70.7-70.7-70.7zM477 234.2h-27.5c0-41.1-33.3-74.4-74.4-74.4-1.5 0-3 0-4.6.1-36 2.2-65.9 30.9-69.5 66.8-.2 2.5-.4 5-.4 7.5h-27.5v-49.9c0-2.5-.6-5-1.8-7.3-4-7.4-13.2-10.1-20.6-6.1-7.4 4-15.7 5.8-24.1 5.2-24.3-1.7-42.6-22.8-40.9-47 1.5-21.8 19.8-39.8 41.7-40.8 8.1-.4 16.1 1.4 23.2 5.3 2.2 1.2 4.7 1.8 7.3 1.8 8.4 0 15.2-6.8 15.2-15.2V30.4h163.6c22.3 0 40.3 18.1 40.3 40.3v163.5z"
          />
        </svg>

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
