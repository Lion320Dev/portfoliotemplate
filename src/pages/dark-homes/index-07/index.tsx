import About4 from "@/components/about/About4";
import Blogs4 from "@/components/blogs/Blogs4";
import IntroVideo from "@/components/common/IntroVideo";
import ParticleComponent from "@/components/common/ParticleComponent";
import Contact5 from "@/components/contact/Contact5";
import Footer1 from "@/components/footers/Footer1";
import RightSidebarNav from "@/components/headers/RightSidebarNav";
import Portfolios6 from "@/components/portfolios/Portfolios6";
import Profile2 from "@/components/profile/Profile2";
import Resume1 from "@/components/resume/Resume1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 07 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function Homepage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="index-8 card-1-body">
        <div className="tmp-breadcrumb-image breadcrumb-top-stars-wrapper">
          <div className="bg_image--8 bg_image h-100" />
          <ParticleComponent
            options={{
              fullScreen: {
                enable: false, // Disable fullscreen
                zIndex: -1, // Optional: Adjust if needed
              },
              particles: {
                number: {
                  value: 20,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: ["#ffffff"],
                },
                shape: {
                  type: "star",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: { min: 0.3, max: 0.8 }, // Larger particles = more opaque

                  random: true,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: { min: 0.1, max: 4 },
                  random: true,
                  anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  // out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                  // outModes: {
                  //   default: "bounce", // or "none" to prevent exiting
                  //   bottom: "destroy", // Optional: Destroy particles at bottom edge
                  // },
                  // bounds: {
                  //   top: 0,
                  //   left: 0,
                  //   right: "100%",
                  //   bottom: "100%",
                  // },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 800,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
              config_demo: {
                hide_card: false,
                background_color: "#b61924",
                background_image: "",
                background_position: "50% 50%",
                background_repeat: "no-repeat",
                background_size: "cover",
              },
            }}
          />
          <div className="slider-bg-light">
            <img
              className="blocksync-scroll-trigger fade_in animation-order-8"
              alt="Top Light Shape"
              src="/assets/images/banner/shape/light.svg"
              width={554}
              height={532}
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
        <div className="cv-card-area">
          <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
            <div className="row row--25">
              <div className="order-1 col-xxl-3 col-lg-12">
                <Profile2 />
              </div>
              <div className="order-3 order-xl-2 col-xxl-7 col-lg-10">
                <div className="tmp-tab-content-area tab-wrapper-overlay-to-top">
                  <div className="d-flex align-items-start">
                    <div
                      className="tmp-all-tab-content tab-content right-corner-pattern"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-Javascript"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        <About4 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Design"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        <Resume1 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Wordpress"
                        role="tabpanel"
                        aria-labelledby="v-pills-wordpress-tab"
                      >
                        <Portfolios6 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tabs"
                      >
                        <Blogs4 />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-python"
                        role="tabpanel"
                        aria-labelledby="v-pills-python-tabs"
                      >
                        <Contact5 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2 order-xl-3 col-xxl-2 col-lg-2">
                <div className="d-flex flex-wrap align-content-start h-100 w-100 tab-wrapper-overlay-to-top">
                  <div className="position-sticky sticky-top tmp-sticky-top w-100">
                    <RightSidebarNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
        <IntroVideo />
      </div>
    </>
  );
}
