import Blogs2 from "@/components/blogs/Blogs2";
import Brands1 from "@/components/brands/Brands1";
import IntroVideo from "@/components/common/IntroVideo";
import Contact2 from "@/components/contact/Contact2";
import Experiences1 from "@/components/experience/Experiences1";
import Features1 from "@/components/features/Features1";
import Footer1 from "@/components/footers/Footer1";
import MobileMenu from "@/components/headers/HeaderMobile";
import HeaderMobile2 from "@/components/headers/HeaderMobile2";
import SidebarNav from "@/components/headers/SidebarNav";
import Hero11 from "@/components/hero/Hero11";
import Portfolio2 from "@/components/portfolios/Portfolio2";
import Pricing1 from "@/components/pricing/Pricing1";
import { navItems5 } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 06 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function Homepage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-with-left-header-body">
        <SidebarNav />
        <HeaderMobile2 />
        <MobileMenu navItems={navItems5} />
        <div className="page-with-left-header">
          <Hero11 />
          <Features1 />
          <Portfolio2 />
          <Experiences1 />
          <Brands1 />
          <Pricing1 parentClass="our-price-plan-area tmp-section-gapTop" />
          <Blogs2 />
          <Contact2 />
          <Footer1 />
          <IntroVideo />
        </div>
      </div>
    </>
  );
}
