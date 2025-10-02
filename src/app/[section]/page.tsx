import AboutSection from "@/components/About/main";

interface PageProps {
  params: {
    section: string;
  };
}

export default async function sections({ params }: PageProps) {
  const { section }:any = await params.section;

  // Conditionally render based on slug
  if (section === "about") {
    return <AboutSection />;
  }

  if (section === "services") {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-gray-600">
          We offer high-quality services to help you succeed.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
