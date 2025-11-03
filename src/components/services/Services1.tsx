import { aboutUsCards } from "@/data/services";

export default function Services1() {
  return (
    <div className="tmp-service-area tmp-section-gapBottom" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle theme-gradient">What I Do</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                What I Provide For You
              </h2>
            </div>
          </div>
        </div>
        <div className="about-us-section-card row g-5 animation-action-2">
          {aboutUsCards.map(
            ({ iconClass, title, para, animationOrder, active }, idx) => (
              <div
                key={idx}
                className="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
              >
                <div
                  className={`about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-${animationOrder} ${
                    active ? "active" : ""
                  }`}
                >
                  <div className="card-head">
                    <div className="logo-img">
                      <i className={iconClass} />
                    </div>
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p className="card-para">{para}</p>
                  <div className="tmp-light light-center" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
