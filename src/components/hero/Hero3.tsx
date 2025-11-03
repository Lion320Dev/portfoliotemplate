import TyperComponent from "../common/TyperComponent";
export default function Hero3(light = false) {
  return (
    <div className="rpp-banner-two-area" id="home">
      <div className="container">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <div className="main-img">
                  <img
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="banner-img"
                    src="/assets/images/banner/banner-user-image-two.png"
                    width={487}
                    height={781}
                  />
                  <h2 className="banner-big-text-1 up-down-2">Ux Designer</h2>
                  <h2 className="banner-big-text-2 up-down">Ux Designer</h2>
                  <div className="benner-two-bg-red-img">
                    <img
                      alt="red-img"
                      src="/assets/images/banner/banner-user-image-two-red-bg.png"
                      width={630}
                      height={285}
                    />
                  </div>
                  <div className="logo-under-img-wrap">
                    <div className="logo-under-img">
                      <img
                        alt="logo-under-image"
                        src="/assets/images/banner/logo-under-image.png"
                        width={198}
                        height={198}
                      />
                    </div>
                    <div className="logo-under-img-2">
                      <img
                        alt="logo-under-image"
                        src="/assets/images/banner/logo-under-image-2.png"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt--100">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  I am
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Ralph Edwards, a Full Stuck <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        className="theme-gradient"
                        strings={[
                          "Web Designer.",
                          "Web Developer.",
                          "UI/UX Designer.",
                          "Freelancer.",
                          "Content Writer.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  A personal <span>portfolio</span> is a collection of your
                  work, that is achievements, and skills that highlights in your
                  abilities and professional <span>web design</span> growth. It
                  serves as
                </p>
                <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">More About Us</span>
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
                <div className="find-me-on tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <h2 className="find-me-on-title">Find me on</h2>
                  <div className="social-link banner">
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
        </div>
      </div>
      {light ? (
        ""
      ) : (
        <div className="slider-bg-light">
          <img
            className="blocksync-scroll-trigger fade_in animation-order-8"
            alt="Top Light Shape"
            src="/assets/images/banner/shape/light.svg"
            width={554}
            height={532}
          />
        </div>
      )}
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
