import Head from './head'
import Lists from './lists'
export default function ServiceMain(){
    return(
        <div className=' p-20 px-0 pt-0 pb-0'>
         <Head/>
        <div className='relative -top-40 md:-top-50 '>
        <Lists/>
        </div>
        </div>
    )
}