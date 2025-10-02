import AboutSection from "@/components/About/main";

export default async function Sections({ params }: { params: { section: string } }) {
  const section = params.section;

  if (section === "about") {
    return <AboutSection />;
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
}
