// app/components/TeamsServer.tsx
import TeamsClient from "./teamsclient";

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

type ApiResponse = {
  data: {
    Teams: TeamsData | null;
  };
};

export default async function TeamsServer() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data: TeamsData | null = null;

  try {
    const res = await fetch(`${strapiUrl}/api/home-page?populate[Teams][populate]=*`, {
      next: { revalidate: 60 },
    });
    const json = await res.json();
    data = json.data.Teams;
  } catch (error) {
    console.error("Error fetching Teams data:", error);
  }

  if (!data) return <p className="text-gray-500">No Teams data found.</p>;

  return <TeamsClient items={data.details} imgUrl={data.img.imgurl} />;
}
