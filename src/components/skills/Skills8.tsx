import { skillsData } from "@/data/skills";
import OdometerComponent from "../common/OdometerComponent";
export default function Skills8({
  parentClass = "tmp-service-area pb--80 banner-personal-portfolio signle-section",
}) {
  return (
    <div className={parentClass}>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--20">
            <h4 className="subtitle wow move-right">
              <i className="fa-solid fa-layer-group" /> MY SKILL
            </h4>
            <h2 className="title">
              My <span>Specializations</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-5 skills-wrapper text-center animation-action-4">
        {skillsData.map((skill, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
            <div
              className={`skill-style-border-card single-animation tmponhover ${
                skill.active ? "active" : ""
              }`}
            >
              <div className="skill-inner">
                <img
                  alt={skill.name}
                  src={skill.image}
                  width={skill.width}
                  height={skill.height}
                />
                <h3 className="count-number">
                  <OdometerComponent max={skill.percentage} />%
                </h3>
                <p className="name">{skill.name}</p>
              </div>
              <div className="tmp-light light-left" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
