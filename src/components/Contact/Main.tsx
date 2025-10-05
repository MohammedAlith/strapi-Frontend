import Head from '@/components/Contact/Heading'
import Map from './map'
import Form from './form'
import Achievements from './achievements'
export default function MainContact(){
    return(
        <div>
            <div>
                <Head />
            </div>
        
        <div className='relative bottom-55 md:bottom-70  lg:bottom-85 '>
                <Map />
            </div>
         <Form/>
         <Achievements/>
            
        </div>
        
    )
}