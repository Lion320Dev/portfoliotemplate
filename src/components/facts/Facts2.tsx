import OdometerComponent from "../common/OdometerComponent";
import { counterData2 } from "@/data/facts";

export default function Facts2() {
  return (
    <section className="counter-area">
      <div className="container">
        <div className="row g-5 animation-action-3">
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 paralax-image">
            <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
              <div className="year-expariance-wrap with-flex">
                {/* <h2 class="year-number"><span class="counter">25 </span> </h2> */}
                <h2 className="counter year-number">
                  <OdometerComponent max={25} />
                </h2>
                <h3 className="year-title">
                  Years Of <br />
                  experience
                </h3>
              </div>
              <p className="year-para">
                Business consulting consultants provide expert advice and guida
                the a businesses to help theme their.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="counter-area-right-content">
              <div className="row g-5">
                {counterData2.map((item, index) => (
                  <div
                    className="col-lg-6 col-sm-6 col-12 paralax-image"
                    key={index}
                  >
                    <div
                      className={`counter-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${
                        item.animationOrder
                      } ${item.active ? "active" : ""}`}
                    >
                      <h3 className="counter counter-title">
                        <OdometerComponent max={item.count} />
                        {item.unit}
                      </h3>
                      <div className="tmp-light light-left" />
                      <p className="counter-para">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
