import FAQClient from './faqClient'
export default function FAQ(){
    return(
        <div className="flex flex-col  py-20 p-4 gap-7 font-bold bg-blue-100 w-screen items-center lg:px-56">
            <div className='flex flex-col gap-5  items-center'>
         <h1 className="text-blue-700 text-lg">FAQ</h1>
      
         <p className="text-center text-3xl font-bold ">If you don't see an answer to your question, you can send us an email from our contact form.</p>
            </div>
         <div>
         <FAQClient />
         </div>
        </div>
    )
}