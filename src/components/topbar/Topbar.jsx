import { useEffect, useState } from "react";
import "./Topbar.css";

export default function Topbar() {
  const [active, setActive] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "story", label: "Story" },
    { id: "reasons", label: "Reasons" },
    { id: "proposal", label: "Proposal" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6 // section must be 60% visible
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
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
