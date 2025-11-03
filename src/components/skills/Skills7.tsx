import { progressBars } from "@/data/skills";

export default function Skills7() {
  return (
    <div className="banner-personal-portfolio signle-section pb--80">
      <div className="section-header pb--50">
        <h4 className="subtitle">
          <i className="fa-regular fa-user" /> ABOUT ME
        </h4>
        <h2 className="title">
          Every great design begin with <br />
          an even <span>better story</span>
        </h2>
        {/* <p class="about-desc">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both.</p> */}
      </div>
      {progressBars.map(({ title, percent, wowDelay }) => (
        <div key={title} className="single-progress large-size no-radius">
          <h6 className="title">{title}</h6>
          <div className="progress">
            <div
              className="progress-bar wow fadeInLeft"
              data-wow-duration="0.5s"
              {...(wowDelay ? { "data-wow-delay": wowDelay } : {})}
              role="progressbar"
              style={{ width: `${percent}%` }}
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
            <span className="progress-number">{percent}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
