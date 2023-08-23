import React, { useEffect } from "react";

const ProgrammableSearchBar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cse.google.com/cse.js?cx=a5ca4f1629c714fcb";
    document.body.appendChild(script);

    return () => {
      // Clean up: Remove the dynamically added script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gcse-search"></div>;
};

export default ProgrammableSearchBar;
