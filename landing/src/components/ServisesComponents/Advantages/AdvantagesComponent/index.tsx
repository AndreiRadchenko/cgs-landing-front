import React, { useRef } from "react";

import * as Styled from "./advantages.styled";

import { IAdvantagesServicesComponent } from "../../../../types/ServicesComponent.types";

import { useOnScreen } from "../../../../hooks/useOnScreen";

import circle from "../../../../../public/Advantages/circle.svg";
import smallCircle from "../../../../../public/Advantages/smallCircle.svg";

interface IAdvantagesProps {
  advantages?: IAdvantagesServicesComponent;
  className?: string;
}

const Advantages = ({ advantages, className }: IAdvantagesProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);

  const advantagesCount =
    advantages?.content?.filter(
      (item) => item.subtitle.trim() !== "" && item.text.trim() !== ""
    ).length || 0;

  const numbers = Array.from({ length: advantagesCount }, (_, idx) => {
    const number = (idx + 1).toString().padStart(2, "0");
    return number;
  });

  return (
    <Styled.Wrapper className={className}>
      <Styled.Title>{advantages?.title}</Styled.Title>
      <Styled.Content>
        <Styled.Numbers>
          {numbers.map((number, idx) => (
            <Styled.NumberItems
              key={idx}
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
            >
              <p>{number}</p>
              <Styled.ImageWrapper>
                {idx === numbers.length - 1 ? (
                  <>
                    <Styled.BlockContainer>
                      <img src={circle.src} alt="Yellow Circle" />
                      <Styled.AfterBlock />
                      <img src={smallCircle.src} alt="Dot" />
                    </Styled.BlockContainer>
                    <Styled.BeforeBlock isFirst={true} />
                  </>
                ) : (
                  <>
                    <Styled.BlockContainer>
                      <img src={circle.src} alt="Yellow Circle" />
                      <Styled.AfterBlock />
                      <img src={smallCircle.src} alt="Dot" />
                      <Styled.BeforeBlock isFirst={false} />
                    </Styled.BlockContainer>
                  </>
                )}
              </Styled.ImageWrapper>
            </Styled.NumberItems>
          ))}
        </Styled.Numbers>
        <Styled.TextContent ref={elRef}>
          {advantages?.content
            ?.filter(
              (item) => item.subtitle.trim() !== "" && item.text.trim() !== ""
            )
            .map(({ subtitle, text }, idx) => (
              <Styled.ContentItems
                key={idx}
                ind={idx}
                className={isScrolled ? "scrolled" : undefined}
              >
                <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                <Styled.Text>{text}</Styled.Text>
              </Styled.ContentItems>
            ))}
        </Styled.TextContent>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Advantages;
