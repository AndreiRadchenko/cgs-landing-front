import React from "react";
import * as Styled from "../../styles/evenMore.styled";
import OneBlock from "./OneBlock";
import { blocksEvenMore } from "../../utils/text";

interface IRenderProps {
  i: string;
  ind: number;
}

const BlocksRender = () => {
  let mark = 1;
  let topMargin = 0;
  let topMarginTablet = 0;
  let topMarginMobile = 0;

  const renderItem = ({ i, ind }: IRenderProps) => {
    if (ind === mark) {
      topMargin += mark === 1 ? 10 : 17;
      topMarginTablet += mark === 1 ? 8 : 11;
      topMarginMobile = mark === 1 ? 35 : 10;
      mark += 3;
      return (
        <React.Fragment key={`blockEvenMoreInd${ind}`}>
          <Styled.LineThrough
            theme={topMargin}
            topMarginTablet={topMarginTablet}
            topMarginMobile={topMarginMobile}
          />
          <OneBlock number={ind} text={i} />
        </React.Fragment>
      );
    }
    return <OneBlock number={ind} text={i} key={`blockEvenMoreInd${ind}`} />;
  };

  return (
    <>
      <Styled.RightSideBlock>
        {blocksEvenMore.map((i, ind) => renderItem({ i, ind }))}
        <Styled.HoverBlock href="https://www.cgsteam.io/">
          <Styled.Block>Need more proofs?</Styled.Block>
        </Styled.HoverBlock>
      </Styled.RightSideBlock>
    </>
  );
};

export default BlocksRender;
