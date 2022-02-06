import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold) => {
  // const containerRef = useRef(null);
  const [containerRef, setContainerRef] = useState(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold,
    };
    // let currentRef = null;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsIntersected(entry.isIntersecting);
    }, options);

    if (containerRef) {
      observer.observe(containerRef);
      // console.log(isIntersected);
    }

    return () => {
      if (containerRef) observer.unobserve(containerRef);
    };
  }, [containerRef, threshold]);

  return [setContainerRef, isIntersected];
};

export default useIntersectionObserver;
