import TyperComponent from "../common/TyperComponent";
export default function Profile1() {
  return (
    <div className="profile-image-1-personal-left-fixed">
      <div className="inner-content">
        <img
          alt="business-coatch"
          src="/assets/images/banner/portfolio-image-1.jpg"
          width={912}
          height={1218}
        />
        <h3 className="title">
          Hello I'm <br />
          John Deon
          <br />a{" "}
          <span className="header-caption">
            <span className="cd-headline clip is-full-width">
              <TyperComponent
                className="theme-gradient"
                strings={["Developer.", "Designer.", "Writer."]}
              />
            </span>
          </span>
        </h3>
        <ul className="social-icon social-default color-lessdark justify-content-center">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkdin.com/">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
