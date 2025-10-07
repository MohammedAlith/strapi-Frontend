// src/app/[section]/page.tsx

import AboutSection from "@/components/About/main";
import ContactSection from "@/components/Contact/Main";
import SignIn from '@/components/SignIn/main';
import SignUp from '@/components/SignUp/main';
import Service from '@/components/Service/main'
import Career from '@/components/Career/main'
// Define the expected props for dynamic route
export const dynamic = "force-static";

// Pre-render these section values at build time
export function generateStaticParams() {
  return [
    { section: "about" },
    {section:"contact"},
     { section: "signIn" },
  { section: "signUp" },
    { section: "service" },
    {section:"career"}
    
  ];
}

// Server component for dynamic sections
export default async function Sections({ params }: any) {
  const { section } = (await params);

  if (section === "about") {
    return <AboutSection />;
  }
   if (section === "contact") {
    return <ContactSection />;
  }
  if (section==="signIn"){
return <SignIn/>
  }
   if (section==="signUp"){
return <SignUp/>
  }
   if (section==="service"){
return <Service/>
  }

  if (section==="career"){
return <Career/>
  }
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-500">
        The section <code>{section}</code> does not exist.
      </p>
    </div>
  );
}
