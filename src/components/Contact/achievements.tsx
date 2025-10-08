export default async function Achievements() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";

  let data = null;

  try {
    const res = await fetch(`${strapiUrl}/api/contact-page?populate[Achievement][populate]=*`
    //   , {
    //   next: { revalidate: 60 },
    // }
  );

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const json = await res.json();
    data = json?.data?.Achievement || null;
  } catch (err) {
    console.error("Fetch failed:", err);
    data = null;
  }

  if (!data) {
    return <p className="text-center py-16">Data not available</p>;
  }

  const { title, list } = data;

  return (
    <div
      className="flex flex-col md:justify-center md:items-center md:p-10 lg:p-40 lg:pt-20 w-screen relative -top-22 lg:-top-30
      bg-[url('https://sandbox.elemisthemes.com/assets/img/map.png')] bg-cover bg-center gap-5"
    >
      <h1 className="text-center text-gray-800 font-semibold text-3xl lg:text-4xl">{title}</h1>

      <div className="flex flex-col md:flex-row justify-center mx-auto gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl text-blue-500 font-bold">{list.title1}</h1>
          <p className="text-gray-500 text-md">{list.desc1}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl text-blue-500 font-bold">{list.title2}</h1>
          <p className="text-gray-500 text-md">{list.desc2}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl text-blue-500 font-bold">{list.title3}</h1>
          <p className="text-gray-500 text-md">{list.desc3}</p>
        </div>
      </div>
    </div>
  );
}
