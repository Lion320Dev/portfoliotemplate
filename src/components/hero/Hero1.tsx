import { useEffect, useRef } from "react";

import { gsap } from "gsap"; // Make sure GSAP (TweenMax) is installed

export default function Hero1() {
  const shapeMoveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = shapeMoveRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const wx = window.innerWidth;
      const wy = window.innerHeight;

      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      const newx = x - wx / 2;
      const newy = y - wy / 2;

      const shapes = container.querySelectorAll<HTMLElement>(
        ".shape-image .shape"
      );

      shapes.forEach((shape) => {
        const speedAttr = shape.getAttribute("data-speed");
        const revert = shape.hasAttribute("data-revert");

        let speed = parseFloat(speedAttr ?? "1");
        if (revert) speed *= -1;

        gsap.to(shape, {
          duration: 1,
          x: 1 - newx * speed,
          y: 1 - newy * speed,
          ease: "power2.out",
        });
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="banner-area-one-main-demo tmp-section-gap shape-move"
      id="home"
      ref={shapeMoveRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-main-demo-inner-content">
              <span className="top-intro">
                <img
                  alt="shape"
                  src="/assets/images/banner/hi.png"
                  width={74}
                  height={71}
                />
                My name is John Lee a freelancer
              </span>
              <img
                alt="banner"
                className="main-demo"
                src="/assets/images/banner/reeni-main-demo.png"
                width={663}
                height={673}
              />
              <div className="absolute-designation shape-image">
                <h2 className="up shape" data-speed="0.03" data-revert="true">
                  &amp; Web Designer
                </h2>
                <h2 className="down shape" data-speed="0.02">
                  Photographer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tmp-banner-circle">
        <img
          className="tmp-banner-circle-1"
          alt="circle-image"
          src="/assets/images/banner/shape/01.svg"
          width={5}
          height={5}
        />
        <img
          className="tmp-banner-circle-2"
          alt="circle-image"
          src="/assets/images/banner/shape/02.svg"
          width={10}
          height={10}
        />
        <img
          className="tmp-banner-circle-3"
          alt="circle-image"
          src="/assets/images/banner/shape/03.svg"
          width={7}
          height={7}
        />
        <img
          className="tmp-banner-circle-4"
          alt="circle-image"
          src="/assets/images/banner/shape/04.svg"
          width={16}
          height={16}
        />
      </div>
      <div className="separator-animated-border border-top-footer animated-true" />
      <div className="slider-bg-light">
        <img
          className="blocksync-scroll-trigger fade_in animation-order-8"
          alt="Top Light Shape"
          src="/assets/images/banner/shape/light.svg"
          width={554}
          height={532}
        />
      </div>
      <div className="slider-bg-dot-shape">
        <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
          <div className="blocksync-stars" />
          <div className="blocksync-stars2" />
          <div className="blocksync-stars3" />
        </div>
      </div>
    </div>
  );
}
