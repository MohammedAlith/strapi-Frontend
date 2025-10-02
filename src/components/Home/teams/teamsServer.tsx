import TeamsCarousel from "./teamsclient";

type TeamDetail = {
  id: number;
  intro: string;
  name: string;
  role: string;
};

type TeamImage = {
  id: number;
  imgurl: string;
};

type TeamsData = {
  id: number;
  img: TeamImage;
  details: TeamDetail[];
};

export default async function TeamsServer() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data: TeamsData | null = null;

  try {
    const res = await fetch(
      `${strapiUrl}/api/home-page?populate[Teams][populate]=*`,
      {
        next: { revalidate: 60 }, // ISR every 60s
      }
    );
    const json = await res.json();
    data = json?.data?.Teams || null;
  } catch (error) {
    console.error("Error fetching Teams data:", error);
  }

  if (!data) return <p className="text-gray-500">No Teams data found.</p>;

  return (
    <div
      className="relative bg-blue-50 md:p-10 lg:p-32 pt-24 p-4 md:pb-0 lg:pb-0 overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)" }}
    >
      <div className="grid md:grid-cols-2">
        {/* Image (server-rendered) */}
        <div className="relative lg:ps-24 md:pb-0 hidden md:block">
          <div className="w-56 h-56 rounded-full bg-blue-100 absolute hidden lg:block top-22 right-20"></div>
          <img
            src={data.img.imgurl}
            alt="team"
            className="lg:relative z-10 md:w-3/4 md:h-full"
          />
        </div>

        {/* Carousel (client-rendered for interactivity) */}
        <TeamsCarousel items={data.details} />
      </div>
    </div>
  );
}
