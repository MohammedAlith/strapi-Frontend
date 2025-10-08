import { FaAngleRight } from "react-icons/fa";

export default async function Contact() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data = null;

  try {
    const res = await fetch(`${strapiUrl}/api/contact-page?populate=*`
    //   , 
    //   {
    //   next: { revalidate: 60 },
    // }
  );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const json = await res.json();
    data = json?.data || null;

  } catch (err) {
    console.error("Fetch failed:", err);
    data = null;
  }

  if (!data) {
    return <p className="text-center py-16">Data not available</p>;
  }

  return (
    <div className="relative w-full md:w-screen">
      {/* Skewed Background */}
      <div
        style={{ backgroundImage: `url(${data.Main.imgurl})` }}
        className="
          bg-cover bg-center 
          w-full md:h-[457px] py-45 lg:h-[457px]
          transform -skew-y-4 md:-skew-y-6 lg:-skew-y-4 origin-bottom-left
        "
      ></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center gap-3 text-white bottom-70 md:bottom-80 lg:bottom-95">
        <h1 className="text-3xl md:text-4xl font-bold">{data.Main?.title}</h1>

        <div className="flex gap-2 text-md md:text-lg items-center">
          <a href="#" className="hover:text-gray-200">{data.Main.desc}</a>
          <p className="opacity-55">
            <FaAngleRight />
          </p>
          <p>{data.Main.desc2}</p>
        </div>
      </div>
    </div>
  );
}
