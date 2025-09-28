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
    const res = await fetch(`${strapiUrl}/api/home-page?populate[AboutSection][populate]=*`, {next: { revalidate: 60 }});
    if (!res.ok) throw new Error('Failed to fetch About from Strapi');

    const json = await res.json();
    data = json.data;
  } catch (error: any) {
    return <div className="text-red-500">{error.message}</div>;
  }

  if (!data) return null;

  return (
    <div className="grid grid-cols-2 gap-5 p-14">
     
      <div className="bg-white p-6 grid gap-7">
        <img
          src={data.AboutSection.aboutsvg.url}
          alt="about-svg"
          width={60}
          height={120}
         
        />
        <h1 className="text-4xl font-semibold text-gray-700">{data.AboutSection.title}</h1>
        <p className="text-2xl text-gray-500">{data.AboutSection.intro}</p>
        <p className="text-lg text-gray-500">{data.AboutSection.desc}</p>

        <div className="grid grid-cols-2 gap-4 text-gray-500">
          <div className="flex gap-3">
        <div className="p-3 bg-[#E0E9F4] w-5 h-5 rounded-full flex items-center justify-center">
  <p><FaCheck className="text-[#3f78e0] text-sm" /></p>
</div>


            <p>{data.AboutSection.details.detail1.text}</p>
          </div>
          <div className="flex gap-3">
           <div className="p-3 bg-blue-200 w-5 h-5 rounded-full flex items-center justify-center">
  <p><FaCheck className="text-blue-500 text-sm" /></p>
</div>
            <p>{data.AboutSection.details.detail2.text}</p>
          </div>
           <div className="flex gap-3">
           <div className="p-3 bg-blue-200 w-5 h-5 rounded-full flex items-center justify-center">
  <p><FaCheck className="text-blue-500 text-sm" /></p>
</div>
            <p>{data.AboutSection.details.detail3.text}</p>
          </div>
          <div className="flex gap-3">
          <div className="p-3 bg-blue-200 w-5 h-5 rounded-full flex items-center justify-center">
  <p><FaCheck className="text-blue-500 text-sm" /></p>
</div>
            <p>{data.AboutSection.details.detail4.text}</p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-2 p-6 rounded overflow-visible">

 <div
  className="absolute z-0 bg-[radial-gradient(circle,_#3f78e0_2px,_transparent_2.5px)] 
             bg-[length:20px_20px] opacity-50"
  style={{
    top: "3rem",      
    left: "6rem",  
    transform: "translate3d(0px, 17px, 0px)", 
    width: "6rem",    
    height: "10rem", 
  }}
></div>



 
 <div>
    <img
      src={data.AboutSection.imgs.img1url1}
      alt="about-img1"
      className="rounded-lg absolute left-7 top-40 h-74 w-2/4 z-50" 
    />
</div>

<div>
    <img
      src={data.AboutSection.imgs.img2url2}
      alt="about-img2"
      className="rounded-lg w-4/6 absolute right-0 "
    />
    </div>

</div>

    </div>
  );
}
