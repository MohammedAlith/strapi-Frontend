import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

interface ContactType {
  title: string;
  desc: string;
}

interface ContactData {
  title: string;
  types: ContactType[];
  imgs: {
    img1url1: string;
    img2url2: string;
  };
}

async function fetchContact(): Promise<ContactData | null> {
  const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  const res = await fetch(
    `${strapiUrl}/api/home-page?populate[contact][populate]=*`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.contact || null;
}

// Direct mapping to React icons
const icons = [CiLocationOn, LuPhoneCall, MdOutlineMailOutline];

export default async function ContactSection() {
  const contact = await fetchContact();
  if (!contact) return null;

  return (
    <div className="grid lg:grid-cols-2 lg:p-30 pt-40 md:p-8 p-4 md:pt-28 lg:pb-0 relative">
   
      <div className="relative grid lg:justify-center justify-start">
        <div
          className="w-45 h-80 absolute lg:left-5.5 -top-12 md:-left-12
                     bg-[radial-gradient(circle,_#3f78e0_2px,_transparent_2.5px)]
                     bg-[length:20px_20px]
                     opacity-50 hidden md:block"
        />
        <div>
          <img
            src={contact.imgs.img1url1}
            className="h-auto  lg:max-h-5/6 rounded-xl"
            alt="Contact"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col gap-14 pt-10 pb-20 lg:pb-0 lg:pt-5">
        <div className="flex flex-col gap-8">
          <img
            src={contact.imgs.img2url2}
            height={50}
            width={50}
            alt="Icon"
          />
          <h1 className="text-2xl md:text-4xl text-gray-700 font-bold">{contact.title}</h1>
        </div>

        <div className=" ps-0 pb-0 grid gap-8">
          {contact.types.map((item, idx) => {
            const Icon = icons[idx] ?? CiLocationOn; 
            return (
              <div key={idx} className="flex gap-5">
                <div className="flex flex-col">
                  <Icon className="text-blue-400 text-3xl text-center" />
                  {idx === 0 && ( 
    <div className="ms-1 bg-blue-400 w-6 h-1 rounded-md"></div>
  )}
                </div>

                <div className="w-3/6 grid gap-2">
                  <h1 className="text-xl text-gray-700 font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-md text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
