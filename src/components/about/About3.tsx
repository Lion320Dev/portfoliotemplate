import { progressItems } from "@/data/skills";

export default function About3() {
  return (
    <div
      className="banner-personal-portfolio signle-section tmp-section-gapBottom"
      id="about"
    >
      <div className="section-header pb--50">
        <h4 className="subtitle">
          <i className="fa-regular fa-user" /> ABOUT ME
        </h4>
        <h2 className="title">
          Every great design begin with <br />
          an even <span>better story</span>
        </h2>
      </div>
      {progressItems.map((item, index) => (
        <div className="single-progress large-size no-radius" key={index}>
          <h6 className="title">{item.title}</h6>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay={item.delay}
              role="progressbar"
              style={{ width: `${item.percent}%` }}
              aria-valuenow={item.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
            <span className="progress-number">{item.percent}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
