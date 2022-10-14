import React, { useEffect, useRef } from "react";
import * as StyledThisComp from "../../styles/HomePage/Technologies.styled";
import TechnologyCategory from "./TechnologyCategory";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import techArrow from "../../../public/HomePageDecoration/techArrow.svg";
import Image from "next/image";
import useMousePosition from "../../hooks/useMousePosition";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const Technologies = () => {
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
          Object.entries(data).map((item, idx) => (
            <TechnologyCategory
              idx={idx}
              className={idx === 3 ? "blockchain" : undefined}
              key={item[0]}
              img={item[1].image.url}
              text={item[1].text}
              stack={item[1].stack}
              title={item[1].category}
            />
          ))}
      </StyledThisComp.TechnologyRow>
    </StyledThisComp.TechnologyContainer>
  );
};

export default Technologies;
