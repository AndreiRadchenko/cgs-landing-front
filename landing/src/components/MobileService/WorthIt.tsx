import React, { useRef } from "react";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/WorthIt";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import secondTextPhoto from "../../../public/MobileSevice/worthIt/marketingTextPhoto.svg";
import thirdTextPhoto from "../../../public/MobileSevice/worthIt/brandTextPhoto.svg";
import { useQueryClient } from "react-query";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WorthIt = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  )?.worthBlock;

  const titleIllustration = [crystal, cube, cylinder];
  const textIllustration = [null, secondTextPhoto, thirdTextPhoto];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Subtitle>{data?.subtitle}</Subtitle>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentLayout ref={elRef}>
        {data &&
          Object.entries(data?.textBlock).map((el, idx) => (
            <Styled.WorthBlock
              key={`${el[0]} ${idx}`}
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
            >
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

export default WorthIt;
