import { useContent } from "@/contexts/ContentContext";

export default function BlogModal() {
  const { currentBlog } = useContent();
  return (
    <div
      className="modal fade"
      id="exampleModalCenters"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-news"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </span>
            </button>
          </div>
          {/* End of .modal-header */}
          <div className="modal-body">
            <img
              className="img-fluid mb--30"
              alt="Blog Thumbnail"
              src={currentBlog.image}
              width={410}
              height={291}
            />
            <div className="news-details">
              <span className="date">10 March, 2025</span>
              <h2>{currentBlog.title}</h2>
              <p>
                We are excited to announce the grand opening of our new
                headquarters, a space designed to foster innovation and
                collaboration. This move marks a significant milestone in our
                journey toward growth and excellence.
              </p>
              <h4>Enhancing Workspaces for Productivity.</h4>
              <p>
                Our new office is equipped with state-of-the-art facilities,
                promoting creativity and teamwork. The modern design, coupled
                with advanced technology, aims to improve efficiency and
                employee well-being.
              </p>
              <p>
                We believe this new environment will enable us to serve our
                clients better and drive success. Our team is enthusiastic about
                the future, and we can't wait to achieve new heights together.
              </p>
              <h4>Future Prospects and Innovations.</h4>
              <p>
                With this expansion, we are set to introduce new services and
                solutions tailored to meet evolving market needs. Our commitment
                to quality and innovation remains steadfast as we continue to
                grow.
              </p>
            </div>
            {/* Comment Section Area Start */}
            <div className="comment-inner">
              <h3 className="title mb--40 mt--50">Leave a Reply</h3>
              <div className="tmp-contact-form contact-form-style-1">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="row g-5">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" />
                        <label>Name</label>
                        <span className="focus-border" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" />
                        <label>Email</label>
                        <span className="focus-border" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea defaultValue={""} />
                    <label>Leave Comment</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <div className="tmp-button-here">
                      <a
                        className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                        href="#"
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">Submit Now</span>
                          <div className="btn-hack" />
                          <img
                            alt=""
                            className="btn-bg"
                            src="assets/images/button/btg-bg.svg"
                            width={195}
                            height={56}
                          />
                          <img
                            alt=""
                            className="btn-bg-hover"
                            src="assets/images/button/btg-bg-2.svg"
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
                </form>
              </div>
            </div>
            {/* Comment Section End */}
          </div>
          {/* End of .modal-body */}
        </div>
      </div>
    </div>
  );
}
