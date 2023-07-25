import { useEffect } from "react";

export const calendlyPopupInfoHandler = (callback: () => void) => {
  const calendlyStatusFinder = (e: any) => {
    window.dataLayer = window.dataLayer || [];

    if (
      e.data.event &&
      e.data.event.indexOf("calendly") === 0 &&
      e.data.event === "calendly.event_scheduled"
    ) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("message", calendlyStatusFinder);

    return () => {
      window.removeEventListener("message", calendlyStatusFinder);
    };
  }, []);
};
