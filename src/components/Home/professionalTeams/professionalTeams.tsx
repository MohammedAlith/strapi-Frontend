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
    <div className="grid p-10 md:p-20 gap-5 relative">
      {/* Header */}
      <div className="flex flex-col gap-5 justify-center items-center">
        <img
          src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/team.svg"
          alt="about-svg"
          width={60}
          height={120}
        />
        <h1 className="text-2xl md:text-4xl text-center text-gray-700 font-semibold max-w-3xl">
          Save your time and money by choosing our professional team.
        </h1>
      </div>

      {/* Carousel */}
      <ProfessionalTeamsCarousel teams={teams} />
    </div>
  );
}
