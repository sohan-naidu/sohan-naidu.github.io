"use client";

function getNavBarElement(section: string) {
  return (
    <button
      key={section} 
      className="cursor-pointer hover:text-gray-500 transition"
      onClick={() => document.getElementById(section.toLowerCase())?.scrollIntoView()}
    >
      {section}
    </button>
  );
}

export default function NavBar() {
  const sections = ["About", "Projects", "Skills", "Publications", "Contact"];

  return (
    <nav className="w-full px-8 py-4 flex justify-end gap-8 text-lg font-[family-name:var(--font-geist-sans)]">
      {sections.map(getNavBarElement)}
    </nav>
  );
}
