import { useEffect, useMemo } from "react";
import { debounce } from "lodash";

const handleSwipeGesture = (event: WheelEvent) => {
  if (event.deltaX > 0) {
    window.history.forward();
  } else if (event.deltaX < 0) {
    window.history.back();
  }
};

export const useHistoryGesture = () => {
  const debouncedSwipeGesture = useMemo(
    () => debounce(handleSwipeGesture, 500),
    []
  );

  useEffect(() => {
    const element = document.documentElement;
    element.addEventListener("wheel", debouncedSwipeGesture, {
      passive: true,
    });
    return () => {
      element.removeEventListener("wheel", debouncedSwipeGesture);
    };
  }, [debouncedSwipeGesture]);
};
