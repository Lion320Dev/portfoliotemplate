import { Link } from "react-router-dom";

export default function Footer5({
  parentClass = "tmp-footer-area footer-style-4 tmp-section-gapTop pb--50",
}) {
  return (
    <div className={parentClass}>
      <div className="row">
        <div className="col-lg-12">
          <div className="for-animation-inner">
            <div className="cta__line-wrap-1">
              <img
                src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                loading="lazy"
                alt=""
                height={118}
                className="cta__line-1"
              />
            </div>
            <div className="cta__line-wrap-2">
              <img
                className="cta__line-2"
                src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                loading="lazy"
                alt=""
                height={118}
              />
            </div>
            <div className="footer-area text-center">
              <div className="logo">
                <Link to={`/`} style={{ display: "inline-block" }}>
                  <img
                    className="logo-dark"
                    alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                    src="/assets/images/logo/white-logo-reeni.png"
                    width={108}
                    height={30}
                  />
                  <img
                    className="logo-white"
                    alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                    src="/assets/images/logo/dark-logo-virtuo.png"
                    width={108}
                    height={30}
                  />
                </Link>
              </div>
              <p className="description mt--30">
                © {new Date().getFullYear()} . All rights reserved by
                <a
                  target="_blank"
                  href="https://themeforest.net/user/inversweb/portfolio"
                >
                  InversWeb.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
