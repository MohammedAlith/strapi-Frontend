import Form from "./formServer"
import Head from "./head"
export const dynamic = "force-static";
export default function Main(){
    return(
        <div >
            <Head/>
            <div className="relative bottom-47">
                   <Form/>
            </div>
         
            </div>
    )
}