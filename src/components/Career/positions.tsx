// JobPositions.tsx
import React from "react";

export default async function JobPositions() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  // Fetch data from API
  const res = await fetch(`${strapiUrl}/api/career-page?populate=position.lists`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch job positions");
  }

  const json = await res.json();
  const positionData = json.data.position;
  const jobs = positionData.lists;

  // Map badge type to colors (same as static version)
  const badgeColors: Record<string, { bg: string; text: string }> = {
    "Full Time": { bg: "bg-blue-100", text: "text-blue-600" },
    "Part Time": { bg: "bg-violet-100", text: "text-violet-600" },
    Remote: { bg: "bg-cyan-100", text: "text-cyan-600" },
  };

  // Map job logo to bg color (same as static)
  const logoColors: string[] = [
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold uppercase text-blue-600 mb-3 tracking-wider">
              {positionData.title}
            </h2>
            <h3 className=" text-2xl md:text-3xl font-bold mb-10 px-4 md:px-16">
              {positionData.desc}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job:any, idx:any) => {
            const badgeColor = badgeColors[job.type] || { bg: "bg-gray-100", text: "text-gray-600" };
            const logoColor = logoColors[idx % logoColors.length];

            return (
              <a
                key={job.id}
                href="#"
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform h-full"
              >
                <div className="p-6 flex items-start gap-4">
                  <div>
                    <span className={`${logoColor} text-white w-14 h-14 flex items-center justify-center rounded-full text-xl font-semibold`}>
                      {job.logo}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className={`${badgeColor.bg} ${badgeColor.text} px-3 py-1 rounded-full text-sm font-medium inline-block mb-2`}>
                      {job.type}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{job.role}</h4>
                    <p className="text-gray-600 mb-0">{job.loc}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{positionData.ques}</h2>
            <p className="text-lg text-gray-600 mb-6 px-4 md:px-12">{positionData.ans}</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {positionData.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
