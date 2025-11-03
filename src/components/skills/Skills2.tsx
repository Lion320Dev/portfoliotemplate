import { progressCharts, skillProgress } from "@/data/skills";

export default function Skills2({ id = "about" }) {
  return (
    <div className="tmp-skill-area tmp-section-gapTop" id={id}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Design Skill
                </h2>
                {progressCharts.map(
                  (
                    { title, width, wowDuration, wowDelay, percentLabel },
                    idx
                  ) => (
                    <div key={idx} className="progress-charts">
                      <h6 className="heading heading-h6">{title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration={wowDuration}
                          data-wow-delay={wowDelay}
                          role="progressbar"
                          style={{
                            width,
                            visibility: "visible",
                            animationDuration: wowDuration,
                            animationDelay: wowDelay,
                            animationName: "fadeInLeft",
                          }}
                          aria-valuenow={parseInt(percentLabel)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="percent-label">{percentLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Development Skill
                </h2>
                {skillProgress.map(
                  (
                    { title, width, wowDuration, wowDelay, percentLabel },
                    idx
                  ) => (
                    <div key={idx} className="progress-charts">
                      <h6 className="heading heading-h6">{title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration={wowDuration}
                          data-wow-delay={wowDelay}
                          role="progressbar"
                          style={{
                            width,
                            visibility: "visible",
                            animationDuration: wowDuration,
                            animationDelay: wowDelay,
                            animationName: "fadeInLeft",
                          }}
                          aria-valuenow={parseInt(percentLabel)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="percent-label">{percentLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
