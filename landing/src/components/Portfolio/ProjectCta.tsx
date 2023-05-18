import React, { useCallback, useEffect, useRef, useState } from "react";

import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import GetEstimationButton from "../GetEstimationButton";

import * as Styled from "../../styles/PortfolioPage.styled";
import * as Styles from "../../styles/HomePage/General.styled";

import { useOnScreen } from "../../hooks/useOnScreen";
import { useWindowDimension } from "../../hooks/useWindowDimension";

import { IIPPData } from "../../types/Admin/AdminPortfolio.types";

const ProjectCta = ({ projectInfo }: { projectInfo: IIPPData }) => {
  const { width } = useWindowDimension();
  const newTitleArray = projectInfo.cta.split(" | ");

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

  return (
    <Styled.ProjectCta>
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
      <Styled.ProjectCtaContainer>
        <h3>
          {width && width > 768
            ? projectInfo?.cta
            : newTitleArray.map((el, idx) => (
                <>
                  <span key={`${el}${idx}`}>{el}</span>
                  {idx !== newTitleArray.length - 1 && <br />}
                </>
              ))}
        </h3>
        <Styles.ButtonWrapper>
          <GetEstimationButton
            buttonLink={projectInfo?.buttonLink}
            buttonText={projectInfo?.button}
            withEstimation
            buttonClassName="cta-button"
          />
          <ButtonShareComponent />
        </Styles.ButtonWrapper>
      </Styled.ProjectCtaContainer>
    </Styled.ProjectCta>
  );
};

export default ProjectCta;
