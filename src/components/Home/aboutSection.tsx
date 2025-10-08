// import { FaRegCheckCircle } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

type Imgs = {
  img1url1: string;
  img2url2: string;
};

type DetailItem = {
  icon: string;
  text: string;
};

type aboutsvg={
  url:string;
}

type Details = {
  detail1: DetailItem;
  detail2: DetailItem;
  detail3: DetailItem;
  detail4: DetailItem;
};

type AboutSection = {
  AboutSection:{
  title: string;
  intro: string;
  desc: string;
  aboutsvg: aboutsvg;
  imgs: Imgs;
  details: Details;
}
};

export default async function AboutSection() {
 const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  let data: AboutSection | null = null;

  try {
    const res = await fetch(`${strapiUrl}/api/home-page?populate[AboutSection][populate]=*`
      // , {next: { revalidate: 60 }}
    );
    if (!res.ok) throw new Error('Failed to fetch About from Strapi');

    const json = await res.json();
    data = json.data;
  } catch (error: any) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) return null;

  return (
    <div className="grid  md:grid-cols-1 lg:grid-cols-2 md:gap-30 lg:gap-0 gap-3 p-4 pt-4 md:pt-8 lg:p-16 md:p-8 md:mt-12 lg:w-screen">

  {/* Text Section */}
  <div className="bg-white lg:p-6 flex flex-col gap-5 order-1 lg:order-none justify-start ">
    <img
      src={data.AboutSection.aboutsvg.url}
      alt="about-svg"
      width={60}
      height={120}
    />
    <h1 className="text-4xl font-semibold text-gray-700">{data.AboutSection.title}</h1>
    <p className="text-2xl text-gray-500">{data.AboutSection.intro}</p>
    <p className="text-lg text-gray-500 leading-6">{data.AboutSection.desc}</p>

  <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-1 md:gap-3  text-gray-500 w-full">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="flex items-center gap-3">
      <div className="p-2 bg-blue-200 w-6 h-6 rounded-full flex items-center justify-center">
        <FaCheck className="text-blue-700 text-md" />
      </div>
      <p className="text-md text-gray-500 ">
        {data.AboutSection.details[`detail${i}` as keyof Details].text}
      </p>
    </div>
  ))}
</div>

  </div>

 
<div className="relative w-full flex flex-col-reverse md:flex-row gap-10 md:pt-80 md:gap-0 h-auto md:h-[500px] lg:h-[600px]">


  <div
    className="absolute z-0 bg-[radial-gradient(circle,_#3f78e0_2px,_transparent_2.5px)] bg-[length:20px_20px] opacity-50 hidden md:block md:w-40 md:h-40 w-24 h-40"
    style={{
      top: "7rem",
      left: "5rem",
    }}
  ></div>


  <img
    src={data.AboutSection.imgs.img1url1}
    alt="about-img1"
    className="rounded-lg w-full md:w-2/4 lg:w-2/4 h-64  md:h-96 
    lg:h-74 object-cover md:absolute lg:absolute md:left-7 md:top-52 z-10"
  />


  <img
    src={data.AboutSection.imgs.img2url2}
    alt="about-img2"
    className="rounded-lg w-full md:w-4/6 lg:w-4/6 h-64 md:mt-20  md:h-auto object-cover md:absolute md:right-0 md:top-0"
  />
</div>

</div>

  );
}
