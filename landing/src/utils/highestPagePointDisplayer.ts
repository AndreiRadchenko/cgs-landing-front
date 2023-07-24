import { useRouter } from "next/router";
import React, { useEffect } from "react";

export const highestPagePointDisplayer = () => {
  const router = useRouter();

  const handleRouteChange = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};
