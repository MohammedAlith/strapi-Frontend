import AboutSection from "../Home/aboutSection"
import Achievements from "../Home/achievements"
import ContactSection from "../Home/contact"
import ProfessionalTeams from "../Home/professionalTeams/professionalTeams"
import TeamsServer from "../Home/teams/teamsServer"
import WorkSection from "../Home/WorkSection"
export const dynamic = "force-static"; 
 type aboutData={
   imgurl: string;
  title: string;
  desc: string;
 }
export default async function main(){
      const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  const res = await fetch(`${strapiUrl}/api/aboutpage?populate=*`
    , {next: { revalidate: 60 },}
  );
  const data = await res.json();

  if(data==null){
    return <p className="text-center py-16">Hero data not available</p>;
  }

    return(
        <>
        <div className="flex flex-col  justify-center items-start md:items-center py-8 md:py-24  pb-0  bg-white text-center gap-5">
            <div className="p-4 flex flex-col gap-3">
           <h1 className="text-gray-700 text-[32px] font-bold">{data.data?.title}</h1> 
           <p className="text-gray-500 text-2xl">{data.data?.desc}</p>
           </div>
           <div className="w-screen h-full slanted-hero "
           
           >
           
            <img src={data.data?.imgurl} alt="Slanted"
    className="w-full object-cover"/>
           </div>

          

        </div>
        <div className="pt-16 md:pt-0">
        <AboutSection />
        <WorkSection/>
        <TeamsServer/>
        <ProfessionalTeams/>
        <Achievements/>
        <ContactSection/>
        </div>

        </>
    )
}