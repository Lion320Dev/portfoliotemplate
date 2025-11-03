import { useEffect, useRef } from "react";
import gsap, { Back } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugin
gsap.registerPlugin(SplitText);

export default function TextBanner1() {
  const animatedTextRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const element = animatedTextRef.current;
    if (!element) return;

    let split: SplitText | undefined;
    let animation: gsap.core.Tween | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !element) return;

          // Kill previous animation and revert split if any
          animation?.progress(1).kill();
          split?.revert();

          // Split text
          split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });

          // Set initial state
          gsap.set(element, { perspective: 400 });
          gsap.set(split.chars, {
            opacity: 0,
            x: -10,
            rotateX: 0,
          });

          // Animate characters
          animation = gsap.to(split.chars, {
            x: 0,
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
          });

          observer.unobserve(element); // Avoid repeated triggering
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.kill();
      split?.revert();
    };
  }, []);

  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2
            ref={animatedTextRef}
            className="text-para-documents tmp-scroll-trigger tmp-fade-in tmp-title-split-2 animation-order-1"
          >
            A personal <span>portfolio</span> is a collection of your work, that
            is aa go achievements, and skills that highlights{" "}
            <span>web design</span> in your is abilities and professional
            growth. It serves as A personal to a portfolio in{" "}
            <span>since 2009</span> a collection of your work
          </h2>

          <div className="right-bg-text-para">
            <img
              alt=""
              src="/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>

          <div className="left-bg-text-para">
            <img
              alt=""
              src="/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
