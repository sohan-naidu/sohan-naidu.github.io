"use client";

export default function NavBar() {
    return (
      <nav className="w-full px-8 py-4 flex justify-end gap-8 text-lg font-[family-name:var(--font-geist-sans)]">
        <button className="cursor-pointer hover:text-gray-500 transition" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</button>
        <button className="cursor-pointer hover:text-gray-500 transition" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        <button className="cursor-pointer hover:text-gray-500 transition" onClick={() => document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" })}>Publications</button>
        <button className="cursor-pointer hover:text-gray-500 transition" onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}>Resume</button>
        <button className="cursor-pointer hover:text-gray-500 transition" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
      </nav>
    );
  }
  