import {
  FaTwitter,
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default async function Footer() {
  let footer: any = null;
 const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  try {
    const res = await fetch(
      `${strapiUrl}/api/home-page?populate[footer][populate]=*`,
      { next: { revalidate: 60 } } 
    );
    const data = await res.json();
    footer = data?.data?.footer || null;
  } catch (err) {
    console.error("Failed to fetch footer:", err);
  }

  if (!footer) return null;

 
  const footerContent = footer.footer || {};
  const resources = footerContent.resources || {};

 
  const iconMap: Record<string, React.ReactNode> = {
    twitterIcon: <FaTwitter />,
    facebookIcon: <FaFacebookF />,
    dribbleIcon: <FaDribbble />,
    instagramIcon: <FaInstagram />,
    youtubeIcon: <FaYoutube />,
  };

  return (
    <div className="bg-[#21262c] grid lg:grid-cols-2 gap-10 p-4 pt-20 pb-20 md:p-8 md:pt-20 md:pb-20 lg:p-20 text-white">
      {/* Left: Logo, copyright, social */}
      <div className="flex flex-col gap-5 lg:items-start items-start text-start lg:text-center md:text-left">
        {footer?.logo?.imgurl && (
          <img src={footer.logo.imgurl} width={150} height={100} alt="Logo" />
        )}
        {footerContent?.copyrights && (
          <p className="text-gray-300 text-md md:text-lg">
            {footerContent.copyrights}
          </p>
        )}
        <div className="flex gap-5 text-xl">
          {footerContent?.icons &&
            Object.values(footerContent.icons).map((iconKey: any, idx) => (
              <a key={idx} href="#" className="hover:text-blue-400">
                {iconMap[iconKey] || null}
              </a>
            ))}
        </div>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:text-center text-left">
     
        {resources?.help && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg md:text-xl font-bold">
              {resources.help.title}
            </h1>
            <div className="grid gap-2 text-gray-300 text-md md:text-base">
              {Object.values(resources.help.lists).map((item: any, idx) => (
                <a key={idx} href="#" className="hover:text-blue-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

       
        {resources?.learning && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg md:text-xl font-bold">
              {resources.learning.title}
            </h1>
            <div className="grid gap-2 text-gray-300 text-md md:text-base">
              {Object.values(resources.learning.lists).map((item: any, idx) => (
                <a key={idx} href="#" className="hover:text-blue-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

       
        {resources?.messages && (
          <div className="flex flex-col gap-4">
            <h1 className="text-lg md:text-xl font-bold">
              {resources.messages.title}
            </h1>
            <div className="grid gap-2 text-gray-300 text-md md:text-base">
              {resources.messages.lists.list1 && (
                <p>{resources.messages.lists.list1}</p>
              )}
              {resources.messages.lists.list2 && (
                <a
                  href={`mailto:${resources.messages.lists.list2}`}
                  className="hover:text-blue-400"
                >
                  {resources.messages.lists.list2}
                </a>
              )}
              {resources.messages.lists.list3 && (
                <p>{resources.messages.lists.list3}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
