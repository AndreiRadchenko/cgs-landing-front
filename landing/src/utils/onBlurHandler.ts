import React, { useEffect } from "react";

export const onBlurHandler = (
  ref: React.MutableRefObject<any>,
  callback: () => void
) => {
  function handleClickOutside(event: { target: any }) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
