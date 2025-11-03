import TyperComponent from "../common/TyperComponent";
export default function Hero6({ light = false }) {
  return (
    <div
      className="banner-right-thumbnail-area banner-with-stars-10 tmp-section-gap"
      id="home"
    >
      <div className="container">
        <div className="row align-items-center pt--50">
          <div className="col-lg-7 order-2 order-lg-1">
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
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="animation-action-1">
              <div className="thumbnail-right-inner-main-image tmponhover paralax-image single-animation active">
                <img
                  alt=""
                  src="/assets/images/banner/instructor.png"
                  width={700}
                  height={933}
                />
                <div className="tmp-light light-center" />
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
