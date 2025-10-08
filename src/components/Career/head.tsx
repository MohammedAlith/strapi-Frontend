// app/head.tsx or components/Head.tsx
import React from "react";

type MainData = {
  title: string;
  desc: string;
};

type APIResponse = {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Main: MainData;
  };
};

export default async function Head() {
   const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/career-page?populate[Main][populate]=*`, {
    next: { revalidate: 60 }, // fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json: APIResponse = await res.json();
  const main = json.data.Main;

  return (
    <div className="bg-blue-50 p-4 py-20 pb-56 lg:py-56 lg:p-56 lg:pt-24 flex flex-col justify-center items-center gap-3">
      <h1 className="text-blue-500 text-lg font-bold uppercase">{main.title}</h1>
      <p className="text-center text-gray-800 text-3xl lg:text-5xl font-bold">
        {main.desc}
      </p>
    </div>
  );
}
