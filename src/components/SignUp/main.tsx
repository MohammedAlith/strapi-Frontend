import Form from "./form"
import Head from "./head"
export const dynamic = "force-static";
export default function Main(){

    return(
        <div >
            <Head/>
            <div className="relative bottom-47 md:bottom-70">
                   <Form/>
            </div>
         
            </div>
    )
}