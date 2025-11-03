import { navItemsDefault } from "@/data/menu";
import { useEffect, useState } from "react";

export default function Nav({ navItems = navItemsDefault }) {
  const [activeSection, setActiveSection] = useState(
    navItems[0].href.replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    setTimeout(() => {
      navItems.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [navItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector<HTMLElement>(id);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.id}
          className={
            activeSection == item.href.replace("#", "") ? "current" : "nav-item"
          }
        >
          <a
            className="smoth-animation"
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
}
