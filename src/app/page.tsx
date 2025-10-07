import Image from "next/image";
// import Main  from "@/components/Home/mainpage";
import AboutSection from '@/components/Home/aboutSection'
import WorkSection from "@/components/Home/WorkSection";
import Teams from "@/components/Home/teams/teamsServer";
import ProfessionalTeams from "@/components/Home/professionalTeams/professionalTeams";
import Achievements from "@/components/Home/achievements";
import Contact from "@/components/Home/contact";
import Community from "@/components/Home/community";
import Hero from "@/components/Home/herosection/heroServer";
// import Hero from '@/components/Home/hero';

export const dynamic = "force-static"; 

export default function Home() {
  return (
    <div className=" w-full  text-black ">
      <Hero/>
      {/* <Hero/> */}
      {/* <Main/> */}
      <AboutSection/>
      <WorkSection/>
      <Teams/>
      <ProfessionalTeams/>
      <Achievements/>
      <Contact/>
     <Community/>
    </div>
  );
}
