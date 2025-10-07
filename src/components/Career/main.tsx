import Benefits from "./benefits";
import FAQ from "./faq";
import Head from "./head";
import JobPositions from "./positions";
import Team from "./team";
export const dynamic = "force-static";
export default function Main(){
return(
    <div>
     <Head/>
     <div className="relative bottom-40 md:bottom-50 lg:bottom-50">
     <Benefits/>
     </div>
    <Team/>
    <JobPositions/>
    <FAQ/>
   
     
    </div>
)
}