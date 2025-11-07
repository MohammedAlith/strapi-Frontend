import AboutSection from "../Home/aboutSection";
import Achievements from "../Home/achievements";
import ContactSection from "../Home/contact";
import ProfessionalTeams from "../Home/professionalTeams/professionalTeams";
import TeamsServer from "../Home/teams/teamsServer";
import WorkSection from "../Home/WorkSection";

export const dynamic = "force-static";

export default async function main() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data: any = null;

  try {
    const res = await fetch(`${strapiUrl}/api/aboutpage?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch About data:", res.status);
      return (
        <p className="text-center py-16 text-red-500">
          About page not available (HTTP {res.status})
        </p>
      );
    }

    data = await res.json();
  } catch (err) {
    console.error("❌ Error fetching About data:", err);
    return (
      <p className="text-center py-16 text-red-500">
        Failed to load About page data.
      </p>
    );
  }

  const about = data?.data ?? null;

  if (!about) {
    return (
      <p className="text-center py-16 text-gray-500">
        About page data not found.
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-start md:items-center py-8 md:py-24 pb-0 bg-white text-center gap-5">
        <div className="p-4 flex flex-col gap-3">
          <h1 className="text-gray-700 text-[32px] font-bold">
            {about.title || "No title"}
          </h1>
          <p className="text-gray-500 text-2xl">
            {about.desc || "No description available"}
          </p>
        </div>

        {about.imgurl ? (
          <div className="w-screen h-full slanted-hero">
            <img
              src={about.imgurl}
              alt="About section"
              className="w-full object-cover"
            />
          </div>
        ) : (
          <p className="text-gray-400">No image found</p>
        )}
      </div>

      <div className="pt-16 md:pt-0">
        <AboutSection />
        <WorkSection />
        <TeamsServer />
        <ProfessionalTeams />
        <Achievements />
        <ContactSection />
      </div>
    </>
  );
}
