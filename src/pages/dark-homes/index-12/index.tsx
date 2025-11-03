import About2 from "@/components/about/About2";
import Blogs1 from "@/components/blogs/Blogs1";
import IntroVideo from "@/components/common/IntroVideo";
import Contact1 from "@/components/contact/Contact1";
import Facts1 from "@/components/facts/Facts1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobileMenu from "@/components/headers/HeaderMobile";
import Hero7 from "@/components/hero/Hero7";
import Portfolio1 from "@/components/portfolios/Portfolio1";
import Pricing1 from "@/components/pricing/Pricing1";
import Services1 from "@/components/services/Services1";
import Skills1 from "@/components/skills/Skills1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 12 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function Homepage12() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <MobileMenu />
      <div className="main-wrapper-inner">
        <Hero7 />
        <Services1 />
        <About2 />
        <Facts1 />
        <Skills1 />
        <Portfolio1 />
        <Pricing1 />
        <Contact1 />
        <Blogs1 />
        <Footer1 />
        <IntroVideo />
      </div>
    </>
  );
}
