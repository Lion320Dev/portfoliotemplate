import { educationEntries } from "@/data/education";
import { resumeEntries } from "@/data/experiences";

export default function Experiences2() {
  return (
    <section className="resume-section tmp-section-gapTop" id="resume-section">
      <div className="container">
        <div className="row animation-action-3">
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h2 className="section-title">
                <i className="fa-regular fa-award" /> My Experience
              </h2>
            </div>
            <div className="resume-widget">
              {resumeEntries.map((entry, index) => (
                <div className="paralax-image" key={index}>
                  <div
                    className={`resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${
                      index + 1
                    } ${entry.extraClass || ""}`}
                  >
                    <div className="time">
                      <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15" />
                      {entry.time}
                    </div>
                    <h3 className="resume-title">{entry.title}</h3>
                    <div className="institute">{entry.institute}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
              <h2 className="section-title">
                <i className="fa-regular fa-graduation-cap" /> My Education
              </h2>
            </div>
            <div className="resume-widget">
              {educationEntries.map((entry, index) => (
                <div className="paralax-image" key={index}>
                  <div
                    className={`resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-${
                      index + 1
                    } ${entry.extraClass || ""}`}
                  >
                    <div className="time">
                      <i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15" />
                      {entry.time}
                    </div>
                    <h3 className="resume-title">{entry.title}</h3>
                    <div className="institute">{entry.institute}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
