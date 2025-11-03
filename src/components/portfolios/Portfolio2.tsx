import { portfolioItems } from "@/data/portfolio";

import { useContent } from "@/contexts/ContentContext";
export default function Portfolio2() {
  const { setCurrentPortfolio } = useContent();
  return (
    <div
      className="latest-portfolio-area custom-column-grid tmp-section-gapTop"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">Latest Portfolio</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Transforming Ideas into <br />
            Exceptional
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="row animation-action-3">
          {portfolioItems.map((item, index) => (
            <div className="col-lg-6 col-sm-6 paralax-image" key={index}>
              <div
                className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${item.order}`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                onClick={() => setCurrentPortfolio(item)}
              >
                <div className="portfoli-card-img tmponhover single-animation">
                  <div className="img-box v2">
                    <a
                      className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                      href="#"
                    >
                      <img
                        className="w-100"
                        alt="Thumbnail"
                        src={item.image}
                        width={1920}
                        height={1572}
                      />
                    </a>
                  </div>
                  <div className="tmp-light light-left" />
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <a className="link" href="#">
                        {item.title}
                      </a>
                    </h3>
                    <p className="portfoli-card-para">{item.description}</p>
                  </div>
                  <a href="#" className="tmp-arrow-icon-btn">
                    <div className="btn-inner">
                      <i className="tmp-icon fa-solid fa-arrow-up-right" />
                      <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
