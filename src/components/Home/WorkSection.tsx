type Worksvg={
  url:string
}

type Description={
 desc1:string
 desc2:string
}
type Steps={
    Title:string
    description:string
    stepno:string
  }




type WorkSection = {
  WorkSection:{
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  worksvg:Worksvg
  heading: string;
  title: string;
  intro: string;
  desc:Description
  button: string;
  steps:Steps[];
}
};




export default async function WorkSection(){
    const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  let data: WorkSection | null = null;

  try {
    const res = await fetch(`${strapiUrl}/api/home-page?populate[WorkSection][populate]=*`,  {next: { revalidate: 60 }});
    if (!res.ok) throw new Error('Failed to fetch About from Strapi');

    const json = await res.json();
    data = json.data;
  } catch (error: any) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) return null;

    return(
        <div className="grid gap-10 p-20 " >
            <div className="flex flex-col gap-5 justify-center items-center
            ">
                 <img
                 src={data.WorkSection.worksvg.url}
          alt="about-svg"
          width={60}
          height={120}
         
        />
                <h1 className="text-4xl text-center text-gray-700 font-semibold mx-60">{data.WorkSection.heading}</h1>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-6"> 
                    <h1 className="text-3xl text-gray-500 font-semibold">{data.WorkSection.title}</h1>
                    <h3 className="text-3xl text-gray-600">{data.WorkSection.intro}</h3>
                    <p className="text-gray-600 text-md leading-8">{data.WorkSection.desc.desc1}</p>
                     <p className="text-gray-600 text-md leading-8">{data.WorkSection.desc.desc2}</p>
                     <div className="bg-blue-500 py-3 px-6 rounded-full w-fit">
                      <a href="https://sandbox.elemisthemes.com/demo15.html#"><button className="text-white font-bold text-lg">{data.WorkSection.button}
                        </button></a>
                        </div>
                </div>
                <div className="grid gap-8 p-6 ">
  
  <div className="flex  gap-8 bg-white  shadow-sm rounded-xl p-6 me-8">
    <div className="flex-shrink-0 w-[4rem] h-[4rem] rounded-full bg-[#E0E9F4] flex items-center justify-center  ">
      <p className="font-bold text-3xl text-[#3f78e0]">{data.WorkSection.steps[0].stepno}</p>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-lg  text-gray-800">{data.WorkSection.steps[0].Title}</h2>
      <p className="text-md text-gray-500">{data.WorkSection.steps[0].description}</p>
    </div>
  </div>

  {/* Step 2 */}
  <div className="flex gap-4 bg-white shadow-sm rounded-xl p-6 ms-20 items-center">
  <div className="flex-shrink-0 w-[4rem] h-[4rem] rounded-full bg-[#E0E9F4] flex items-center justify-center">
    <p className="font-bold text-3xl text-[#3f78e0]">
      {data.WorkSection.steps[1].stepno}
    </p>
  </div>

  <div className="flex flex-col gap-3">
    <h1 className="font-bold text-lg">{data.WorkSection.steps[1].Title}</h1>
    <p className="text-md text-gray-500">{data.WorkSection.steps[1].description}</p>
  </div>
</div>
    

  {/* Step 3 */}
  <div className="flex  gap-4 bg-white  shadow-sm rounded-xl p-6 mx-6">
    <div className="flex-shrink-0 w-[4rem] h-[4rem] rounded-full  bg-[#E0E9F4] flex justify-center items-center">
      <p className="font-bold text-3xl text-[#3f78e0]">{data.WorkSection.steps[2].stepno}</p>
    </div>
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-lg">{data.WorkSection.steps[2].Title}</h1>
      <p className="text-md text-gray-500">{data.WorkSection.steps[2].description}</p>
    </div>
  </div>
</div>



            </div>
        </div>
    )
}