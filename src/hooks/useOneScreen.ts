import { useEffect, useState, MutableRefObject } from "react";

export const useOnScreen = <T extends Element>(
  ref: MutableRefObject<T | null>
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};
