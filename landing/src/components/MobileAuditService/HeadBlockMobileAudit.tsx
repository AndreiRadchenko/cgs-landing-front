import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/MobileAuditService/HeadBlock.styled";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import MobileImage from "../../../public/MobileAuditService/mobile.svg";
import firstSearch from "../../../public/MobileAuditService/search-1.svg";
import secondSearch from "../../../public/MobileAuditService/search-2.svg";
import thirdSearch from "../../../public/MobileAuditService/search-3.svg";
import fourthSearch from "../../../public/MobileAuditService/search-4.svg";

const HeadBlockMobileAudit = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.headerBlock;

  const [searchImageIndex, setSearchImageIndex] = useState(0);

  const searchImages = [
    firstSearch.src,
    secondSearch.src,
    thirdSearch.src,
    fourthSearch.src,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSearchImageIndex((prevIndex) =>
        prevIndex === searchImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [searchImageIndex]);

  return (
    <Styled.Container>
      <Styled.Content>
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
          />
        )}
      </Styled.Content>
      <Styled.ImageWrapper>
        <Styled.ImageMobile
          src={MobileImage.src}
          alt="hero mobile audit image"
        />
        <Styled.ImageSearch
          src={searchImages[searchImageIndex]}
          alt="mobile audit search image"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default HeadBlockMobileAudit;
