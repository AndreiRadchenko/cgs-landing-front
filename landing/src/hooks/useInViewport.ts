import { useState, useEffect, MutableRefObject } from "react";

export const useInViewport = <T extends Element>(
  ref: MutableRefObject<T | null>
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isInViewport = bottom <= window.innerHeight && top >= 0;
        setIsScrolled(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isScrolled;
};
