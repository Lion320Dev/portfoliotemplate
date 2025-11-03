import { blogCards } from "@/data/blogs";
import { useContent } from "@/contexts/ContentContext";
export default function Blogs3() {
  const { setCurrentBlog } = useContent();
  return (
    <div
      className="blog-area-left-portfolio-fixed tmp-section-gapBottom finance banner-personal-portfolio signle-section"
      id="blog"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--20">
            <h4 className="subtitle wow move-right">
              <i className="fa-regular fa-envelope" /> RECENT POST
            </h4>
            <h2 className="title">
              My <span>Articles!</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row animation-action-3">
        {blogCards.map((item, index) => (
          <div className="col-lg-6 col-md-6 paralax-image" key={index}>
            <div
              className={`blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${
                index + 1
              } single-animation active`}
              data-bs-toggle="modal"
              onClick={() => setCurrentBlog(item)}
              data-bs-target="#exampleModalCenters"
            >
              <div className="blog-card-img">
                <div className="img-box">
                  <a href="#">
                    <img
                      alt="Blog Thumbnail"
                      src={item.image}
                      width={410}
                      height={291}
                    />
                  </a>
                </div>
              </div>
              <div className="blog-content-wrap">
                <div className="blog-tags">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user" />
                        {item.author}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments" />
                        Comments ({item.comments})
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="blog-title">
                  <a href="#">{item.title}</a>
                </h3>
                <div className="tmp-button-here">
                  <a
                    className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon"
                    href="#"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Read More</span>
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
                        <i className="ffa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="ffa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`tmp-light light-${item.lightPosition}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
