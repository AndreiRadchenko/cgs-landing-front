import { IWindowDimension } from "../types/Dimension.types";
import { useState, useEffect } from "react";
import { getWindowDimension } from "../utils/getWindowDimension";
import { debounce } from "@mui/material";

export const useWindowDimension = (debounceTime = 150): IWindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimension()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimension());

    const handleDebounceResize = debounce(handleResize, debounceTime);

    window.addEventListener("resize", handleDebounceResize);
    return () => window.removeEventListener("resize", handleDebounceResize);
  }, [debounceTime]);

  return windowDimensions;
};
