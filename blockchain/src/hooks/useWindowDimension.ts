import { useState, useEffect } from "react";
import { debounce } from "@mui/material";

interface IWindowDimension {
  width: number | null;
  height: number | null;
}

export const getWindowDimension = (): IWindowDimension => {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};

export const useWindowDimension = (debounceTime = 150): IWindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimension(),
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimension());

    const handleDebounceResize = debounce(handleResize, debounceTime);

    window.addEventListener("resize", handleDebounceResize);
    return () => window.removeEventListener("resize", handleDebounceResize);
  }, [debounceTime]);

  return windowDimensions;
};
