﻿import React from "react";
import Image from "next/image";
import { useQueryClient } from "react-query";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import PhotoImage from "./PhotoImage";
import WhatWeLikeToSeeCard from "./WhatWeLikeToSeeCard";
import { IDataVacancyResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

const WhatWeLikeToSee = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataVacancyResponse>(
    queryKeys.getVacancyPage
  );
  const { info, offer } = { ...data };

  return (
    <Styles.LikeToSeeContainer>
      {info && (
        <Styles.LikeToSeeItem>
          <Styles.LikeToSeePhotoContainer>
            <PhotoImage data={info[0].worker} />
          </Styles.LikeToSeePhotoContainer>
          <Styles.LikeToSeeTextContainer>
            <Styles.LikeToSeeHeader>
              <SplitBrackets text={info[0].text.title} />
            </Styles.LikeToSeeHeader>
            <WhatWeLikeToSeeCard
              title={info[0].text.subtitle}
              arrayOfRequirements={info[0].points}
              text={info[0].text2.title}
            />
          </Styles.LikeToSeeTextContainer>
        </Styles.LikeToSeeItem>
      )}
      {offer && (
        <Styles.LikeToSeeItem className="reverseItem">
          <Styles.LikeToSeePhotoContainer>
            <Image
              src={offer?.image.url}
              alt={offer.title}
              width="700px"
              height="600px"
            />
          </Styles.LikeToSeePhotoContainer>
          <Styles.LikeToSeeTextContainer>
            <WhatWeLikeToSeeCard
              title={offer?.title}
              arrayOfRequirements={offer?.points}
              text={offer?.text.title}
              footer={"With love,"}
              subFooter={"CGS-team"}
            />
          </Styles.LikeToSeeTextContainer>
        </Styles.LikeToSeeItem>
      )}
    </Styles.LikeToSeeContainer>
  );
};

export default WhatWeLikeToSee;