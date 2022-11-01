import React from "react";
import { Subtitle } from "../../styles/WebAuditService/Common.styled";
import * as Styled from "../../styles/WebAuditService/WhichProblem.styled";
import whichProblemImg from "../../../public/WebAuditServicePage/WhichProblem.svg";
import Image from "next/image";

const WhichProblemBlock = () => {
  return (
    <Styled.Wrapper>
      <Subtitle>
        Which problems <br /> does an audit solve?
      </Subtitle>
      <Styled.ImageWrapper>
        <Image
          src={whichProblemImg}
          alt="which problem block image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};

export default WhichProblemBlock;
