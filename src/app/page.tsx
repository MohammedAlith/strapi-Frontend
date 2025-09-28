import Image from "next/image";

import AboutSection from '@/components/Home/aboutSection'
import WorkSection from "@/components/Home/WorkSection";
import Teams from "@/components/Home/teams/teamsServer";
import ProfessionalTeams from "@/components/Home/professionalTeams";
import Achievements from "@/components/Home/achievements";
import Contact from "@/components/Home/contact";
import Community from "@/components/Home/community";


export default function Home() {
  return (
    <div className=" w-screen  text-black  pt-36 ">
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
