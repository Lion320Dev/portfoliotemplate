import { portfolioItems } from "@/data/portfolio";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useContent } from "@/contexts/ContentContext";
export default function Portfolios7() {
  const { setCurrentPortfolio } = useContent();
  return (
    <div className="portfolio-bentogrid-area-swiper">
      <Swiper
        className="swiper mySwiper-bentogrid"
        {...{
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".snbpp1",
            prevEl: ".snbnp1",
          },
          speed: 1000,

          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {portfolioItems.map((item, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div
              className="tmp-portfolio-single-card in-bentogrid tmponhover"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCenter"
              onClick={() => setCurrentPortfolio(item)}
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      alt="Personal Portfolio Images"
                      src={item.image}
                      width={1010}
                      height={756}
                    />
                  </a>
                </div>
              </div>
              <div className="tmp-light light-left" />
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next snbpp1">
          <i className="fa-light fa-chevron-right" />
        </div>
        <div className="swiper-button-prev snbnp1">
          <i className="fa-light fa-chevron-left" />
        </div>
      </Swiper>
    </div>
  );
}
