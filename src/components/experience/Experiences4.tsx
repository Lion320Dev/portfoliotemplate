import { workExperienceData1, workExperienceData2 } from "@/data/experiences";

export default function Experiences4() {
  return (
    <div className="tmp-profile-card paralax-image tmponhover single-animation">
      <div className="tmp-card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <ul className="work-experiance-slider list-unstyled">
            {workExperienceData1.map((item, index) => (
              <li key={index}>
                <div className="date">
                  <p>{item.date}</p>
                </div>
                <div className="info">
                  <div className="icon">
                    <img
                      alt={item.alt}
                      src={item.src}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <h6 className="subtitle">{item.subtitle}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Second list */}
          <ul className="work-experiance-slider list-unstyled">
            {workExperienceData2.map((item, index) => (
              <li key={index}>
                <div className="date">
                  <p>{item.date}</p>
                </div>
                <div className="info">
                  <div className="icon">
                    <img
                      alt={item.alt}
                      src={item.src}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <h6 className="subtitle">{item.subtitle}</h6>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tmp-light light-center" />
    </div>
  );
}
