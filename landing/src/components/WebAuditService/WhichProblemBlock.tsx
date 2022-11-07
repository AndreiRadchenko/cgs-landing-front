import React from "react";
import * as Styled from "../../styles/WebAuditService/WhichProblem.styled";
import whichProblemImg from "../../../public/WebAuditServicePage/WhichProblem.svg";
import whichProblemMobileImg from "../../../public/WebAuditServicePage/WhichProblemMobile.svg";
import Image from "next/image";
import {SplitBrackets} from "../../utils/splitBrackets";
import {useWindowDimension} from "../../hooks/useWindowDimension";

const WhichProblemBlock = () => {
    const {width} = useWindowDimension()

    const subtitleText = "Which problems |does an audit solve?"

  return (
    <Styled.Wrapper>
      <Styled.Subtitle>
          <SplitBrackets text={subtitleText} />
      </Styled.Subtitle>
        <Styled.Image>
        <Image
          src={width && width > 767 ? whichProblemImg : whichProblemMobileImg}
          alt="which problem block image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.Image>
    </Styled.Wrapper>
  );
};

export default WhichProblemBlock;
