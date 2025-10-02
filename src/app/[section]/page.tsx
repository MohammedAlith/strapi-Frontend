// src/app/[section]/page.tsx

import AboutSection from "@/components/About/main";

// Define the expected props for dynamic route


// Pre-render these section values at build time
export function generateStaticParams() {
  return [
    { section: "about" },
    // Add more sections here if needed
    // { section: "contact" },
    // { section: "services" },
  ];
}

// Server component for dynamic sections
export default async function Sections({ params }: any) {
  const { section } = (await params);

  if (section === "about") {
    return <AboutSection />;
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
