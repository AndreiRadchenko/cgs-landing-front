import React from "react";
import * as Styled from "../../styles/evenMore";
import OneBlock from "./OneBlock";
import { blocksEvenMore } from "../../utils/text";

const BlocksRender = () => {
  let mark = 1;
  let topMargin = 0;
  return (
    <>
      <Styled.RightSideBlock>
        {blocksEvenMore.map((i, ind) => {
          if (ind === mark) {
            topMargin += mark === 1 ? 10 : 17;
            mark += 3;
            return (
              <React.Fragment key={`blockEvenMoreInd${ind}`}>
                <Styled.LineThrough
                  theme={topMargin}
                />
                <OneBlock
                  number={ind}
                  text={i}
                />
              </React.Fragment>
            );
          }
          return (
            <OneBlock number={ind} text={i} key={`blockEvenMoreInd${ind}`} />
          );
        })}
        <Styled.hoverBlock>
          <Styled.Block>Need more proofs?</Styled.Block>
        </Styled.hoverBlock>
      </Styled.RightSideBlock>
    </>
  );
};

export default BlocksRender;
