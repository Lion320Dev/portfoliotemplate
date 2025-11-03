import { testimonials } from "@/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Testimonials1() {
  return (
    <section className="testimonial tmp-section-gapTop">
      <div className="testimonial-wrapper animation-action-3">
        <div className="container">
          <Swiper
            className="swiper testimonial-swiper"
            {...{
              spaceBetween: 30,
              loop: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                800: {
                  slidesPerView: 3,
                },
              },
            }}
            modules={[Navigation]}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="testimonial-inner-style-two single-animation tmponhover">
                  <div className="testimonial-header">
                    <div className="thumbnail">
                      <img
                        alt="client-image"
                        src={testimonial.image}
                        width={400}
                        height={400}
                      />
                    </div>
                    <h5 className="ts-header">
                      <span className="text-color-primary">
                        {testimonial.name}
                      </span>{" "}
                      {testimonial.role}
                    </h5>
                  </div>
                  <div className="testimonial-body">
                    <p className="discription">
                      {testimonial.content}
                      <span>{testimonial.mention}</span>
                      {testimonial.ending}
                    </p>
                  </div>
                  <div className="tmp-light light-left" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
          <div className="testimonial-btn-next-prev">
            <div className="swiper-button-next">
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="swiper-button-prev">
              <i className="fa-solid fa-arrow-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
