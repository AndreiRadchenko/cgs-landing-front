import React, { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";

// import TechnologyCategory from "./TechnologyCategory";
// import MobileTechnologyCategory from "./MobileTechnologyCategory";
const TechnologyCategory = dynamic(() => import("./TechnologyCategory"));
const MobileTechnologyCategory = dynamic(
  () => import("./MobileTechnologyCategory")
);

import * as StyledThisComp from "../../styles/HomePage/Technologies.styled";

import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import techArrow from "../../../public/HomePageDecoration/techArrow.svg";
import useMousePosition from "../../hooks/useMousePosition";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const Technologies = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const arrowRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.TechnologyBlock;

  useEffect(() => {
    if (arrowRef.current && mousePosition.y && mousePosition.x) {
      const { left, top, width, height } =
        arrowRef.current.getBoundingClientRect();
      const arrowCenter = { x: left + width / 2, y: top + height / 2 };
      const angle = Math.atan2(
        mousePosition.y - arrowCenter.y,
        mousePosition.x - arrowCenter.x
      );
      arrowRef.current.style.transform = ` translate(-50%, -50%) rotate(${angle}rad)`;
    }
  }, [mousePosition.x, mousePosition.y]);

  return (
    <StyledThisComp.TechnologyContainer>
      <StyledThisComp.TechTitle>technologies</StyledThisComp.TechTitle>
      <MobileInfiniteText title={"technologies"} />
      <StyledThisComp.ArrowContainer ref={arrowRef}>
        <Image src={techArrow} alt="tech arrow" />
      </StyledThisComp.ArrowContainer>
      <StyledThisComp.TechnologyRow>
        {data &&
          data.items.map(
            (item, idx) =>
              item.image && (
                <React.Fragment key={idx + `_fragment`}>
                  {isMobile ? (
                    <MobileTechnologyCategory
                      idx={idx}
                      className={idx === 0 ? "blockchain" : undefined}
                      key={idx + "_mobile"}
                      img={item.image.url}
                      text={item.text}
                      stack={item.stack}
                      title={item.category}
                    />
                  ) : (
                    <TechnologyCategory
                      idx={idx}
                      className={idx === 0 ? "blockchain" : undefined}
                      key={idx}
                      img={item.image?.url}
                      text={item.text}
                      stack={item.stack}
                      title={item.category}
                      link={item.link ? item.link : ""}
                    />
                  )}
                </React.Fragment>
              )
          )}
      </StyledThisComp.TechnologyRow>
    </StyledThisComp.TechnologyContainer>
  );
};

export default Technologies;
