import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

export default async function Map() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data = null;

  try {
    const res = await fetch(
      `${strapiUrl}/api/contact-page?populate[Location][populate]=*`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    const json = await res.json();
    data = json?.data || null;

    // Sanitize mapurl: keep only the URL, remove extra HTML attributes
    if (data?.Location?.mapurl) {
      const urlMatch = data.Location.mapurl.match(/https?:\/\/[^"\s]+/);
      data.Location.mapurl = urlMatch ? urlMatch[0] : "";
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    data = null;
  }

  if (!data) return <p className="text-center py-16">Data not available</p>;

  return (
    <div className="flex w-full lg:justify-start lg:ms-40">
      <div className="grid lg:grid-cols-2 rounded-md w-full lg:w-4/6 border-2 border-gray-100 m-4 mb-0 md:m-10 md:mb-0 bg-white">
        {/* Google Map */}
        <div className="rounded-full w-full">
          <iframe
            src={data.Location.mapurl}
            height="450"
            className="w-full rounded-t-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="grid p-10 gap-5 md:w-sm">
          {/* Address */}
          <div className="flex gap-5">
            <div className="text-blue-400 text-3xl text-center">
              <CiLocationOn />
            </div>
            <div className="grid gap-2">
              <h1 className="text-gray-900 text-xl font-bold">Address</h1>
              <p className="text-gray-500 text-md">
                {data.Location.list1[0].Description.desc}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-5">
            <div className="text-blue-400 text-3xl text-center">
              <LuPhoneCall />
            </div>
            <div className="grid gap-2">
              <h1 className="text-gray-900 text-xl font-bold">Phone</h1>
              <div className="text-gray-500 text-md">
                {data.Location.list1[1].Description.desc && (
                  <p>{data.Location.list1[1].Description.desc}</p>
                )}
                {data.Location.list1[1].Description.desc1 && (
                  <p>{data.Location.list1[1].Description.desc1}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5">
            <div className="text-blue-400 text-3xl text-center">
              <MdOutlineMailOutline />
            </div>
            <div className="grid gap-2">
              <h1 className="text-gray-900 text-xl font-bold">E-mail</h1>
              <div className="text-gray-500 text-md">
                {data.Location.list1[2].Description.desc && (
                  <p>{data.Location.list1[2].Description.desc}</p>
                )}
                {data.Location.list1[2].Description.desc1 && (
                  <p>{data.Location.list1[2].Description.desc1}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
