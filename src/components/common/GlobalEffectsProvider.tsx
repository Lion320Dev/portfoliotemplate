import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "bootstrap";
export default function GlobalEffectsProvider() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        document.querySelector(".header--sticky")?.classList.add("sticky");
      } else {
        document.querySelector(".header--sticky")?.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount
  const { pathname } = useLocation();
  useEffect(() => {
    const RBT_SCROLL_ACTIVATION = "tmp-scroll-trigger";
    const RBT_SCROLL_OFFSCREEN_ACTIVATION = "tmp-scroll-trigger--offscreen";
    const RBT_SCROLL_ZOOM_IN_ACTIVATION = "animate--zoom-in";
    const RBT_SCROLL_CANCEL_ACTIVATION = "tmp-scroll-trigger--cancel";

    const zoomCleanupFns: (() => void)[] = [];

    const onIntersection: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry, index) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (target.classList.contains(RBT_SCROLL_OFFSCREEN_ACTIVATION)) {
            target.classList.remove(RBT_SCROLL_OFFSCREEN_ACTIVATION);
            if (target.dataset.cascade) {
              target.style.setProperty("--animation-order", index.toString());
            }
          }
          observer.unobserve(target);
        } else {
          target.classList.add(RBT_SCROLL_OFFSCREEN_ACTIVATION);
          target.classList.remove(RBT_SCROLL_CANCEL_ACTIVATION);
        }
      });
    };

    function initializeScrollAnimationTrigger(
      rootEl: Document | HTMLElement = document,
      isDesignModeEvent = false
    ) {
      const elements = rootEl.querySelectorAll<HTMLElement>(
        `.${RBT_SCROLL_ACTIVATION}`
      );
      if (elements.length === 0) return;

      if (isDesignModeEvent) {
        elements.forEach((el) => {
          el.classList.add("tmp-scroll-trigger--design-mode");
        });
        return;
      }

      const observer = new IntersectionObserver(onIntersection, {
        rootMargin: "0px 0px -50px 0px",
      });

      elements.forEach((el) => observer.observe(el));
    }

    function percentageSeen(element: HTMLElement): number {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;

      if (elementTop > scrollY + viewportHeight) return 0;
      if (elementTop + elementHeight < scrollY) return 100;

      const percentage =
        (scrollY + viewportHeight - elementTop) /
        ((viewportHeight + elementHeight) / 100);

      return Math.round(percentage);
    }

    function throttle<T extends (...args: unknown[]) => void>(
      fn: T,
      wait: number
    ): T {
      let lastTime = Date.now();
      return function (this: unknown, ...args: unknown[]) {
        if (lastTime + wait - Date.now() < 0) {
          fn.apply(this, args);
          lastTime = Date.now();
        }
      } as T;
    }

    function initializeScrollZoomAnimationTrigger() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const elements = document.querySelectorAll<HTMLElement>(
        `.${RBT_SCROLL_ZOOM_IN_ACTIVATION}`
      );
      if (elements.length === 0) return;

      const scaleAmount = 0.2 / 100;

      elements.forEach((element) => {
        let isVisible = false;

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        });
        observer.observe(element);

        const updateZoom = () => {
          if (isVisible) {
            element.style.setProperty(
              "--zoom-in-ratio",
              (1 + scaleAmount * percentageSeen(element)).toString()
            );
          }
        };

        const handleScroll = throttle(updateZoom, 100);
        window.addEventListener("scroll", handleScroll, { passive: true });

        zoomCleanupFns.push(() => {
          window.removeEventListener("scroll", handleScroll);
          observer.disconnect();
        });

        updateZoom();
      });
    }

    // Remove opacity-0 from swiper slides
    document
      .querySelectorAll<HTMLElement>(".swiper-slide.opacity-0")
      .forEach((el) => el.classList.remove("opacity-0"));

    // Initialize triggers
    initializeScrollAnimationTrigger();
    initializeScrollZoomAnimationTrigger();

    // Cleanup
    return () => {
      zoomCleanupFns.forEach((fn) => fn());
    };
  }, [pathname]);
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tmponhover");

    const handleCardMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.pageX - rect.left - window.scrollX;
      const y = e.pageY - rect.top - window.scrollY;

      target.style.setProperty("--x", `${x}px`);
      target.style.setProperty("--y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove);
    });

    // Cleanup to avoid memory leaks
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".paralax-image");

    elements.forEach((el) => {
      VanillaTilt.init(el, {
        max: 12,
        speed: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: false,
        perspective: 1000,
        scale: 1,
      });
    });

    return () => {
      elements.forEach((el) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tiltInstance = (el as any).vanillaTilt;
        if (tiltInstance && typeof tiltInstance.destroy === "function") {
          tiltInstance.destroy();
        }
      });
    };
  }, [pathname]);
  useEffect(() => {
    const servicesWidget =
      document.querySelector<HTMLElement>(".services-widget");
    if (!servicesWidget) return;

    const activeBg = servicesWidget.querySelector<HTMLElement>(".active-bg");

    const updateActiveService = (element: Element | null) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const widgetRect = servicesWidget.getBoundingClientRect();
      const topOff = rect.top - widgetRect.top;
      const height = (element as HTMLElement).offsetHeight;

      const closestServiceItem = element.closest(
        ".service-item"
      ) as HTMLElement | null;
      if (closestServiceItem) {
        closestServiceItem.classList.remove("mleave");
      }

      servicesWidget.querySelectorAll(".service-item").forEach((item) => {
        if (closestServiceItem !== item) {
          item.classList.add("mleave");
        }
      });

      if (activeBg) {
        activeBg.style.top = `${topOff}px`;
        activeBg.style.height = `${height}px`;
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const serviceItem = target.closest(".service-item");
      if (serviceItem) {
        updateActiveService(serviceItem);
      }
    };

    const handleMouseLeave = () => {
      const currentElement = servicesWidget.querySelector(".current");
      updateActiveService(currentElement);

      servicesWidget.querySelectorAll(".service-item").forEach((item) => {
        if (!currentElement || !item.contains(currentElement)) {
          item.classList.remove("mleave");
        }
      });
    };

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const serviceItem = target.closest(".service-item");
      if (serviceItem) {
        servicesWidget.querySelectorAll(".service-item").forEach((item) => {
          item.classList.remove("current");
        });
        serviceItem.classList.add("current");
      }
    };

    // Add event listeners
    servicesWidget.addEventListener("mouseenter", handleMouseEnter, true);
    servicesWidget.addEventListener("mouseleave", handleMouseLeave);
    servicesWidget.addEventListener("click", handleClick);

    // Initial sync
    updateActiveService(servicesWidget.querySelector(".current"));

    return () => {
      // Clean up
      servicesWidget.removeEventListener("mouseenter", handleMouseEnter, true);
      servicesWidget.removeEventListener("mouseleave", handleMouseLeave);
      servicesWidget.removeEventListener("click", handleClick);
    };
  }, [pathname]);
  useEffect(() => {
    const containerSelectors = [
      ".animation-action-1",
      ".animation-action-2",
      ".animation-action-3",
      ".animation-action-4",
      ".animation-action-5",
      ".animation-action-6",
    ];

    type Listener = {
      item: Element;
      handler: EventListener;
    };

    const listeners: Listener[] = [];

    containerSelectors.forEach((selector) => {
      const container = document.querySelector<HTMLElement>(selector);
      if (!container) return;

      const items =
        container.querySelectorAll<HTMLElement>(".single-animation");

      items.forEach((item) => {
        const handler = () => {
          item.classList.remove("tmp-control");

          setTimeout(() => {
            const active = container.querySelector<HTMLElement>(".active");
            if (active) {
              active.classList.remove("active");
              active.classList.add("tmp-control");
            }

            item.classList.remove("tmp-control");
            item.classList.add("active");
          }, 0);
        };

        item.addEventListener("mouseenter", handler);
        listeners.push({ item, handler });
      });
    });

    return () => {
      listeners.forEach(({ item, handler }) => {
        item.removeEventListener("mouseenter", handler);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.getAttribute("href") === "#") {
        e.preventDefault();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);
  return <></>;
}
