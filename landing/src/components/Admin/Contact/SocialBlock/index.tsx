import React from "react";
import { useFormikContext } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import SocialSection from "./SocialSection";
import AboutSection from "./AboutSection";
import ButtonArrow from "../../../../utils/ButtonArrow";
import HistoryLink from "../../HistoryLink";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/AdminPage";
import { IContactPageData } from "../../../../types/Admin/AdminContact.types";
import { queryKeys } from "../../../../consts/queryKeys";

const SocialBlock = () => {
  const queryClient = useQueryClient();
  const socials = queryClient.getQueryData<IContactPageData>([
    queryKeys.getContactPage,
  ])?.socials;
  const abouts = queryClient.getQueryData<IContactPageData>([
    queryKeys.getContactPage,
  ])?.abouts;

  const { values, handleSubmit } = useFormikContext<IContactPageData>();

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <SocialSection />
      {socials?.lastModified && (
        <HistoryLink
          sectionName="Social"
          lastModified={socials?.lastModified}
          link={"/history/contacts/socials"}
        />
      )}

      <AboutSection />
      {abouts?.lastModified && (
        <HistoryLink
          sectionName="Our works"
          lastModified={abouts?.lastModified}
          link={"/history/contacts/abouts"}
        />
      )}
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.ContentWrapper>
  );
};

export default SocialBlock;
