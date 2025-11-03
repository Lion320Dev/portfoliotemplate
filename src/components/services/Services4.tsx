import { serviceCardsV3 } from "@/data/services";
export default function Services4() {
  return (
    <section className="latest-service-area tmp-section-gapTop" id="service">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">Latest Service</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Inspiring The World One <br />
            Project
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="row animation-action-2">
          <div className="col-lg-6">
            {serviceCardsV3.map(
              ({ num, title, para, lightClass, animationOrder }, idx) => (
                <div key={idx} className="paralax-image">
                  <div
                    className={`service-card-v2 tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${animationOrder}`}
                  >
                    <h2 className="service-card-num">
                      <span>{num}</span>
                      {title}
                    </h2>
                    <div className={`tmp-light ${lightClass}`} />
                    <p className="service-para">{para}</p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="col-lg-6 paralax-image">
            <div className="service-card-user-image">
              <img
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="latest-user-image"
                src="/assets/images/experiences/02.webp"
                width={1134}
                height={1176}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
