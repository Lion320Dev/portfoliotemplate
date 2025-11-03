import About2 from "@/components/about/About2";

import Blogs2 from "@/components/blogs/Blogs2";
import IntroVideo from "@/components/common/IntroVideo";
import Contact1 from "@/components/contact/Contact1";
import Experiences1 from "@/components/experience/Experiences1";
import Footer2 from "@/components/footers/Footer2";

import Header1 from "@/components/headers/Header1";
import MobileMenu from "@/components/headers/HeaderMobile";
import Hero4 from "@/components/hero/Hero4";
import Portfolio1 from "@/components/portfolios/Portfolio1";
import Pricing1 from "@/components/pricing/Pricing1";
import Services3 from "@/components/services/Services3";
import { navItems4 } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 05 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomepageLight5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="tmp-white-version">
        <Header1 navItems={navItems4} />
        <MobileMenu navItems={navItems4} />
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
        <Hero4 />
        <About2 parentClass="about-us-area tmp-section-gapTop" />
        <Services3 id="service" />
        <Portfolio1 parentClass="latest-portfolio-area custom-column-grid tmp-section-gapTop" />
        <Experiences1 parentClass="education-experience tmp-section-gapTop" />
        <Pricing1 parentClass="our-price-plan-area tmp-section-gapTop" />
        <Blogs2 />
        <Contact1 parentClass="get-in-touch-area tmp-section-gapBottom" />
        <Footer2 parentClass="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap" />{" "}
        <IntroVideo />
      </div>
    </>
  );
}
