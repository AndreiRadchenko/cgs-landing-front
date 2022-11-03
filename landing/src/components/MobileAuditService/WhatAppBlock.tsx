import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import secondTextPhoto from "../../../public/MobileSevice/worthIt/marketingTextPhoto.svg";
import thirdTextPhoto from "../../../public/MobileSevice/worthIt/brandTextPhoto.svg";
import * as Styled from "../../styles/MobileAuditService/WhatAppBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import WhatAppBlockItem from "./WhatAppBlockItem";

const WhatAppBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppBlock;

  const textBlock = data?.textBlock;

  const titleIllustrations = [crystal, cube, cylinder];
  const textIllustrations = [null, secondTextPhoto, thirdTextPhoto];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && <MobileInfiniteText title={data.subtitle} />}
      <Styled.ContentLayout ref={elRef}>
        {textBlock &&
          Object.values(textBlock).map((el, idx) => (
            <WhatAppBlockItem
              idx={idx}
              content={el}
              key={idx}
              isScrolled={isScrolled}
              textImg={textIllustrations[idx]}
              titleImg={titleIllustrations[idx]}
            />
          ))}
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default WhatAppBlock;
