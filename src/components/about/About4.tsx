import { counterData } from "@/data/facts";

import OdometerComponent from "../common/OdometerComponent";
import { aboutCards } from "@/data/about";

export default function About4() {
  return (
    <div id="about" className="tmp-about-area">
      <div className="about-us-right-content-wrap">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">About Me</h5>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Boost Business Strategic <br />
            Solutions with Us
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            Hello! I'm Fatima, a passionate your profession, e.g., Web
            Developer, Graphic Designer, Data Analyst based in Dhaka. With a
            strong focus on creativity, innovation, and a commitment to
            continuous learning, I bring a unique blend of technical skills and
            artistic vision to each project I undertake.
          </p>
        </div>
        <div className="about-us-section-card row g-5 animation-action-1">
          <h3>What I Do?</h3>
          {aboutCards.map((card, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
              key={index}
            >
              <div
                className={`about-us-card tmp-scroll-trigger tmp-fade-in tmponhover single-animation tmp-control animation-order-${card.animationOrder}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    <i className={card.iconClass} />
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
                <div className={`tmp-light ${card.lightClass}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="pt--40">
          <div className="row g-5">
            {counterData.map((item, index) => (
              <div className="col-lg-3 col-sm-6 col-12" key={index}>
                <div
                  className={`counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-${item.animationOrder}`}
                >
                  <h3 className="counter counter-title">
                    <OdometerComponent max={item.count} />
                    {item.unit}
                  </h3>
                  <p className="counter-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
