import { testimonials2 } from "@/data/testimonials";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials2() {
  return (
    <section className="clients-testimonial-area tmp-section-gapTop">
      <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle theme-gradient">Clients Testimonial</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          Bringing Dreams to Life through
        </h2>
        <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          Business consulting consultants provide expert advice and guida
          businesses to <br />
          help them improve their performance, efficiency, and organizational
        </p>
      </div>
      <div className="client-testimonial-swiper position-relative">
        <Swiper
          className="swiper testimonial-swiper-v2"
          {...{
            slidesPerView: 2.5,
            spaceBetween: 30,
            freeMode: true,
            centeredSlides: true,
            loop: true,
            autoHeight: true,
            loopAddBlankSlides: true,
            autoplay: false,
            pagination: {
              el: ".tmp-swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                centeredSlides: true, // Enable centering for smaller screens as well
              },
              767: {
                slidesPerView: 2,
                centeredSlides: true, // Enable centering for larger screens
              },
            },
          }}
          modules={[Pagination]}
        >
          {testimonials2.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide tmp-scroll-trigger animation-order-${testimonial.order}`}
            >
              <div className="client-testimonial-card-wrap">
                <div className="client-card-head">
                  <div className="client-info">
                    <div className="client-img">
                      <img
                        alt=""
                        src={testimonial.image}
                        width={301}
                        height={301}
                      />
                    </div>
                    <div className="client-details">
                      <h3 className="client-title">{testimonial.name}</h3>
                      <p className="client-para">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="tmp-star">
                    <ul>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <i className="fa-solid fa-star" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="client-para">{testimonial.testimonial}</p>
                <div className="quat-logo">
                  <img
                    alt="quat-logo"
                    src="/assets/images/testimonial/quat-logo.svg"
                    width={47}
                    height={40}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tmp-swiper-pagination tmp-swiper-pagination-01" />
      </div>
    </section>
  );
}
