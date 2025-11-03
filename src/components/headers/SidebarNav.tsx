import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navItems5 } from "@/data/menu";

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState(
    navItems5[0].href.replace("#", "")
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
      navItems5.forEach((elm) => {
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
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector<HTMLElement>(id);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="d-none d-xl-block header-style-2">
      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link to={`/`}>
              <img
                alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/banner-user-image-04.png"
                width={525}
                height={525}
              />
            </Link>
          </div>
          <nav
            id="sideNavs"
            className="mainmenu-nav navbar-example2 onepagenav"
          >
            <ul className="primary-menu nav nav-pills">
              {navItems5.map((item) => (
                <li
                  key={item.text}
                  className={
                    activeSection == item.href.replace("#", "")
                      ? "nav-item current"
                      : "nav-item"
                  }
                >
                  <a
                    className="nav-link smoth-animation"
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`feather feather-${item.text.toLowerCase()}`}
                    >
                      {item.icon}
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer">
            <div className="social-share-style-1">
              <span className="title">Find With Me</span>
              <div className="social-link">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
