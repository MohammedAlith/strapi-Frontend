import Head from './head'
import Lists from './lists'
import ImageSection from './imageSection'
import Step from './steps'
import Model from './model'
import Pricing from './price'
import CustomerService from './customerService'
export default function ServiceMain(){
    return(
        <div className=' p-20 px-0 pt-0 pb-0'>
         <Head/>
        <div className='relative -top-40 md:-top-50 lg:-top-35'>
        <Lists/>
        </div>
        <ImageSection/>
        <Step/>
        <Model/>
        <Pricing/>
        <CustomerService/>
        </div>
    )
}