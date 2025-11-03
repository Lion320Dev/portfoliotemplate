import Blogs5 from "@/components/blogs/Blogs5";
import IntroVideo from "@/components/common/IntroVideo";
import Contact7 from "@/components/contact/Contact7";
import Contact8 from "@/components/contact/Contact8";
import Education2 from "@/components/education/Education2";
import Experiences4 from "@/components/experience/Experiences4";
import Facts4 from "@/components/facts/Facts4";
import Header4 from "@/components/headers/Header4";
import MobileMenu from "@/components/headers/HeaderMobile";
import Portfolios7 from "@/components/portfolios/Portfolios7";
import Portfolios8 from "@/components/portfolios/Portfolios8";
import Pricing2 from "@/components/pricing/Pricing2";
import Profile3 from "@/components/profile/Profile3";
import Services6 from "@/components/services/Services6";
import Services7 from "@/components/services/Services7";
import Skills6 from "@/components/skills/Skills6";
import Skills7 from "@/components/skills/Skills7";
import Skills8 from "@/components/skills/Skills8";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 17 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function Homepage17() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="video-bg-image-bg-green bg_image">
        <div id="tmp-page-content-bento" data-black-overlay="8">
          <Header4 />
          <MobileMenu />

          <div className="main-page-content">
            <div className="tab-content" id="myTabContent">
              <div className="main-demo-front">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4">
                      <Profile3 />
                    </div>
                    <div className="col-xl-8 tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <div className="tmp-profile-card text-marque-banner-top-brnto mt--20 tmponhover single-animation active">
                              <div className="tmp-slider-item-banner-text">
                                <div className="item">
                                  <p>
                                    🚀 Available for Hire | Crafting Stunning
                                    Digital Experiences 🎨 | Let's Build
                                    Something Amazing! 🚀
                                  </p>
                                </div>
                                <div className="item">
                                  <p>
                                    Available for Hire | Crafting Stunning
                                    Digital Experiences 🎨 | Let's Build
                                    Something Amazing! 🚀
                                  </p>
                                </div>
                              </div>
                              <div className="tmp-light light-top-left" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <Experiences4 />
                          </div>
                          <div className="col-lg-6">
                            <div className="tmp-profile-card paralax-image tmponhover single-animation">
                              <Skills6 />
                              <div className="tmp-light light-bottom-left" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-12">
                                <Portfolios7 />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade pl--30 pl_md--10 pl_sm--10"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
                          <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 pb--50 pt_md--0 pt_sm--0">
                            <div className="section-header">
                              <h4 className="subtitle theme-gradient">
                                <i className="fa-regular fa-house" /> INTRODUCE
                              </h4>
                              <h1 className="">
                                Say Hi from{" "}
                                <strong>
                                  <span className="theme-gradient">
                                    John Deon
                                  </span>
                                </strong>
                                , <br />A
                                <strong>
                                  <span className="theme-gradient">
                                    Framer Designer
                                  </span>
                                </strong>
                                .
                              </h1>
                              <p className="">
                                I design and code beautifully simple things and
                                i love what i do. Just simple like that! I
                                design and code beautifully simple things and i
                                love what i do. Just simple like that! I design
                                and code beautifully.
                              </p>
                            </div>
                            <div className="tmp-light light-left" />
                            <div
                              className="separator-animated-border border-top-footer animated-true"
                              style={{ width: "100%" }}
                            />
                            <div
                              className="separator-animated-border animated-true"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <Facts4 />
                          <Skills7 />
                          <Education2 />
                          {/* Start Service__Style--1 Area  */}
                          <Skills8 />
                          {/* End Service__Style--1 Area  */}
                          {/* Start Pricing--1 Area  */}
                          <Pricing2 />
                          {/* End Pricing--1 Area  */}
                          {/* tmp contact area start */}
                          <Contact7 />
                          {/* tmp contact area end */}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade pl--30 pl_md--10 pl_sm--10"
                        id="service"
                        role="tabpanel"
                        aria-labelledby="service-tab"
                      >
                        <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
                          {/* Start Service__Style--1 Area  */}
                          <Services7 />
                          {/* End Service__Style--1 Area  */}
                          <Education2 parentClass="tmp-section-gapBottom banner-personal-portfolio experience-style-list signle-section" />
                          {/* Start Service__Style--1 Area  */}
                          <Skills8 parentClass="tmp-service-area banner-personal-portfolio signle-section" />
                          {/* End Service__Style--1 Area  */}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade pl--30 pl_md--10 pl_sm--10"
                        id="portfolio"
                        role="tabpanel"
                        aria-labelledby="portfolio-tab"
                      >
                        <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
                          {/* tmp portfolio area start */}
                          <Portfolios8 />
                          {/* tmp portfolio area end */}
                          <Education2 parentClass="banner-personal-portfolio experience-style-list signle-section" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade pl--30 pl_md--10 pl_sm--10"
                        id="blog"
                        role="tabpanel"
                        aria-labelledby="blog-tab"
                      >
                        <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
                          <div className="section-header pb--20">
                            <h4 className="subtitle wow move-right">
                              <i className="fa-regular fa-user" /> Blog and news
                            </h4>
                            <h2 className="title">Blog and news</h2>
                          </div>
                          <Blogs5 />
                          <Education2 parentClass="banner-personal-portfolio experience-style-list signle-section" />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade pl--30 pl_md--10 pl_sm--10"
                        id="contactme"
                        role="tabpanel"
                        aria-labelledby="contactme-tab"
                      >
                        <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
                          {/* tmp contact area start */}
                          <Contact8 />
                          {/* tmp contact area end */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Services6 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IntroVideo />
    </>
  );
}
