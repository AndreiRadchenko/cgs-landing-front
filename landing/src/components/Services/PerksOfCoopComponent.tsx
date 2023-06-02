import React from "react";
import { Subtitle } from "../../styles/MobileService/Layout";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import * as Styles from "../../styles/Services";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { SplitBrackets } from "../../utils/splitBrackets";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import { IWorthBlock } from "../../types/Admin/Response.types";

const PerksOfCoopComponent = ({ data }: { data: IWorthBlock }) => {
  const titleIllustration = [crystal, cube, cylinder];

  const { subtitle, ...blocks } = { ...data };

  const dataWealth = data?.hasOwnProperty("textBlock")
    ? data.textBlock
    : blocks;

  return (
    <Styles.Container>
      <Subtitle className={"perksTitle"}>{data?.subtitle}</Subtitle>
      <MobileInfiniteText withoutMargin title={data?.subtitle} />
      <Styles.ContentLayout>
        {dataWealth &&
          Object.entries(dataWealth).map((el: any, idx) => (
            <Styles.WorthBlock key={`${el[0]} ${idx}`} ind={idx}>
              <Styles.WorthTitleContainer>
                <Styles.Icon
                  src={titleIllustration[idx].src}
                  alt="worth it title image"
                  xOffset={handleRandomOffset()}
                />
                <p>{el[1].subtitle}</p>
              </Styles.WorthTitleContainer>
              <Styles.WorthCardInfo>
                <Styles.WorthCardTitle>
                  <Styles.Icon
                    className={"iconCard"}
                    src={titleIllustration[idx].src}
                    alt="worth it title image"
                    xOffset={handleRandomOffset()}
                  />
                  <p>{el[1].subtitle}</p>
                </Styles.WorthCardTitle>
                <Styles.WorthText>
                  <SplitBrackets text={el[1].text} />
                </Styles.WorthText>
              </Styles.WorthCardInfo>
            </Styles.WorthBlock>
          ))}
      </Styles.ContentLayout>
    </Styles.Container>
  );
};

export default PerksOfCoopComponent;
