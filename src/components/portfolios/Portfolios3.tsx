import { styledPortfolioItems } from "@/data/portfolio";
import { useContent } from "@/contexts/ContentContext";
export default function Portfolios3() {
  const { setCurrentPortfolio } = useContent();
  return (
    <section className="tmp-latest-portfolio tmp-section-gapTop" id="portfolio">
      <div className="container">
        <div className="header-top-inner">
          <div className="section-head text-align-left">
            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle theme-gradient">Recent Portfolio</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Transforming Ideas <br />
              into Exceptional
            </h2>
          </div>
          <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
            <p className="description">
              Business consulting consultants provide expert advice and guida
              <span className="theme-gradient">businesses</span> to help them
              improve their performance, efficiency, and organizational
            </p>
          </div>
        </div>
        <div className="row g-5 animation-action-2">
          {styledPortfolioItems.map((item, index) => (
            <div className="col-lg-6 col-md-6 col-12 paralax-image" key={index}>
              <div
                className={`latest-portfolio-card-style-two single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                onClick={() => setCurrentPortfolio(item)}
              >
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <a href="#">
                      <img
                        className="img-primary hidden-on-mobile"
                        alt="Blog Thumbnail"
                        src={item.image}
                        width={1134}
                        height={1176}
                      />
                      <img
                        className="img-secondary"
                        alt="Blog Thumbnail"
                        src={item.image}
                        width={1134}
                        height={1176}
                      />
                    </a>
                  </div>
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <div className="tag-items">
                      <ul>
                        {item.tags.map((tag, tagIndex) => (
                          <li key={tagIndex}>
                            <a href="#" className="tag-item">
                              {tag}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="tmp-button-here">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round btn-md"
                      href="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">View Design</span>
                        <div className="btn-hack" />
                        <img
                          alt=""
                          className="btn-bg"
                          src="/assets/images/button/btg-bg.svg"
                          width={195}
                          height={56}
                        />
                        <img
                          alt=""
                          className="btn-bg-hover"
                          src="/assets/images/button/btg-bg-2.svg"
                          width={193}
                          height={62}
                        />
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tmp-light light-center" />
              </div>
            </div>
          ))}
        </div>
        <div className="see-all-btn-wrap text-center mt--60">
          <a
            className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
            href="#"
          >
            <div className="icon-reverse-wrapper">
              <span className="btn-text">View All Portfolio</span>
              <div className="btn-hack" />
              <img
                alt=""
                className="btn-bg"
                src="/assets/images/button/btg-bg.svg"
                width={195}
                height={56}
              />
              <img
                alt=""
                className="btn-bg-hover"
                src="/assets/images/button/btg-bg-2.svg"
                width={193}
                height={62}
              />
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
