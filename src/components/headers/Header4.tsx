import { Link } from "react-router-dom";

export default function Header4() {
  return (
    <header className="header-area-bentogrid">
      <nav className="navbar">
        <div className="container">
          <div className="menu-container tmponhover single-animation active">
            <div className="logo">
              <Link className="navbar-brand me-0" to={`/`}>
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
            <div className="navbar-main d-flex flex-grow-1">
              <div className="logo inner-logo d-block d-xl-none">
                <Link className="navbar-brand me-0" to={`/`}>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                      className="logo-icon"
                    />
                  </svg>
                </Link>
              </div>
              <ul
                className="navbar-info m-auto border-none nav nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item nav-item">
                  <a
                    className="nav-link nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    href="#"
                  >
                    <i className="fa-light fa-house-chimney nav-icon" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item nav-item">
                  <a
                    className="nav-link nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    href="#"
                  >
                    <i className="fa-regular fa-user nav-icon" />
                    About
                  </a>
                </li>
                <li className="nav-item nav-item">
                  <a
                    className="nav-link nav-link"
                    id="service-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#service"
                    role="tab"
                    aria-controls="service"
                    aria-selected="false"
                    href="#"
                  >
                    <i className="fa-regular fa-layer-group nav-icon" />
                    Services
                  </a>
                </li>
                <li className="nav-item nav-item">
                  <a
                    className="nav-link"
                    id="portfolio-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#portfolio"
                    role="tab"
                    aria-controls="portfolio"
                    aria-selected="false"
                    href="#"
                  >
                    <i className="fa-regular fa-briefcase nav-icon" />
                    Works
                  </a>
                </li>
                <li className="nav-item nav-item">
                  <a
                    className="nav-link"
                    id="blog-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#blog"
                    role="tab"
                    aria-controls="blog"
                    aria-selected="false"
                    href="#"
                  >
                    <i className="fa-light fa-pen-to-square nav-icon" />
                    Blog
                  </a>
                </li>
                <li className="nav-item nav-item">
                  <a
                    className="nav-link"
                    id="contactme-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contactme"
                    role="tab"
                    aria-controls="contactme"
                    aria-selected="false"
                    href="#"
                  >
                    <i className="fa-regular fa-envelope nav-icon" />
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header-right-info d-flex align-items-center">
                <a
                  className="tmp-btn hover-icon-reverse btn-border tmp-modern-button download-icon w-100 btn-md"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Let's Talk</span>
                    <div className="btn-hack" />
                    <img
                      alt=""
                      className="btn-bg"
                      src="/assets/images/button/btg-bg.svg"
                      width={195}
                      height={56}
                    />
                    <img
                      alt=""
                      className="btn-bg-hover"
                      src="/assets/images/button/btg-bg-2.svg"
                      width={193}
                      height={62}
                    />
                    <span className="btn-icon">
                      <i className="ffa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="ffa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="tmp-light light-center-center" />
          </div>
        </div>
      </nav>
    </header>
  );
}
