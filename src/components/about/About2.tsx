import OdometerComponent from "../common/OdometerComponent";
export default function About2({ parentClass = "about-us-area" }) {
  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap">
              <div className="years-of-experience-card tmponhover active tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h3 className="counter card-title">
                  <OdometerComponent max={10} />+
                </h3>
                <div className="tmp-light light-top-left" />
                <p className="card-para">years of experience</p>
              </div>
              <div className="design-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-lock" />
                  </div>
                </div>
                <div className="tmp-light light-top-left" />
                <div className="card-info">
                  <h3 className="card-title">Ui/Ux Design</h3>
                  <p className="card-para">241 Projects</p>
                </div>
              </div>
            </div>
          </div>
          {/* bg-vactor-one */}
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle theme-gradient">About Me</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Boost Business Strategic <br />
                  Solutions with Us
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  Business consulting consultants provide expert advice and
                  guida businesses to help them improve their performance,
                  efficiency, and organizational
                </p>
              </div>
              <div className="about-us-section-card row g-5 animation-action-2">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-4 active">
                    <div className="card-head with-flex">
                      <div className="logo-img">
                        <img
                          alt="logo"
                          src="/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Business</h3>
                    </div>
                    <div className="tmp-light light-top-left" />
                    <p className="card-para">Each one showcases my approach</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="card-head with-flex">
                      <div className="logo-img">
                        <img
                          alt="logo"
                          src="/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Partners</h3>
                    </div>
                    <div className="tmp-light light-top-left" />
                    <p className="card-para">
                      Business consulting consul us to a provide
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                <a
                  className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Me</span>
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
        </div>
      </div>
    </section>
  );
}
