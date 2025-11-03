import { services2 } from "@/data/services";
export default function Services6() {
  return (
    <div className="row mt--0">
      <div className="col-xl-8">
        <div className="tmp-profile-card services-card tmponhover paralax-image">
          <div className="tmp-card-body">
            <h3 className="card-title">Services I Offered</h3>
            <div className="services-main mt-24 mt--20">
              <div className="row g-4">
                {services2.map(({ alt, src, width, height, title }, idx) => (
                  <div
                    key={idx}
                    className="col-md-3 col-sm-6 col-12 paralax-image"
                  >
                    <div className="services-item text-center">
                      <div className="image">
                        <img
                          alt={alt}
                          src={src}
                          width={width}
                          height={height}
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">{title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="tmp-light light-center" />
        </div>
      </div>
      <div className="col-xl-4">
        <div className="tmp-profile-card services-card tmponhover">
          <div className="tmp-card-body">
            <div className="tmp-contact-form contact-form-style-1 in-bentogrid">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-group">
                  <input type="email" />
                  <label>Email</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <grammarly-extension
                    data-grammarly-shadow-root="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      pointerEvents: "none",
                    }}
                    className="dnXmp"
                  />
                  <grammarly-extension
                    data-grammarly-shadow-root="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      pointerEvents: "none",
                    }}
                    className="dnXmp"
                  />
                  <textarea
                    autoComplete="off"
                    spellCheck="false"
                    defaultValue={""}
                  />
                  <label>Message</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group mb--0">
                  <div className="tmp-button-here">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border btn-sm tmp-modern-button download-icon w-100"
                      href="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Contact With Me</span>
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
              </form>
            </div>
          </div>
          <div className="tmp-light light-center active" />
        </div>
      </div>
    </div>
  );
}
