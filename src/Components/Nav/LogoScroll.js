import { useRef, useEffect, useCallback } from "react";

const useScrollLogo = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    const scrollMatrix = () => {
      window.onscroll = () => {
        const pageYOffset = window.pageYOffset;
        let xSet = 5 - pageYOffset / 46;
        let ySet = 190 - pageYOffset * 1.03;

        current.style.transform = `matrix(${
          xSet <= 5 && xSet >= 1 ? xSet : 1
        },0,0,${xSet <= 5 && xSet >= 1 ? xSet : 1},0,${
          ySet >= 0 && ySet <= 190 ? ySet : 0
        })`;
      };
    };

    if (entry.isIntersecting) {
      scrollMatrix();
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(current);

      return () => observer;
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 1,
    },
  };
};

export default useScrollLogo;
