import AboutSection from "@/components/About/main";

interface PageProps {
  params: {
    section: string;
  };
}

export default async function sections({ params }: PageProps) {
  const { section }:any =  params.section;

  // Conditionally render based on slug
  if (section === "about") {
    return <AboutSection />;
  }



  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
