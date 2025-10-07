import PricingSection from "./pricingCard";

async function getPricingData() {
  const res = await fetch("https://strapi-backend-alhx.onrender.com/api/service-page?populate[Pricing][populate]=*", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch pricing");
  const json = await res.json();
  return json.data.Pricing;
}

export default async function Pricing() {
  const data = await getPricingData();

  return (
    <div className="grid m-4 py-20 gap-5 lg:gap-20 md:p-6 md:mt-20 lg:flex lg:p-16 lg:pt-20 lg:justify-center items-center">
      {/* Left Section */}
      <div className="grid gap-8 lg:flex flex-col lg:gap-10 lg:w-2/6">
        <h1 className="text-gray-800 text-4xl font-bold">{data.title}</h1>
        <p className="text-gray-500 text-2xl">
          {data.desc.split("great prices")[0]}
          <span className="underline underline-offset-4 decoration-blue-200">
            great prices
          </span>
          {data.desc.split("great prices")[1]}
        </p>
        <p className="text-gray-500 text-base">
          {data.desc2.split("free 30-day trial")[0]}
          <a href="#" className="text-blue-800">
            free 30-day trial
          </a>
          {data.desc2.split("free 30-day trial")[1]}
        </p>
        <button className="bg-blue-500 w-fit text-lg text-white px-4 py-3 rounded-full">
          {data.button}
        </button>
      </div>

      {/* Right Section */}
      <div>
        <PricingSection />
      </div>
    </div>
  );
}
