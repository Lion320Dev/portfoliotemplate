import TyperComponent from "../common/TyperComponent";
export default function Hero7() {
  return (
    <div
      className="banner-right-thumbnail-area v2 tmp-section-gap tmp-gradient-main"
      id="home"
    >
      <div className="container">
        <div className="row align-items-center pt--50">
          <div className="col-lg-8">
            <div className="banner-right-thumb-left-content">
              <span className="pre-title theme-gradient">
                Welcome to my world
              </span>
              <h1 className="title">
                I’m Jane Cooper <br />A{" "}
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent
                      className="theme-gradient"
                      strings={[
                        "Teacher.",
                        "Instructor.",
                        "Content Writer.",
                        "Influencer.",
                      ]}
                    />
                  </span>
                </span>
              </h1>
              <p className="disc">
                A personal portfolio is a collection of your work, achievements,
                and skills that highlights your abilities and professional
                growth. It serves as
              </p>
              <div className="skill-social-wrapper">
                <div className="find-me-on">
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
                <div className="find-me-on">
                  <h2 className="find-me-on-title">My Best Skill On</h2>
                  <div className="social-link banner best-skill-social">
                    <a href="#">
                      <img
                        alt=""
                        src="/assets/images/my-skill/01.png"
                        className="image-auto"
                        width={120}
                        height={117}
                      />
                    </a>
                    <a href="#">
                      <img
                        alt=""
                        src="/assets/images/my-skill/02.png"
                        className="image-auto"
                        width={128}
                        height={125}
                      />
                    </a>
                    <a href="#">
                      <img
                        alt=""
                        src="/assets/images/my-skill/05.png"
                        className="image-auto"
                        width={128}
                        height={128}
                      />
                    </a>
                    <a href="#">
                      <img
                        alt=""
                        src="/assets/images/my-skill/04.png"
                        className="image-auto"
                        width={128}
                        height={192}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tmp-gradient-wrapper">
              <img
                className="tmp-gradient-animation"
                alt=""
                src="/assets/images/about/transparent-gradient.png"
                width={600}
                height={600}
              />
            </div>
            <div className="banner-right-content">
              <div className="main-img">
                <img
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="banner-img"
                  src="/assets/images/banner/banner-user-image-one.png"
                  width={487}
                  height={781}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
