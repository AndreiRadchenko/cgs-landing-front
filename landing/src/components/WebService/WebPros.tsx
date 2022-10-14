import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import bgImage from "../../../public/WebService/secondBlockBg.svg";
import bgMobileImage from "../../../public/WebService/web-development-mobile.svg";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebService/WebPros.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import { useOnScreen } from "../../hooks/useOnScreen";

const WebPros = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.comparisonBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container ref={elRef}>
      <Styled.ContentWrapper>
        {data &&
          Object.values(data).map((category, idx) => (
            <div key={`${category} ${idx}`}>
              <Styled.BgMobileImage
                src={bgMobileImage.src}
                alt="mobile image"
              />
              <Styled.CategorySubtitle>
                {category.subtitle}
              </Styled.CategorySubtitle>
              <MobileInfiniteText title={category.subtitle} />

              {category.list.map((el, index) => (
                <Styled.CategoryListItem
                  key={`list item ${index}`}
                  ind={index}
                  className={isScrolled ? "scrolled" : undefined}
                >
                  {el}
                </Styled.CategoryListItem>
              ))}
            </div>
          ))}
      </Styled.ContentWrapper>
      <Styled.BgImage src={bgImage.src} alt="second block image" />
    </Styled.Container>
  );
};

export default WebPros;
