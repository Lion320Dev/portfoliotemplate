import { educationList } from "@/data/education";

export default function Education1() {
  return (
    <div className="tmp-section-gapBottom banner-personal-portfolio experience-style-list signle-section">
      <div className="section-header pb--20">
        <h4 className="subtitle wow move-right">
          <i className="fa-regular fa-user" /> MY RESUME
        </h4>
        <h2 className="title">
          Education &amp; <span>Experience</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <div className="experience-list animation-action-2">
              {educationList.map((item, index) => (
                <div
                  className={`resume-single-list bg-card single-animation tmponhover ${
                    item.active ? "active" : ""
                  }`}
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
      </div>
    </div>
  );
}
