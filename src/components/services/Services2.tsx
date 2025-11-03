import { serviceCards2 } from "@/data/services";
export default function Services2() {
  return (
    <section className="service-area tmp-section-gap" id="service">
      <div className="container">
        <div className="row justify-content-center">
          {serviceCards2.map(
            ({ iconClass, title, link, projects, animationOrder }, idx) => (
              <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                <div
                  className={`service-card-v1 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${animationOrder} tmp-link-animation`}
                >
                  <div className="service-card-icon">
                    <i className={iconClass} />
                  </div>
                  <h4 className="service-title">
                    <a href={link}>{title}</a>
                  </h4>
                  <p className="service-para">{projects}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
