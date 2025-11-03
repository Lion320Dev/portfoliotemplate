import { Link } from "react-router-dom";

export default function Footer3() {
  return (
    <div className="footer-stars-animation-wrapper-footer-two">
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to={`/`} style={{ display: "inline-block" }}>
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
                  <p className="description">
                    The personal portfolio category includes websites or
                    physical displays
                  </p>
                  <div className="social-link footer">
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
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <a href="#">About Me</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Blog Post</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="#">017345 678 9101</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      Cumilla,Bangladesh
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="#">abcd@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Newslatter</h3>
                  <p className="para">
                    The personal portfolio categor includes the a websites or
                    representation
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="newsletter-form-1"
                  >
                    <input type="email" placeholder="Your e-mail" />
                    <span>
                      <a href="#" className="form-icon">
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator-animated-border animated-true" />
      </footer>
      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper tmp-scroll-trigger animation-order-1">
                <p className="copy-right-para">
                  © {new Date().getFullYear()} InversWeb | All Rights Reserved
                </p>
                <ul className="tmp-link-animation">
                  <li>
                    <a href="#">Trams &amp; Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-bg-light">
        <img
          className="blocksync-scroll-trigger fade_in animation-order-8"
          alt="Top Light Shape"
          src="/assets/images/banner/shape/light-left.svg"
          width={713}
          height={702}
        />
      </div>
      <div className="slider-bg-dot-shape">
        <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
          <div className="blocksync-stars" />
          <div className="blocksync-stars2" />
          <div className="blocksync-stars3" />
        </div>
      </div>
    </div>
  );
}
