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
        <div className="grid  gap-5  p-4 pt-18 lg:p-20 " >
            <div className="flex flex-col gap-5 lg:justify-center items-center 
            ">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 447"
  className="w-12 h-12 mb-4 "
>
  <path
    d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
    className="stroke-current text-black "
  />
  <circle
    cx="102.4"
    cy="102.4"
    r="87.8"
    className="fill-current text-blue-200"
  />
  <path
    d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
    className="stroke-current text-black "
  />
</svg>

                <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-semibold lg:mx-60">{data.WorkSection.heading}</h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 md:p-4 p-2">
                <div className="flex flex-col lg:gap-6 gap-4 order-1 lg:order-none"> 
                    <h1 className="text-3xl text-gray-800 font-semibold">{data.WorkSection.title}</h1>
                    <h3 className="text-2xl  text-gray-600">{data.WorkSection.intro}</h3>
                    <p className="text-gray-600 text-md leading-8">{data.WorkSection.desc.desc1}</p>
                     <p className="text-gray-600 text-md leading-8">{data.WorkSection.desc.desc2}</p>
                     <div className="bg-blue-500 py-3 px-5 rounded-full w-fit">
                      <a href="https://sandbox.elemisthemes.com/demo15.html#"><button className="text-white font-semibold text-lg">{data.WorkSection.button}
                        </button></a>
                        </div>
                </div>
                <div className="grid gap-8 lg:p-6 md:p-4">
  
  <div className="flex  gap-8 bg-white  shadow-sm rounded-xl p-6 lg:me-8">
    <div className="flex-shrink-0 w-[4rem] h-[4rem] rounded-full bg-[#E0E9F4] flex items-center justify-center  ">
      <p className="font-bold text-3xl text-[#3f78e0]">{data.WorkSection.steps[0].stepno}</p>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-lg  text-gray-800">{data.WorkSection.steps[0].Title}</h2>
      <p className="text-md text-gray-500">{data.WorkSection.steps[0].description}</p>
    </div>
  </div>

  {/* Step 2 */}
  <div className="flex gap-4 bg-white shadow-sm rounded-xl p-6 lg:ms-20 items-center">
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
  <div className="flex  gap-4 bg-white  shadow-sm rounded-xl p-6 lg:mx-6">
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