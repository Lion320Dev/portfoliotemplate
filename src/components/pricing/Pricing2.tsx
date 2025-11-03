import { pricingPackages } from "@/data/pricing";
export default function Pricing2() {
  return (
    <div
      className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section"
      id="pricing"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--20">
            <h4 className="subtitle wow move-right">
              <i className="fa-sharp fa-solid fa-circle-dollar" />
              PRICING
            </h4>
            <h2 className="title">
              My <span>Pricing</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="pricing-table-items">
        <div className="row g-5 animation-action-6">
          {pricingPackages.map((pkg, idx) => (
            <div key={idx} className="col-md-6 paralax-image">
              <div className="pricing-table-col-2 tmponhover single-animation">
                <div className="pricing-table-header">
                  <div className="top d-flex justify-content-between align-items-start">
                    <h4>{pkg.title}</h4>
                    <p
                      className="text-right"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {pkg.description}
                    </p>
                  </div>
                  <h3>
                    {pkg.price} <span>{pkg.priceSuffix}</span>
                  </h3>
                </div>
                <ul className="feature-lists">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a className="tmp-btn btn-border tmp-modern-button" href="#">
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">pick this package</span>
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
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
