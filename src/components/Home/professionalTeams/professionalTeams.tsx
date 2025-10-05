import ProfessionalTeamsCarousel from "./carousel";

type TeamDetail = {
  name: string;
  role: string;
  intro: string;
};

type TeamImage = {
  imgurl: string;
};

type TeamsData = {
  details: TeamDetail[];
  Imgs: TeamImage[];
};

export default async function ProfessionalTeamsServer() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  let teams: { name: string; role: string; intro: string; img: string }[] = [];

  try {
    const res = await fetch(
      `${strapiUrl}/api/home-page?populate[teamsprofessional][populate]=*`,
      { next: { revalidate: 60 } }
    );
    const json = await res.json();
    const data: TeamsData | null = json?.data?.teamsprofessional || null;

    if (data) {
      teams = data.details.map((detail, index) => ({
        name: detail.name,
        role: detail.role,
        intro: detail.intro,
        img: data.Imgs[index]?.imgurl || "",
      }));
    }
  } catch (err) {
    console.error("Error fetching Professional Teams:", err);
  }

  if (!teams.length) {
    return <p className="text-gray-500">No Professional Teams data found.</p>;
  }

  return (
    <div className="grid p-4 md:p-20 pt-18 gap-5 relative">
      {/* Header */}
      <div className="flex flex-col gap-5 justify-start md:justify-center items-center">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 409.6 356.2"
        className="w-20 h-20 mb-4"
      >
        {/* Fill paths - using Tailwind's fill utilities */}
        <path 
          className="fill-blue-200" 
          d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
        />
        
        <path 
          className="fill-blue-200" 
          d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
        />
        
        {/* Stroke paths - using Tailwind's fill utilities for stroke color */}
        <path 
          className="" 
          d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
        />
        
        <path 
          className="" 
          d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
        />
        
        <path 
          className="" 
          d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
        />
        
        <path 
          className="" 
          d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
        />
        
        <path 
          className="" 
          d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
        />
      </svg>


        <h1 className="text-2xl md:text-4xl md:text-center text-gray-700 font-semibold max-w-3xl">
          Save your time and money by choosing our professional team.
        </h1>
      </div>

      {/* Carousel */}
      <ProfessionalTeamsCarousel teams={teams} />
    </div>
  );
}
