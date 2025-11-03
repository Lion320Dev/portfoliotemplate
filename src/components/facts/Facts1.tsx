import { counterData } from "@/data/facts";

import OdometerComponent from "../common/OdometerComponent";

export default function Facts1() {
  return (
    <div className="counter-funfacts-area tmp-section-gapBottom">
      <div className="container">
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
  );
}
