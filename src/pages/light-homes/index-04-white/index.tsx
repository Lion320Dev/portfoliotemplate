import About3 from "@/components/about/About3";
import Blogs3 from "@/components/blogs/Blogs3";
import IntroVideo from "@/components/common/IntroVideo";
import Contact4 from "@/components/contact/Contact4";
import Education1 from "@/components/education/Education1";
import Facts3 from "@/components/facts/Facts3";
import Footer4 from "@/components/footers/Footer4";
import Header3 from "@/components/headers/Header3";
import MobileMenu from "@/components/headers/HeaderMobile";

import Hero10 from "@/components/hero/Hero10";
import Portfolios5 from "@/components/portfolios/Portfolios5";
import Pricing2 from "@/components/pricing/Pricing2";
import Profile1 from "@/components/profile/Profile1";
import Services5 from "@/components/services/Services5";
import Skills5 from "@/components/skills/Skills5";
import { navItems3 } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 04 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomepageLight4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="tmp-white-version personal-demo-left-fixed">
        <Header3 navItems={navItems3} />
        <MobileMenu navItems={navItems3} />
        <div className="personal-page-inner-wrapper">
          <div className="container-fluid-13">
            <div className="row">
              <div className="col-xl-4">
                <Profile1 />
              </div>
              <div className="col-xl-8 pl--70 pl_md--15 pl_sm--15 pt--70">
                <div className="personal-portfolio-right-inner-wrapper">
                  <Hero10 />
                  <Facts3 />
                  <About3 />
                  <Education1 />
                  <Services5 />
                  <Skills5 />
                  <Portfolios5 />
                  <Pricing2 />
                  <Blogs3 />
                  <Contact4 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer4 />
        <IntroVideo />
      </div>
    </>
  );
}
