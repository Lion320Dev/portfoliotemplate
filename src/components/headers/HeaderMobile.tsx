import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Nav2 from "./Nav2";

import { navItemsDefault } from "@/data/menu";
import { useContent } from "@/contexts/ContentContext";

export default function MobileMenu({ navItems = navItemsDefault }) {
  const menuRef = useRef<HTMLDivElement | null>(null); // .tmp-popup-mobile-menu
  const innerRef = useRef<HTMLDivElement | null>(null); // .inner
  const { setCurrentModal, currentModal } = useContent();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!menuRef.current || !innerRef.current) return;

      const clickedOutsideInner =
        menuRef.current.contains(target) && !innerRef.current.contains(target);

      if (clickedOutsideInner) {
        setCurrentModal("");
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setCurrentModal]);

  return (
    <div className="d-block d-xl-none">
      <div
        className={`tmp-popup-mobile-menu ${
          currentModal == "mobile-menu" ? "active" : ""
        } `}
        ref={menuRef}
      >
        <div className="inner" ref={innerRef}>
          <div className="header-top">
            <div className="logo">
              <Link to="/" className="logo-area">
                <img
                  className="logo-dark"
                  alt="Logo dark"
                  src="/assets/images/logo/white-logo-reeni.png"
                  width={108}
                  height={30}
                />
                <img
                  className="logo-white"
                  alt="Logo white"
                  src="/assets/images/logo/dark-logo-virtuo.png"
                  width={108}
                  height={30}
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                onClick={() => setCurrentModal("")}
                className="close-button tmp-round-action-btn"
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <ul
            className="tmp-mainmenu onepagenav"
            onClick={() => setCurrentModal("")}
          >
            <Nav2 navItems={navItems} />
          </ul>
          <div className="social-wrapper mt--40">
            <span className="subtitle">find with me</span>
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
    </div>
  );
}
