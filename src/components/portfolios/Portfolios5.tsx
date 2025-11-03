import { smallPortfolioItems } from "@/data/portfolio";
import { useContent } from "@/contexts/ContentContext";
export default function Portfolios5() {
  const { setCurrentPortfolio } = useContent();
  return (
    <div
      className="tmp-portfolio-section-area banner-personal-portfolio signle-section tmp-section-gapBottom"
      id="portfolio"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--10">
            <h4 className="subtitle wow move-right">
              <i className="fa-light fa-briefcase" /> PORTFOLIO
            </h4>
            <h2 className="title">
              Featured <span>Projects</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-5 mt--0 animation-action-5">
        {smallPortfolioItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="col-lg-6 col-xl-6 col-md-6 col-12 paralax-image"
            {...(index % 2 !== 0 ? { "data-sal-delay": 200 } : {})}
          >
            <div
              className={`tmp-portfolio-small bg-color-card tmponhover single-animation${
                index === 0 ? " active" : ""
              }`}
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              onClick={() => setCurrentPortfolio(item)}
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      alt={item.alt}
                      src={item.image}
                      width={1010}
                      height={756}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="#">{item.category}</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="#">
                          <i className="feather-heart" />
                        </a>
                        {item.likes}
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      {item.title}
                      <i className="fa-solid fa-arrow-up-right" />
                    </a>
                  </h4>
                </div>
              </div>
              <div className="tmp-light light-left" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
