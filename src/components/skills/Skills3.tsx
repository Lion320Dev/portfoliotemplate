import { expertiseData } from "@/data/skills";
export default function Skills3() {
  return (
    <section className="my-expertise-area tpm-custom-box-bg">
      <div className="container">
        <div className="header-top-inner">
          <div className="section-head text-align-left">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle theme-gradient">My Expertise</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Elevated Designs Personalized <br />
              the best Experiences
            </h2>
          </div>
          <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
            <p className="description color-primary-3rd">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>
        </div>
        <div className="services-widget v2">
          {expertiseData.map((item, index) => (
            <div
              className={`service-item tmp-scroll-trigger tmp-fade-in animation-order-${
                item.order
              } ${index === 0 ? "current" : ""}`}
              key={item.title}
            >
              <div className="my-expertise-card-wrap">
                <div className="expertise-card-left">
                  <div className="expertise-card-logo">
                    <img alt="logo" src={item.logo} width={45} height={45} />
                  </div>
                  <h3 className="title">{item.title}</h3>
                </div>
                <div
                  className="single-progress-circle sal-animate"
                  data-sal-delay={300}
                  data-sal="slide-up"
                  data-sal-duration={1000}
                >
                  <svg
                    className="radial-progress"
                    data-countervalue={item.percentage}
                    viewBox="0 0 80 80"
                  >
                    <circle className="bar-static" cx={40} cy={40} r={35} />
                    <circle
                      className="bar--animated"
                      cx={40}
                      cy={40}
                      r={35}
                      style={{ strokeDashoffset: "131.947px" }}
                    />
                    <text
                      className="countervalue"
                      x="50%"
                      y="55%"
                      transform="matrix(0, 1, -1, 0, 80, 0)"
                    >
                      {item.percentage}%
                    </text>
                  </svg>
                </div>
                <p className="para">{item.description}</p>
              </div>
              <button className="service-link modal-popup" />
            </div>
          ))}
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
