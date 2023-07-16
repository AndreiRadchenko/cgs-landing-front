import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { isSafari } from "react-device-detect";

export const useHistoryGesture = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleSwipeGesture = useCallback((event: WheelEvent) => {
    if (event.deltaX > 0) {
      window.history.forward();
      setShowArrow(true);
    } else if (event.deltaX < 0) {
      window.history.back();
      setShowArrow(true);
    }
  }, []);

  const debouncedSwipeGesture = useMemo(
    () => debounce(handleSwipeGesture, 500),
    [handleSwipeGesture]
  );

  useEffect(() => {
    const element = document.documentElement;
    !isSafari &&
      element.addEventListener("wheel", debouncedSwipeGesture, {
        passive: true,
      });
    return () => {
      !isSafari && element.removeEventListener("wheel", debouncedSwipeGesture);
    };
  }, [debouncedSwipeGesture]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showArrow]);
};
