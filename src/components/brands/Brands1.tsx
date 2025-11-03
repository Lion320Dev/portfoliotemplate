import { companyLogos } from "@/data/brands";
export default function Brands1({
  parentClass = "our-supported-company-area tmp-section-gapTop",
}) {
  return (
    <div className={parentClass}>
      <div className="container">
        <div className="row justify-content-center">
          {companyLogos.map((logo, index) => (
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6" key={index}>
              <div
                className={`support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <img
                  alt="Virtuo - Personal Portfolio HTML Template"
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
