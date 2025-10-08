import FAQClient from './faqClient'
export default async function FAQ(){
    const res = await fetch(
    "https://strapi-backend-alhx.onrender.com/api/career-page?populate[faq][populate]=*",
    // { next: { revalidate: 60 } } 
  );

  if (!res.ok) throw new Error("Failed to fetch FAQ data");

  const data = await res.json();
  const faq:any= data.data.faq;

    return(
        <div className="flex flex-col  py-20 p-4 gap-7 font-bold bg-blue-100 w-screen items-center lg:px-56">
            <div className='flex flex-col gap-5  items-center'>
         <h1 className="text-blue-700 text-lg">{faq.title}</h1>
      
         <p className="text-center text-3xl font-bold ">{faq.desc}</p>
            </div>
         <div>
         <FAQClient list={faq.list}/>
         </div>
        </div>
    )
}