export default async function customerService(){
    const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  // Fetch customer section data
  const res = await fetch(`${strapiUrl}/api/service-page?populate[customer][populate]=*`
    // , {
    // next: { revalidate: 60 },
  // }
);

  if (!res.ok) {
    throw new Error("Failed to fetch customer section data");
  }

  const json = await res.json();
  const data = json.data.customer;

    return(

        <div className="grid lg:grid lg:grid-cols-2 m-4 md:m-8 lg:m-16 p-4 ps-0  my-20 md:mt-20 gap-5 lg:gap-10 w-full" >
            <div className="grid gap-8 md:grid-cols-2 ">
                <div className="grid md:row-span-4 md:pt-20">
                    <img src={data?.img1url1}
                    className="rounded-lg"/>
                </div>
                 <div className="order-1">
                      <img src={data?.img2url2}
                      className="rounded-lg"/>
                 </div>
                  <div className="grid  justify-center p-24 lg:p-12 lg:mt-8 bg-blue-100 rounded-lg gap-3 lg:me-15">
                   <h1 className="text-center text-gray-900 text-4xl lg:text-3xl font-bold">{data?.value}</h1>
                   <p className="text-gray-500 text-sm lg:text-sm">{data?.type}</p>
                  </div>
            </div>

            <div className="grid gap-5 lg:flex flex-col lg:gap-5 lg:pt-8 lg:w-4/6">
               <h1 className="text-gray-900 text-3xl lg:text-4xl font-bold">{data?.title}</h1>
               <p className="text-gray-500 text-xl lg:text-2xl leading-8">{data?.desc1}</p>
                <p className="text-gray-500 text-lg">{data?.desc2}</p>
                 <button className="px-5 py-3 w-fit text-white text-xl bg-blue-500 rounded-full">{data?.button}</button>    
            </div>
        </div>
    )

    
}