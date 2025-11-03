import Blogs2 from "@/components/blogs/Blogs2";
import Brands1 from "@/components/brands/Brands1";
import IntroVideo from "@/components/common/IntroVideo";
import Contact2 from "@/components/contact/Contact2";
import Experiences1 from "@/components/experience/Experiences1";
import Facts2 from "@/components/facts/Facts2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import MobileMenu from "@/components/headers/HeaderMobile";

import Hero2 from "@/components/hero/Hero2";
import Portfolio2 from "@/components/portfolios/Portfolio2";
import Pricing1 from "@/components/pricing/Pricing1";
import Services2 from "@/components/services/Services2";
import Services3 from "@/components/services/Services3";
import Skill3 from "@/components/skills/Skills4";
import Skills2 from "@/components/skills/Skills2";
import Testimonials1 from "@/components/testimonials/Testimonials1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 02 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomepageLight2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="tmp-white-version">
        <Header1 />
        <MobileMenu />
        <Hero2 light />
        <Services2 />
        <Facts2 />
        <Skills2 />
        <Services3 />
        <Experiences1 />
        <Brands1 />
        <Portfolio2 />
        <Skill3 />
        <Pricing1 parentClass="our-price-plan-area tmp-section-gapTop" />
        <Testimonials1 />
        <Contact2 />
        <Blogs2 />
        <Footer2 />
        <IntroVideo />
      </div>
    </>
  );
}
