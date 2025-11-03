import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact6() {
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
    <div className="tmp-contact-area" id="contacts">
      <div className="inner">
        <div className="contact-get-in-touch-wrap">
          <div className="section-head text-align-left mb--50">
            <h5 className="pre-title mb--20">GET IN TOUCH</h5>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Contact With Me
            </h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              Have a project in mind, a question, or just want to say hello?
              Feel free to reach out!
              <br />
              I’m always open to discussing new ideas, collaborations, or
              freelance opportunities.
            </p>
          </div>
          <div className="contact-inner">
            <div className="tmp-contact-form-wrapper center-light-wrapper">
              <div className="center-light" />
              <div className="row g-5">
                <div className="col-lg-5 paralax-image">
                  <div className="contact-info-box">
                    <div className="tmp-light light-top-left" />
                    <div className="inner">
                      <h3 className="title">Hey Contact With Me!</h3>
                      <p className="mt--40">
                        Fill out the form below or reach out to us at
                        <a className="theme-gradient" href="#">
                          helloexample@gmail.com
                        </a>
                        We'd love to learn more about you and what we can build
                        together.
                      </p>
                    </div>
                    <i className="fa-solid fa-headset" />
                  </div>
                </div>
                <div className="col-lg-7">
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
                            className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon w-100"
                            type="submit"
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
      </div>
    </div>
  );
}
