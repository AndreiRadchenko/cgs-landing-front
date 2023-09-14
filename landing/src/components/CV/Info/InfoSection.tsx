import React, { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";

import * as Styled from "./InfoSection.styled";

import { CvData } from "../../../types/Admin/AdminCv.types";

import circle from "../../../../public/Advantages/circle.svg";
import smallCircle from "../../../../public/Advantages/smallCircle.svg";
import mobileLine from "../../../../public/CV/mobile-line.svg";

interface IProps {
  data: CvData;
}

export const InfoSection = ({
  data: {
    info: { title, content },
  },
}: IProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      {isMobile ? (
        <Styled.MobileContent>
          {content.map((item, idx) => (
            <Styled.AdvantagesItem key={idx}>
              <Styled.NumberMobileItem>
                <Styled.MobileNumber
                  className={content.length - 1 === idx ? "last" : ""}
                >
                  0{idx + 1}
                </Styled.MobileNumber>
                <Styled.Circle src={circle.src} alt="Yellow Circle" />
                <Styled.MobileLine src={mobileLine.src} alt="Line" />
                <Styled.SmallCircle
                  src={smallCircle.src}
                  alt="Dot"
                  className={content.length - 1 === idx ? "last" : ""}
                />
              </Styled.NumberMobileItem>
              <Styled.TextMobileItem>
                <Styled.Subtitle>{item.subtitle}</Styled.Subtitle>
                <Styled.Text>{parse(item.text)}</Styled.Text>
              </Styled.TextMobileItem>
            </Styled.AdvantagesItem>
          ))}
        </Styled.MobileContent>
      ) : (
        <Styled.Content>
          <Styled.Numbers>
            {content.map(({ subtitle, text }, idx) => (
              <Styled.NumberItems key={idx}>
                <p>0{idx + 1}</p>
                <Styled.SectionWrapper className="cv-point-wrapper">
                  {idx === content.length - 1 ? (
                    <>
                      <Styled.BlockContainer>
                        <img
                          className={"yellowCircle"}
                          src={circle.src}
                          alt="Yellow Circle"
                        />
                        <Styled.Test>
                          <Styled.AfterBlock
                            className={"cv-point-long-line long"}
                          />
                          <img
                            className={"dot"}
                            src={smallCircle.src}
                            alt="Dot"
                          />
                        </Styled.Test>
                      </Styled.BlockContainer>

                      <Styled.ContentItems key={idx} className="cv-point-desc">
                        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                        <Styled.Text>{parse(text)}</Styled.Text>
                      </Styled.ContentItems>
                    </>
                  ) : (
                    <>
                      <Styled.BlockContainer>
                        <img
                          className={"yellowCircle"}
                          src={circle.src}
                          alt="Yellow Circle"
                        />
                        <Styled.Test>
                          <Styled.AfterBlock className="cv-point-line" />
                          <img
                            className={"dot"}
                            src={smallCircle.src}
                            alt="Dot"
                          />
                          <Styled.BeforeBlock className="cv-point-line" />
                        </Styled.Test>
                      </Styled.BlockContainer>
                      <Styled.ContentItems key={idx} className="cv-point-desc">
                        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                        <Styled.Text>{parse(text)}</Styled.Text>
                      </Styled.ContentItems>
                    </>
                  )}
                </Styled.SectionWrapper>
              </Styled.NumberItems>
            ))}
          </Styled.Numbers>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
