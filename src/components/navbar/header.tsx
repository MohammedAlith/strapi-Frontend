import HeaderClient from "./headerClient";

type NavTabsType = {
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;
};

type Logo = {
  url: string;
};

type Navbar = {
  id: number;
  documentId: string;
  Navtabs: {
    navtabs: NavTabsType;
    logo: Logo;
  };
};

export default async function HeaderServer() {
  const strapiUrl = "https://strapi-backend-alhx.onrender.com";
  let navbarData: Navbar | null = null;

  try {
    const res = await fetch(
      `${strapiUrl}/api/home-page?populate[Navtabs][populate]=*`
      // ,
      // { next: { revalidate: 60 } }
    );
    const json = await res.json();
    navbarData = json.data;
  } catch (error) {
    console.error("Error fetching navbar:", error);
  }

  if (!navbarData) return <p className="text-gray-500">No Navbar found</p>;

  return (
    <HeaderClient
      navtabs={navbarData.Navtabs.navtabs}
      logo={navbarData.Navtabs.logo}
    />
  );
}
