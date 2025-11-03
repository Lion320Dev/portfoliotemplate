import { experienceList, experiences } from "@/data/experiences";
export default function Experiences1({
  parentClass = "education-experience tmp-section-gapTop",
}) {
  return (
    <section className={parentClass} id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">
              Education &amp; Experience
            </span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Empowering Creativity <br />
            through
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="row g-5 animation-action-3">
          {experienceList.map((item, index) => (
            <div className="col-lg-6 paralax-image col-sm-6" key={index}>
              <div
                className={`education-experience-card single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h4 className="edu-sub-title">{item.subtitle}</h4>
                <h2 className="edu-title">{item.title}</h2>
                <div className="tmp-light light-top-left" />
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Experiences
                </h2>
                {experiences.map((exp, index) => (
                  <div
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${
                      index + 1
                    }`}
                    key={index}
                  >
                    <p className="ex-subtitle theme-gradient">experience</p>
                    <h2 className="ex-name">{exp.company}</h2>
                    <h3 className="ex-title">{exp.role}</h3>
                    <p className="ex-para">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 paralax-image">
              <div className="experiences-wrap-right-content">
                <img
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="expert-img"
                  src="/assets/images/experiences/expert-img.jpg"
                  width={945}
                  height={719}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
