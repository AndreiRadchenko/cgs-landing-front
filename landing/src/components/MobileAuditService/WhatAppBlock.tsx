import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import secondTextPhoto from "../../../public/MobileSevice/worthIt/marketingTextPhoto.svg";
import thirdTextPhoto from "../../../public/MobileSevice/worthIt/brandTextPhoto.svg";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import * as Styled from "../../styles/MobileAuditService/WhatAppBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";
import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WhatAppBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppBlock;

  const textBlock = data?.textBlock;

  const titleIllustration = [crystal, cube, cylinder];
  const textIllustration = [null, secondTextPhoto, thirdTextPhoto];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && <MobileInfiniteText title={data.subtitle} />}
      <Styled.ContentLayout ref={elRef}>
        {textBlock &&
          Object.entries(textBlock).map((el, idx) => (
            <Styled.WhatAppBlock
              key={`${el[0]} ${idx}`}
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
            >
              <Styled.WhatAppTitleContainer>
                {textIllustration[idx] && (
                  <Styled.BlockImage
                    src={textIllustration[idx].src}
                    alt="what app it block image"
                  />
                )}
                <Styled.Icon
                  src={titleIllustration[idx].src}
                  alt="what app title image"
                  xOffset={handleRandomOffset()}
                />
                {el[1].subtitle}
              </Styled.WhatAppTitleContainer>
              <Styled.WhatAppText>
                <SplitBrackets text={el[1].text} />
              </Styled.WhatAppText>
            </Styled.WhatAppBlock>
          ))}
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default WhatAppBlock;
