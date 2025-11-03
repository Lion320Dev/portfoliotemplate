import { useContent } from "@/contexts/ContentContext";

import { Link } from "react-router-dom";

export default function HeaderMobile2() {
  const { setCurrentModal } = useContent();
  return (
    <div className="tmp-responsive-header-style d-block d-xl-none header--sticky">
      <div className="row align-items-center">
        <div className="col-6">
          <div className="logo">
            <Link to={`/`}>
              <img
                className="logo-dark"
                alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                src="/assets/images/logo/white-logo-reeni.png"
                width={108}
                height={30}
              />
              <img
                className="logo-white"
                alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                src="/assets/images/logo/dark-logo-virtuo.png"
                width={108}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div className="col-6">
          <div className="header-right text-end">
            <div className="tmp-side-collups-area d-flex justify-content-end">
              <button
                onClick={() => setCurrentModal("mobile-menu")}
                className="tmp-menu-bars humberger_menu_active"
              >
                <i className="fa-regular fa-bars-staggered" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
