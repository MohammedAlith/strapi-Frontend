import NavTabs from './navTabs';
import NavIcons from './navIcons';

type NavTabsType = {
 navtabs:{
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;
}
};

type NavIconsType = {
  search: string;
  info: string;
};
type Logo={
  url:string
}

export type Navbar = {
  id: number;
  documentId: string;
  Navtabs: NavTabsType & {logo:Logo, navicons:NavIconsType},
  
  
};

export default async function Header() {
  const strapiUrl = 'https://strapi-backend-alhx.onrender.com';
  let navbar: Navbar | null = null;
  let errorMessage: string | null = null;

  try {
    const res = await fetch(`${strapiUrl}/api/home-page?populate[Navtabs][populate]=*`, {next: { revalidate: 60 }});
    console.log(res.headers.get('x-nextjs-cache')); 
    if (!res.ok) throw new Error('Failed to fetch Navbar from Strapi');
    const json = await res.json();
    navbar = json.data;
    console.log(res.headers.get('x-nextjs-cache')); 
  } catch (error: any) {
    errorMessage = error.message;
  }

  if (errorMessage) {
    return <div className="text-red-500">{errorMessage}</div>;
  }

  if (!navbar) {
    return <div className="text-gray-500">No navbar data found.</div>;
  }

  return (
    <nav className="flex px-20 justify-between bg-white py-8 w-full shadow shadow-gray-300 fixed z-99">
      <div>
        <img src={navbar.Navtabs.logo.url} alt="Logo" width={140} height={60} />
      </div>

      <NavTabs tabs={navbar.Navtabs.navtabs} />

      <NavIcons />
    </nav>
  );
}
