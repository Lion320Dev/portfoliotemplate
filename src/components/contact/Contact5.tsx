import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact5() {
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
              Feel free to reach out!I’m always open to discussing new ideas,
              collaborations, or freelance opportunities.
            </p>
          </div>
          <div className="contact-inner position-relative">
            <div className="contact-form">
              <form id="contact-form" ref={form} onSubmit={sandMail}>
                <div className="contact-form-wrapper row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="contact-name"
                        placeholder="Your Name"
                        id="contact-name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="contact-email"
                        placeholder="Your Email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        name="contact-phone"
                        placeholder="Phone Number"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="input-field"
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        name="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="input-field"
                        placeholder="Your Message"
                        name="contact-message"
                        id="contact-message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Appointment Now</span>
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
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="tmp-light light-center-center active" />
          </div>
        </div>
      </div>
    </div>
  );
}
