import { useState, useEffect } from "react";

import * as Styled from "./spinner-page.styles";

const Spinner = () => {
  return (
    <Styled.SpinnerContainer>
      <Styled.AnimationSpinner />
    </Styled.SpinnerContainer>
  );
};

export const SpinnerPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ("fonts" in document) {
      const onLoad = () => {
        setIsLoaded(true);
      };

      setIsLoaded(document.fonts.status === "loaded");

      document.fonts.addEventListener("loadingdone", onLoad);

      return () => {
        document.fonts.removeEventListener("loadingdone", onLoad);
      };
    }

    const onChange = () => {
      setIsLoaded(document.readyState === "complete");
    };

    onChange();

    document.addEventListener("readystatechange", onChange);

    return () => {
      document.removeEventListener("readystatechange", onChange);
    };
  }, []);

  if (isLoaded) {
    return null;
  }

  return (
    <>
      <Styled.GlobalSpinnerStyle />
      <Spinner />
    </>
  );
};
