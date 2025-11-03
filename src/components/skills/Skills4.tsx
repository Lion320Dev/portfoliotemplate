import { services4 } from "@/data/services";

export default function Skills3() {
  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">My Skill</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevated Designs Personalized <br />
            the best Experiences
          </h2>
        </div>
        <div className="services-widget v1">
          {services4.map((service, index) => (
            <div
              key={service.title + index}
              className={`service-item tmp-scroll-trigger tmp-fade-in animation-order-${
                index + 1
              } ${service.isCurrent ? "current" : ""}`}
            >
              <div className="my-skill-card">
                <div className="card-icon">
                  <i className={service.iconClass} />
                </div>
                <div className="card-title">
                  <h3 className="main-title">{service.title}</h3>
                  <p className="sub-title">{service.subtitle}</p>
                </div>
                <p className="card-para">{service.description}</p>
                <a href="#" className="read-more-btn">
                  Read More
                  <span className="read-more-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
              </div>
              <button className="service-link modal-popup" />
            </div>
          ))}
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
