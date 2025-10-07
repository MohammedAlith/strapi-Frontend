// Step.tsx
export default async function Step() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  // Fetch steps data
  const res = await fetch(`${strapiUrl}/api/service-page?populate[steps][populate]=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Steps data");
  }

  const json = await res.json();
  const data = json.data.steps;

  return (
    <div className="grid md:m-8 m-4 pt-24 p-10 ps-2 gap-10 lg:p-16 lg:pt-20">
      {/* Section Heading */}
      <div className="grid gap-5">
        <h1 className="text-3xl text-gray-800 font-bold">{data.title}</h1>
        <p className="text-2xl leading-10 text-gray-500">
          {data.desc.split("stress-free")[0]}
          <span className="underline underline-offset-4 decoration-blue-200">
            stress-free
          </span>
          {data.desc.split("stress-free")[1]}
        </p>
      </div>

      <div className="w-5/6 h-px bg-black hidden lg:block relative top-17 z-0 opacity-7"></div>

      {/* Steps Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:flex">
        {/* Step 01 */}
        <div className="grid gap-5">
          <div className="w-15 h-15 rounded-full bg-blue-100 flex justify-center items-center z-10">
            <p className="text-2xl text-blue-900 font-bold">01</p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-gray-800 font-bold text-xl">{data.steplist.title1}</h1>
            <p className="text-base text-gray-500">{data.steplist.desc1}</p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid gap-5">
          <div className="w-15 h-15 rounded-full bg-blue-500 flex justify-center items-center z-10">
            <p className="text-white text-2xl font-bold">02</p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-gray-800 font-bold text-xl">{data.steplist.title2}</h1>
            <p className="text-base text-gray-500">{data.steplist.desc2}</p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="grid gap-5">
          <div className="w-15 h-15 rounded-full bg-blue-100 flex justify-center items-center z-10">
            <p className="text-2xl text-blue-900 font-bold">03</p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-gray-800 font-bold text-xl">{data.steplist.title3}</h1>
            <p className="text-base text-gray-500">{data.steplist.desc3}</p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="grid gap-5">
          <div className="w-15 h-15 rounded-full bg-blue-100 flex justify-center items-center z-10">
            <p className="text-2xl text-blue-900 font-bold">04</p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-gray-800 font-bold text-xl">{data.steplist.title4}</h1>
            <p className="text-base text-gray-500">{data.steplist.desc4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
