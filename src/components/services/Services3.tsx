import { serviceCardsV2 } from "@/data/services";
export default function Services3({ id = "latest-service" }) {
  return (
    <section className="latest-service-area tmp-section-gapTop" id={id}>
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
          <div className="col-lg-6 order-2 order-lg-1">
            {serviceCardsV2.map(
              ({ num, title, para, active, animationOrder }, idx) => (
                <div key={idx} className="paralax-image">
                  <div
                    className={`service-card-v2 single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${animationOrder} ${
                      active ? "active" : ""
                    }`}
                  >
                    <h2 className="service-card-num">
                      <span>{num}</span>
                      {title}
                    </h2>
                    <p className="service-para">{para}</p>
                    <div className="tmp-light light-center" />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="col-lg-6 paralax-image order-1 order-lg-2">
            <div className="service-card-user-image tmponhover single-animation active">
              <img
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="latest-user-image"
                src="/assets/images/services/latest-services-user-image.png"
                width={1134}
                height={1213}
              />
              <div className="tmp-light light-top-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
