import React, { useEffect } from "react";

const ProgrammableSearchBar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cse.google.com/cse.js?cx=537a79ba118374dd7";
    document.body.appendChild(script);

    return () => {
      // Clean up: Remove the dynamically added script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gcse-search"></div>;
};

export default ProgrammableSearchBar;
