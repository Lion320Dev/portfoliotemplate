import { blogPosts } from "@/data/blogs";
import { useContent } from "@/contexts/ContentContext";
export default function Blogs1() {
  const { setCurrentBlog } = useContent();
  return (
    <section className="blog-and-news-are tmp-section-gapTop" id="blog">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle theme-gradient">Latest Blog</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Transforming Ideas into Exceptional <br />
            the man can Creations
          </h2>
        </div>
        <div className="row g-5 animation-action-1">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image"
            >
              <div
                className={`blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${
                  index + 1
                } single-animation`}
                data-bs-toggle="modal"
                onClick={() => setCurrentBlog(post)}
                data-bs-target="#exampleModalCenters"
              >
                <div className="blog-card-img">
                  <div className="img-box">
                    <a href="#">
                      <img
                        alt="Blog Thumbnail"
                        src={post.image}
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
                          {post.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments" />
                          Comments ({post.comments})
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="blog-title">
                    <a href="#">{post.title}</a>
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
                <div className={`tmp-light light-${post.lightPosition}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
