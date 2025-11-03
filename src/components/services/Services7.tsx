import { services3 } from "@/data/services";
export default function Services7() {
  return (
    <div className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--20">
            <h4 className="subtitle wow move-right">
              <i className="fa-solid fa-layer-group" /> MY SERVICES
            </h4>
            <h2 className="title">
              My <span>Specializations</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-5 service-wrapper animation-action-3">
        {services3.map(({ iconClass, title, description, active }, idx) => (
          <div key={idx} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div
              className={`service service__style--1 bg-color-card service-narrow radius text-center tmp-border-none tmponhover single-animation${
                active ? " active" : ""
              }`}
            >
              <div className="icon">
                <i className={iconClass} />
              </div>
              <div className="content">
                <h4 className="title w-600">
                  <a href="#">{title}</a>
                </h4>
                <p className="description mb--0">{description}</p>
                <div className="discover-btn mt--20">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border btn-sm tmp-modern-button download-icon"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Services</span>
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
              </div>
              <div className="tmp-light light-left" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
