import { FaPlay } from "react-icons/fa";

async function getModelData() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/service-page?populate[model][populate]=*`, 
  //   {
  //   next: { revalidate: 60 },
  // }
);

  if (!res.ok) {
    throw new Error("Failed to fetch model section data");
  }

  const json = await res.json();
  return json.data.model;
}

export default async function Model() {
  const data = await getModelData();

  return (
    <div
      style={{
        backgroundImage: `url("${data.img?.url}")`,
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
      }}
      className="bg-cover bg-center bg-fixed relative flex flex-col justify-center items-center gap-8 py-44"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-pulse w-20 h-20 flex justify-center items-center bg-white rounded-full">
          <a
            href={data.videourl}
            className="relative w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <span className="absolute w-full h-full rounded-full bg-white opacity-30 animate-ping"></span>
            <FaPlay className="text-black text-xl relative z-10 ml-1" />
          </a>
        </div>

        <h2 className="text-white text-center font-bold text-3xl max-w-2xl">
          {data.desc}
        </h2>
      </div>
    </div>
  );
}
