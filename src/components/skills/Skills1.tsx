import { skills } from "@/data/skills";
export default function Skills1({
  parentClass = "my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10",
}) {
  return (
    <section className={parentClass} id="resume">
      <div className="tpm-custom-box-bg position-relative overflow-hidden border--radious-20">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-area-left-content-wrap">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle theme-gradient">My Skill</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    My Experts Areas Where I <br />
                    Gained Skill
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Business consulting consultants provide expert advice and
                    guida busi nesses to help them improve their performance,
                    efficiency, and organ izational Business consulting
                    consultants provide
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-card-style-two row">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className="col-lg-6 col-md-6 col-12 paralax-image"
                  >
                    <div
                      className={`my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="card-icon">
                        <img
                          alt={skill.iconAlt}
                          src={skill.iconSrc}
                          width={skill.iconWidth}
                          height={skill.iconHeight}
                        />
                      </div>
                      <h3 className="card-title">{skill.title}</h3>
                      <p className="card-para">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tmp-light light-top-left active" />
      </div>
    </section>
  );
}
