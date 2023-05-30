import React from "react";
import { Subtitle } from "../../styles/MobileService/Layout";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "../../styles/MobileService/WorthIt";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { SplitBrackets } from "../../utils/splitBrackets";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import secondTextPhoto from "../../../public/MobileSevice/worthIt/marketingTextPhoto.svg";
import thirdTextPhoto from "../../../public/MobileSevice/worthIt/brandTextPhoto.svg";
import { IWorthBlock } from "../../types/Admin/Response.types";

const PerksOfCoopComponent = ({ data }: { data: IWorthBlock }) => {
  const titleIllustration = [crystal, cube, cylinder];
  const textIllustration = [null, secondTextPhoto, thirdTextPhoto];

  return (
    <Styled.Container>
      <Subtitle>{data?.subtitle}</Subtitle>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentLayout>
        {data &&
          Object.entries(data?.textBlock).map((el, idx) => (
            <Styled.WorthBlock key={`${el[0]} ${idx}`} ind={idx}>
              <Styled.WorthTitleContainer>
                {textIllustration[idx] && (
                  <Styled.BlockImage
                    src={textIllustration[idx].src}
                    alt="worth it block image"
                  />
                )}
                <Styled.Icon
                  src={titleIllustration[idx].src}
                  alt="worth it title image"
                  xOffset={handleRandomOffset()}
                />
                {el[1].subtitle}
              </Styled.WorthTitleContainer>
              <Styled.WorthText>
                <SplitBrackets text={el[1].text} />
              </Styled.WorthText>
            </Styled.WorthBlock>
          ))}
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default PerksOfCoopComponent;
