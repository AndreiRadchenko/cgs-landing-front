import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";

import { useOnScreen } from "../../hooks/useOnScreen";
import * as Styled from "../../styles/HomePage/Badges.styled";

const Badges = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.BadgesBlock;

  const [gradientAngle, setGradientAngle] = useState<string>("50%");

  const arrayOfGradients = [
    { firstColor: "#D6FFBB", secondColor: "#C1E6C0" },
    {
      firstColor: "#C7EDBF",
      secondColor: "#9DBBCA",
    },
    {
      firstColor: "#88A2D0",
      secondColor: "#5E70DC",
    },
  ];

  const mouseMoveListener = useCallback(({ pageX }: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mouseXpercentage = Math.round((pageX / windowWidth) * 100);
    setGradientAngle(`${mouseXpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  if (!data) throw Error("Data not found!");

  return (
    <Styled.BadgesBlockContainer>
      <Styled.BadgesContainer>
        <Styled.BgiContainer angle={gradientAngle} ref={elRef}>
          {arrayOfGradients.map((el, idx) => (
            <Styled.MobileLine
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
              key={el.firstColor}
              grad1={el.firstColor}
              grad2={el.secondColor}
            />
          ))}
        </Styled.BgiContainer>
        <Styled.BadgesData columnsNumber={data.badges.length}>
          {data.badges.map((elem, idx) =>
            elem.image ? (
              <Styled.BadgeCard key={idx}>
                <a href={elem.link} target={"_blank"} rel={"noreferrer"}>
                  <Styled.BadgeImageWrapper>
                    <Image
                      src={elem.image.url}
                      alt="free service image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Styled.BadgeImageWrapper>
                </a>
              </Styled.BadgeCard>
            ) : (
              <></>
            )
          )}
        </Styled.BadgesData>
      </Styled.BadgesContainer>
      <Styled.LogosContainer>
        {data.logos &&
          data.logos.map((logo, idx) =>
            logo.image ? (
              <Styled.LogoImageWrapper key={idx}>
                <Image
                  src={logo.image.url}
                  alt="logo image"
                  layout="fill"
                  objectFit="contain"
                />
              </Styled.LogoImageWrapper>
            ) : (
              <></>
            )
          )}
      </Styled.LogosContainer>
    </Styled.BadgesBlockContainer>
  );
};

export default Badges;
