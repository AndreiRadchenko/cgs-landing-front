import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import * as Styled from "../../styles/PortfolioSlider.styled";

export const AnchorLinkContainer = ({
  link,
  isProject,
  setOpenCategory,
  setOpenProject,
}: {
  link: string;
  isProject: boolean;
  setOpenCategory?: Dispatch<SetStateAction<string>>;
  setOpenProject?: Dispatch<SetStateAction<string>>;
}) => {
  const categoriesRef = useRef<any>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!categoriesRef.current) return;
      if (!categoriesRef.current.contains(e.target)) {
        isProject ? setOpenProject!("") : setOpenCategory!("");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Styled.AnchorLinkContainer ref={categoriesRef} isProject={isProject}>
      <p>{link}</p>
      <svg
        onClick={() => navigator.clipboard.writeText(link)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.6384 0H5.44647C4.14852 0 3.09262 1.05908 3.09262 2.36092V3.0919H2.35384C1.0559 3.0919 0 4.15098 0 5.45355V17.6384C0 18.9403 1.0559 19.9993 2.35384 19.9993H14.5461C15.8482 19.9993 16.9074 18.9403 16.9074 17.6384V16.9074H17.6384C18.9405 16.9074 20 15.8484 20 14.5458V2.36085C19.9999 1.05908 18.9405 0 17.6384 0ZM15.4623 17.6384C15.4623 18.1435 15.0514 18.5542 14.5461 18.5542H2.35384C1.85284 18.5542 1.44505 18.1435 1.44505 17.6384V5.45347C1.44505 4.94829 1.85292 4.53688 2.35384 4.53688H3.81515H14.5461C15.0513 4.53688 15.4623 4.94821 15.4623 5.45347V16.1848V17.6384ZM18.5549 14.5457C18.5549 15.0509 18.1439 15.4623 17.6383 15.4623H16.9073V5.45347C16.9073 4.15098 15.8482 3.09183 14.546 3.09183H4.5376V2.36085C4.5376 1.85566 4.94547 1.44498 5.44639 1.44498H17.6383C18.1438 1.44498 18.5549 1.85566 18.5549 2.36085V14.5457Z"
          fill="#8F8E93"
        />
      </svg>
    </Styled.AnchorLinkContainer>
  );
};
