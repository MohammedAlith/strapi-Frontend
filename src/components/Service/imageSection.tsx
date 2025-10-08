import { MdPhoneInTalk } from "react-icons/md";
import { GoShield } from "react-icons/go";
import { UilLaptopCloud } from "@iconscout/react-unicons";
import { FaChartLine } from "react-icons/fa6";

// Fetch from Strapi
async function getImageSection() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/service-page?populate[supports][populate]=*`, 
  //   {
  //   next: { revalidate: 60 }, // ISR: revalidate every 60s
  // }
);

  if (!res.ok) {
    throw new Error("Failed to fetch ImageSection data");
  }

  const json = await res.json();
  return json.data.supports; // returns supports object
}

export default async function ImageSection() {
  const data = await getImageSection();

  return (
    <div className="grid lg:grid-cols-2 lg:flex lg:flex-row-reverse  m-4 mt-0 md:mx-8 lg:mx-16 px-4 gap-8">
      {/* ---------- Left images grid ---------- */}
      <div className="grid md:grid-cols-12 gap-x-5 gap-y-5 lg:w-4/6">
        <div className="col-span-12 md:col-start-3 md:col-span-4 self-end">
          <figure className="rounded-lg">
            <img src={data.img1?.url} alt={data.img1?.name || ""} className="rounded-lg" />
          </figure>
        </div>

        <div className="col-span-12 md:col-span-6 self-end">
          <figure className="rounded-lg">
            <img src={data.img2?.url} alt={data.img2?.name || ""} className="rounded-lg" />
          </figure>
        </div>

        <div className="col-span-12 md:col-start-2 md:col-span-6">
          <figure className="rounded-lg">
            <img src={data.img3?.url} alt={data.img3?.name || ""} className="rounded-lg" />
          </figure>
        </div>

        <div className="col-span-12 md:col-span-4 self-start">
          <figure className="rounded-lg">
            <img src={data.img4?.url} alt={data.img4?.name || ""} className="rounded-lg" />
          </figure>
        </div>
      </div>

      {/* ---------- Right side text & list ---------- */}
      <div className="w-5/6 md:w-full">
        <h2 className="text-4xl font-semibold mb-3 text-gray-900 font-sans">
          {data.title}
        </h2>
        <p className="text-lg mb-8 lg:w-full text-gray-500">
          {data.desc}
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-x-9 gap-y-6">
          {/* 24/7 Support */}
          <div className="flex gap-8">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 flex items-center justify-center w-15 h-15 rounded-full">
                <p className="text-blue-400 text-2xl">
                  <MdPhoneInTalk />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-xl font-semibold text-gray-800">
                {data.list.title1}
              </h4>
              <p className="mb-0 text-base text-gray-500">{data.list.desc1}</p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex gap-8">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 flex items-center justify-center w-15 h-15 rounded-full">
                <p className="text-blue-400 text-2xl">
                  <GoShield />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-xl font-semibold text-gray-800">
                {data.list.title2}
              </h4>
              <p className="mb-0 text-base text-gray-500">{data.list.desc2}</p>
            </div>
          </div>

          {/* Daily Updates */}
          <div className="flex gap-8">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 flex items-center justify-center w-15 h-15 rounded-full">
                <p className="text-blue-400 text-2xl">
                  <UilLaptopCloud />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-xl font-semibold text-gray-800">
                {data.list.title3}
              </h4>
              <p className="mb-0 text-md text-gray-500">{data.list.desc3}</p>
            </div>
          </div>

          {/* Market Research */}
          <div className="flex gap-8">
            <div className="flex-shrink-0">
              <div className="bg-blue-100 flex items-center justify-center w-15 h-15 rounded-full">
                <p className="text-blue-400 text-2xl">
                  <FaChartLine />
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="mb-1 text-xl font-semibold text-gray-800">
                {data.list.title4}
              </h4>
              <p className="mb-0 text-md text-gray-500">{data.list.desc4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
