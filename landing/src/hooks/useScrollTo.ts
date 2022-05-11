import { useRef, useState, useEffect, useCallback, RefObject } from "react";
import { useWindowDimension } from "./useWindowDimension";

declare type UseScrollReturnProp<T> = [RefObject<T>, () => void];

export const useScrollTo = <T extends Element>(): UseScrollReturnProp<T> => {
  const { width } = useWindowDimension();
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);
  const block = width && width >= 1200 ? "center" : "start";

  const scrollTo = useCallback(() => setShouldScrollTo(true), []);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: block,
        inline: "center",
      });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo, block]);

  return [ref, scrollTo];
};
