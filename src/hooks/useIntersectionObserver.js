import * as React from "react";

export function useIntersectionObserver(callback) {
  React.useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          callback(target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [callback]);
}