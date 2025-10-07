export default async function ServiceLists() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  const res = await fetch(`${strapiUrl}/api/service-page?populate=*`, {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  const services = json.data.services;
  const main = json.data.Main;

  return (
    <div className="m-4 mb-0 md:m-12 md:mb-0">
      {/* Top Image */}
      <div className="rounded-t-lg">
        <img src={main.imgurl} alt={main.Title} className="rounded-t-lg" />
      </div>

      {/* Stats Section */}
      <div
        style={{
          backgroundImage:
            'url("https://sandbox.elemisthemes.com/assets/img/photos/bg3.jpg")',
        }}
        className="bg-cover bg-center grid grid-cols-2 lg:flex lg:justify-center lg:items-center lg:relative lg:-top-20 lg:ms-40 lg:me-40 gap-6 p-10 text-center text-white rounded-b-lg lg:rounded-lg"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{services.title1}</h1>
          <p className="text-md">{services.desc1}</p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{services.title2}</h1>
          <p className="text-md">{services.desc2}</p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{services.title3}</h1>
          <p className="text-md">{services.desc3}</p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">{services.title4}</h1>
          <p className="text-md">{services.desc4}</p>
        </div>
      </div>
    </div>
  );
}
