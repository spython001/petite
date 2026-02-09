import { useEffect, useState } from "react";
import './Topbar.css'

// Move this outside the component
const sections = [
  { id: "hero", label: "Home" },
  { id: "story", label: "Story" },
  { id: "reasons", label: "Reasons" },
  { id: "proposal", label: "Proposal" }
];

export default function Topbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // ✅ no warning now

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="topbar">
      {sections.map((section) => (
        <span
          key={section.id}
          className={`navItem ${active === section.id ? "active" : ""}`}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </span>
      ))}
    </nav>
  );
}
