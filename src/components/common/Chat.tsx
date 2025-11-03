import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Chat() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_cyobi0y", "template_4nbexqj", form.current, {
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
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">Let's chat with me? - Online</div>
        <div className="chat-box">
          <div className="desc-text">
            Please fill out the form below to start chatting with me directly.
          </div>
          <form className="tmp-dynamic-form" ref={form} onSubmit={sendMail}>
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder="Your Message"
                name="message"
                required
                defaultValue=""
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
