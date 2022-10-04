import React from "react";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/WhyIsWebAMust.styled";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import secondTextPhoto from "../../../public/MobileSevice/worthIt/marketingTextPhoto.svg";
import thirdTextPhoto from "../../../public/MobileSevice/worthIt/brandTextPhoto.svg";
import { useQueryClient } from "react-query";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";

const WhyIsWebAMust = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>(
    queryKeys.getServiceWebPage
  )?.whyIsWebBlock;

  const textBlock = data && {
    element1: data.element1,
    element2: data.element2,
    element3: data.element3,
  };

  const titleIllustration = [crystal, cube, cylinder];
  const textIllustration = [null, secondTextPhoto, thirdTextPhoto];
  return (
    <Styled.Container>
      <Subtitle>{data?.subtitle}</Subtitle>
      <Styled.ContentLayout>
        {textBlock &&
          Object.entries(textBlock).map((el, idx) => (
            <Styled.WhyIsWebBlock key={`${el[0]} ${idx}`}>
              <Styled.WhyIsWebTitleContainer>
                {textIllustration[idx] && (
                  <Styled.BlockImage
                    src={textIllustration[idx].src}
                    alt="why is web it block image"
                  />
                )}
                <Styled.Icon
                  src={titleIllustration[idx].src}
                  alt="why is web title image"
                  xOffset={handleRandomOffset()}
                />
                {el[1].subtitle}
              </Styled.WhyIsWebTitleContainer>
              <Styled.WhyIsWebText>
                <SplitBrackets text={el[1].text} />
              </Styled.WhyIsWebText>
            </Styled.WhyIsWebBlock>
          ))}
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default WhyIsWebAMust;
