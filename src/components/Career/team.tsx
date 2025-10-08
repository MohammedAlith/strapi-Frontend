import { Star } from "lucide-react";
import { FaQuoteRight } from "react-icons/fa";

interface TeamCard {
  id: number;
  intro: string;
  name: string;
  role: string;
}

interface TeamData {
  title: string;
  desc: string;
  card: TeamCard[];
}

async function  getTeamData(): Promise<TeamData> {
   const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/career-page?populate[teammates][populate]=*`
  //   , {
  //   // Cache revalidation example: optional
  //   next: { revalidate: 60 },
  // }
);
  if (!res.ok) throw new Error("Failed to fetch team data");
  const data = await res.json();
  return data.data.teammates;
}

export default async function Team() {
  const teammates = await getTeamData();

  return (
    <div className="flex flex-col bg-blue-100 bg-fixed py-20 justify-center items-start p-4 gap-15 lg:p-20 lg:items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-3 md:bg-transparent">
        <h1 className="text-blue-500 text-md font-bold uppercase">{teammates.title}</h1>
        <p className="text-center text-gray-800 text-3xl lg:text-5xl font-bold lg:px-40">
          {teammates.desc}
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 bg-blue-100">
        {teammates.card.map((member) => (
          <div key={member.id} className="bg-white shadow-lg px-12 py-15 rounded-md grid gap-8">
            {/* Star Rating */}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative">
              <FaQuoteRight className="absolute -top-1 w-12 h-12 text-gray-200 opacity-50" />
              <p className="relative z-10 text-lg text-gray-500">{member.intro}</p>
            </div>

            {/* Member Info */}
            <div className="flex gap-5 items-center">
              <div className="w-20 h-20">
                <img
                  src="https://sandbox.elemisthemes.com/assets/img/avatars/te1@2x.jpg"
                  className="rounded-full"
                  alt={member.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-gray-700 font-bold text-lg">{member.name}</h1>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
