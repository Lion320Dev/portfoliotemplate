import About2 from "@/components/about/About2";
import Blogs2 from "@/components/blogs/Blogs2";
import IntroVideo from "@/components/common/IntroVideo";
import Contact1 from "@/components/contact/Contact1";
import Experiences2 from "@/components/experience/Experiences2";
import Footer3 from "@/components/footers/Footer3";
import Header2 from "@/components/headers/Header2";
import MobileMenu from "@/components/headers/HeaderMobile";
import Hero3 from "@/components/hero/Hero3";
import Portfolio1 from "@/components/portfolios/Portfolio1";
import Skills1 from "@/components/skills/Skills1";
import Skills2 from "@/components/skills/Skills2";
import Skills3 from "@/components/skills/Skills3";
import Testimonials2 from "@/components/testimonials/Testimonials2";
import TextBanner1 from "@/components/textBanner/TextBanner1";
import { navItems2 } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 03 || Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio Reactjs Template | Freelancer & Developer Portfolio",
};
export default function HomepageLight3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="tmp-white-version">
        <Header2 navItems={navItems2} />
        <MobileMenu navItems={navItems2} />
        <Hero3 light />
        <TextBanner1 />
        <About2 />
        <Experiences2 />
        <Skills2 id="service" />
        <Portfolio1 />
        <Skills3 />
        <Testimonials2 />
        <Skills1 parentClass="my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--70" />
        <Contact1 parentClass="get-in-touch-area tmp-section-gapTop" />
        <Blogs2 />
        <Footer3 /> <IntroVideo />
      </div>
    </>
  );
}
