import React, { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";
import { isSafari } from "react-device-detect";

import * as Styled from "./GestureNavigation.styled";

const GestureNavigation = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleSwipeGesture = useCallback((event: WheelEvent) => {
    if (event.deltaX > 0) {
      window.history.forward();
      setShowRightArrow(true);
    } else if (event.deltaX < 0) {
      window.history.back();
      setShowLeftArrow(true);
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
      setShowLeftArrow(false);
      setShowRightArrow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showLeftArrow, showRightArrow]);

  return (
    <>
      {showLeftArrow && <Styled.LeftArrow>&larr;</Styled.LeftArrow>}
      {showRightArrow && <Styled.RightArrow>&rarr;</Styled.RightArrow>}
    </>
  );
};

export default GestureNavigation;
