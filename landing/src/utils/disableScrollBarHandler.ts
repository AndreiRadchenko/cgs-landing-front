import { useEffect } from "react";

export const DisableScrollBarHandler = (optionDisable: boolean) => {
  useEffect(() => {
    optionDisable
      ? document.querySelector("html")?.classList.add("disableScrollBar")
      : document.querySelector("html")?.classList.remove("disableScrollBar");
  }, [optionDisable]);
};
