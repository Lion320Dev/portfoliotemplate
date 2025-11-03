import { pricePlans } from "@/data/pricing";

export default function Pricing1({
  parentClass = "our-price-plan-area tmp-section-gapBottom",
}) {
  return (
    <section className={parentClass} id="pricing">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">My Price plan</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Enhancing Collaboration <br />
            between Remote
          </h2>
        </div>
        <div className="row align-items-center">
          {pricePlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 paralax-image">
              <div
                className={`${plan.className} ${plan.active ? "active" : ""}`}
              >
                <span className="price-sub-title">{plan.title}</span>
                <h3 className="main-price">{plan.price}</h3>
                <p className="per-month">{plan.perMonth}</p>
                <div className="check-box">
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <div className="check-box-item">
                          <div className="box-icon">
                            <i className="fa-solid fa-circle-check" />
                          </div>
                          <p className="box-para">{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tmp-button-here">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <div className="btn-hack" />
                      <img
                        alt=""
                        className="btn-bg"
                        src="/assets/images/button/btg-bg.svg"
                        width={195}
                        height={56}
                      />
                      <img
                        alt=""
                        className="btn-bg-hover"
                        src="/assets/images/button/btg-bg-2.svg"
                        width={193}
                        height={62}
                      />
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="tmp-light light-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
