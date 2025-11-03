import { useEffect, useRef } from "react";

export default function ScrollTop() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const waterRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll progress and show/hide logic
  useEffect(() => {
    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;
      const percent = Math.min(
        Math.floor((scrollPosition / documentHeight) * 100),
        100
      );

      if (waterRef.current) {
        waterRef.current.style.transform = `translate(0, ${100 - percent}%)`;
      }

      if (boxRef.current) {
        boxRef.current.style.display = scrollPosition >= 200 ? "block" : "none";
      }

      const scrollTop = document.querySelector(".scrollToTop");
      const chatBox = document.querySelector(".tmp-ready-chat");

      if (scrollTop) {
        scrollTop.classList.toggle("active-progress", scrollPosition > 100);
      }

      if (chatBox) {
        chatBox.classList.toggle("chat-visible", scrollPosition > 100);
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const box = boxRef.current;
    if (box) {
      box.addEventListener("click", handleClick);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Trigger once on mount
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
    }, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (box) {
        box.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="scrollToTop" style={{ display: "block" }} ref={boxRef}>
      <div className="arrowUp">
        <i className="fa-light fa-arrow-up" />
      </div>
      <div
        className="water"
        ref={waterRef}
        style={{ transform: "translate(0px, 87%)" }}
      >
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave" />
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave" />
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 560 20"
          style={{ display: "none" }}
        >
          <symbol id="wave">
            <path
              d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
              fill="#"
            />
            <path
              d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
              fill="#"
            />
            <path
              d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
              fill="#"
            />
            <path
              d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
              fill="#"
            />
          </symbol>
        </svg>
      </div>
    </div>
  );
}
