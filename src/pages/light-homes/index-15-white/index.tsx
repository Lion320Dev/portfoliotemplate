import About2 from "@/components/about/About2";
import Blogs2 from "@/components/blogs/Blogs2";
import Brands1 from "@/components/brands/Brands1";
import IntroVideo from "@/components/common/IntroVideo";
import Contact1 from "@/components/contact/Contact1";

import Experiences3 from "@/components/experience/Experiences3";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import MobileMenu from "@/components/headers/HeaderMobile";
import Hero9 from "@/components/hero/Hero9";
import Portfolios4 from "@/components/portfolios/Portfolios4";
import Pricing1 from "@/components/pricing/Pricing1";

import Services4 from "@/components/services/Services4";
import TextBanner1 from "@/components/textBanner/TextBanner1";
import { navItems4 } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 15 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomepageLight15() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="tmp-white-version">
        <div className="demo-model">
          <Header1 navItems={navItems4} />
          <MobileMenu navItems={navItems4} />
          <Hero9 />
          <TextBanner1 />
          <About2 />
          <div className="section-title-brand-area tmp-section-gapTop">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-head mb--50">
                    <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle">Brand I have Work With</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      You Can Find Me On
                    </h2>
                    <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Business consulting consultants provide expert advice and
                      guida businesses to help them improve their performance,
                      efficiency, and organizational
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Brands1 parentClass="our-supported-company-area" />
          <Services4 />
          <Portfolios4 id={"portfolio"} />
          <Experiences3 />
          <Pricing1 parentClass="our-price-plan-area tmp-section-gapTop" />
          <Blogs2 />
          <Contact1 parentClass="get-in-touch-area tmp-section-gapBottom" />
          <Footer2 />
        </div>
        <IntroVideo />
      </div>
    </>
  );
}
