export default function Profile2() {
  return (
    <div
      className="d-flex flex-wrap align-content-start h-100 w-100 tab-content-overlay-to-top"
      id="home"
    >
      <div className="position-sticky sticky-top tmp-sticky-top w-100">
        <div className="tmp-contact-about-inner">
          <div className="thumbnail">
            <img
              alt="contact-img"
              src="/assets/images/banner/banner-user-image-04.png"
              width={525}
              height={525}
            />
          </div>
          <div className="content">
            <div className="title-area">
              <h4 className="title">John Lee</h4>
              <span className="active">Active</span>
              <span className="subtitle">Chief Operating Officer</span>
            </div>
            <div className="description">
              <div className="info-box">
                <span className="phone">
                  Phone:
                  <a href="tel:01941043264">+01234567890</a>
                </span>
                <span className="mail">
                  Email:
                  <a href="mailto:admin@example.com">admin@example.com</a>
                </span>
              </div>
            </div>
            <div className="social-area mb--30">
              <div className="social-link justify-content-center">
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
            <div className="button-area-banner-one text-xl-center text-start">
              <a
                className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                href="#"
              >
                <div className="icon-reverse-wrapper">
                  <span className="btn-text">Download My CV</span>
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
                    <i className="fa-regular fa-arrow-down" />
                  </span>
                  <span className="btn-icon">
                    <i className="fa-regular fa-arrow-down" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Modern Animation  */}
        <div className="animation-round-wrap">
          <div className="round-animation-1" />
        </div>
      </div>
    </div>
  );
}
