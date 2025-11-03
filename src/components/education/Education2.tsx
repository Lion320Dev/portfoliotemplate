import { resumeList } from "@/data/education";

export default function Education2({
  parentClass = "pb--80 banner-personal-portfolio experience-style-list signle-section",
}) {
  return (
    <div className={parentClass}>
      <div className="section-header pb--20">
        <h4 className="subtitle wow move-right">
          <i className="fa-regular fa-user" /> MY RESUME
        </h4>
        <h2 className="title">
          Education &amp; <span>Experience</span>
        </h2>
      </div>
      <div className="content">
        <div className="experience-list animation-action-2">
          {resumeList.map((item, index) => (
            <div
              className={`resume-single-list bg-card single-animation tmponhover ${
                item.active ? "active" : ""
              } ${item.extraClass || ""}`}
              key={index}
            >
              <div className="inner">
                <div className="heading">
                  <div className="title">
                    <h4>{item.title}</h4>
                    <span>{item.institute}</span>
                  </div>
                  <div className="date-of-time">
                    <span>{item.rating}</span>
                  </div>
                </div>
                <p className="description">{item.description}</p>
              </div>
              <div className="tmp-light light-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
