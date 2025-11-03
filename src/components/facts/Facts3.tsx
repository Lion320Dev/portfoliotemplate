import { counterData3 } from "@/data/facts";

import OdometerComponent from "../common/OdometerComponent";

export default function Facts3() {
  return (
    <div className="counterup-area-personal tmp-section-gapBottom">
      <div className="row g-5 animation-action-1">
        {counterData3.map((item, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 paralax-image"
            key={index}
          >
            <div className="count-box counter-style-2 border-style small-radious text-center">
              <div
                className={`counter-main-wrapper-card single-animation tmponhover ${
                  item.active ? "active" : ""
                }`}
              >
                <h3 className="count-number">
                  <OdometerComponent max={item.count} />
                  {item.unit}
                </h3>
                <div className="tmp-light light-center" />
              </div>
              <h5 className="title">{item.title}</h5>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
