import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact7() {
  const form = useRef<HTMLFormElement>(null);

  const sandMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", form.current!, {
        publicKey: "D79JdTqxXVCcQBXL4",
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Message Sent successfully!", { autoClose: 5000 });
          form.current?.reset();
        } else {
          toast.error("Oops! Message not Sent!", { autoClose: 5000 });
        }
      })
      .catch((error) => {
        toast.error(`Error sending message: ${error}`, { autoClose: 5000 });
      });
  };
  return (
    <div className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header pb--20">
            <h4 className="subtitle wow move-right">
              <i className="fa-regular fa-envelope" /> CONTACT WITH ME
            </h4>
            <h2 className="title">
              Let's Work <span>Together!</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 center-light-wrapper">
          <div className="center-light" />
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="tmp-contact-form contact-form-style-1">
                <form ref={form} onSubmit={sandMail}>
                  <div className="form-group">
                    <input required type="text" />
                    <label>Name</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input required type="email" />
                    <label>Email</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input required type="text" />
                    <label>Subject</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <textarea defaultValue={""} />
                    <label>Message</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <div className="tmp-button-here">
                      <button
                        type="submit"
                        className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon w-100"
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
                      </button>
                    </div>
                  </div>
                </form>
                <div className="personal-information text-center">
                  <span className="text">Or call me now</span>
                  <span>
                    <i className="fal fa-phone-alt" />
                    <a href="#">(123) 456 7890</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
