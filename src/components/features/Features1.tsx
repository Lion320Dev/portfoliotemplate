import { serviceCards, serviceCardsExtra } from "@/data/services";
export default function Features1() {
  return (
    <section className="latest-service-area tmp-section-gapTop" id="features">
      <div className="container">
        <div className="row animation-action-3">
          <div className="col-lg-6 col-sm-6">
            {serviceCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className={`service-card-v2 single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{card.number}</span>
                  {card.title}
                </h2>
                <div className="tmp-light light-left" />
                <p className="service-para">{card.description}</p>
              </a>
            ))}
          </div>
          <div className="col-lg-6 col-sm-6">
            {serviceCardsExtra.map((card, index) => (
              <div
                key={index}
                className={`service-card-v2 single-animation tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 4
                }`}
              >
                <h2 className="service-card-num">
                  <span>{card.number}</span>
                  {card.title}
                </h2>
                <div className="tmp-light light-left" />
                <p className="service-para">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
