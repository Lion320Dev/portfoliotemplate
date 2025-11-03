import { portfolioSingleCards } from "@/data/portfolio";
import { useContent } from "@/contexts/ContentContext";
export default function Portfolios6() {
  const { setCurrentPortfolio } = useContent();
  return (
    <div className="tmp-portfolio-area" id="portfolio">
      <div className="inner">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">My Completed Work</h5>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            My Work &amp; Projects
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            As a passionate developer, I take pride in creating innovative,
            high-performing,and user-friendly digital solutions. Below is a
            curated selection of my recent projects.
          </p>
        </div>
        <div className="row animation-action-1">
          {portfolioSingleCards.map((item, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 paralax-image"
              key={index}
            >
              <div
                className="tmp-portfolio-single-card tmponhover single-animation"
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
                            <i className="fa-regular fa-heart" />
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
    </div>
  );
}
