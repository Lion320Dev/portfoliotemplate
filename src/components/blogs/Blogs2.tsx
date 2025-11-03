import { blogCardItems } from "@/data/blogs";
import { useContent } from "@/contexts/ContentContext";
export default function Blogs2() {
  const { setCurrentBlog } = useContent();
  return (
    <section className="blog-and-news-are tmp-section-gap" id="blog">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Blog and news</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevating Personal Branding the <br />
            through Powerful Portfolios
          </h2>
        </div>
        <div className="row">
          {blogCardItems.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image"
              key={index}
            >
              <div
                className={`blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${
                  index + 1
                } single-animation`}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenters"
                onClick={() => setCurrentBlog(item)}
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
    </section>
  );
}
