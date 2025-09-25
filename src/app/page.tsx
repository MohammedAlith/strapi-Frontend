import Image from "next/image";

import AboutSection from '@/components/Home/aboutSection'
import WorkSection from "@/components/Home/WorkSection";
export default function Home() {
  return (
    <div className="flex flex-col w-screen  text-black p-20 pt-36 gap-24">
      <AboutSection/>
      <WorkSection/>
    </div>
  );
}
