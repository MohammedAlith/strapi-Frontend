interface MainData {
  Title: string;
  desc: string;
  imgurl: string;
}

async function getData(): Promise<MainData> {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/service-page?populate=*`, {
    next:{revalidate:60}, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  return json.data.Main; 
}

export default async function Head() {
  const main = await getData();

  return (
    <div
      className="relative bg-blue-50 w-screen h-[450px] 
                transform -skew-y-12 md:-skew-y-6 lg:-skew-y-4 origin-bottom-left"
    >
      <div className="flex flex-col justify-center items-center pt-22 md:pt-21 pb-36 px-2 md:p-36 lg:px-80 lg:pt-40 gap-5 lg:gap-8 transform skew-y-12 md:skew-y-6 lg:skew-y-4">
        <h1 className="text-4xl text-gray-900 font-bold">{main.Title}</h1>
        <p className="text-center text-xl text-gray-500 leading-8">
          {main.desc.split("long-term relationships")[0]}
          <span className="relative inline-block z-10">
            long-term relationships
            <span className="absolute left-0 bottom-0 w-full h-2 bg-blue-100 rounded-full"></span>
          </span>{" "}
          {main.desc.split("long-term relationships")[1]}
        </p>
      </div>
    </div>
  );
}
