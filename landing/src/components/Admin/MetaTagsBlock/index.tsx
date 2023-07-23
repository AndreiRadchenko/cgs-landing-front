import React, { useEffect, useState, FC } from "react";
import { useFormikContext } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { Counter, Message, Text } from "../../../styles/AdminBlogPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";
import HistoryLink from "../HistoryLink";

import * as Styled from "../../../styles/AdminPage";
import { IMetaBlock, ISitemapData } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";
import { adminSitemapService } from "../../../services/adminSitemapPage";

interface IMetaHistory {
  meta: {
    lastModified?: string;
  };
}

interface IMetaBlockProps {
  theme?: string;
  nestedMeta?: { meta: IMetaBlock };
  nameBefore?: string;
  sitemap?: string;
  queryKey?: string;
  historyLink?: string;
}

const META_TITLE_MIN = 10;
const META_TITLE_MAX = 60;
const META_DESCRIPTION_MIN = 120;
const META_DESCRIPTION_MAX = 160;

const MetaTagsBlock = ({
  theme,
  nestedMeta,
  nameBefore = "",
  sitemap,
  queryKey = "",
  historyLink,
}: IMetaBlockProps) => {
  const queryClient = useQueryClient();
  let metaData = null;
  if (queryKey !== "") {
    metaData = queryClient.getQueryData<IMetaHistory>([queryKey])?.meta;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, handleChange, handleSubmit } = useFormikContext<any>();
  const { meta } = nestedMeta ? nestedMeta : values;
  const [inSitemap, setInSitemap] = useState<boolean>(false);
  const [titleLength, setTitleLength] = useState(0);
  const [descLength, setDescLength] = useState(0);

  const { data } = useQuery([queryKeys.getSitemapData], () =>
    adminSitemapService.getSitemapData()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updateSitemap],
    (updatedSitemap: ISitemapData) =>
      adminSitemapService.updateSitemapData(updatedSitemap),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getSitemapData]);
      },
    }
  );

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const handleSitemapToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = data;
    if (updatedData && sitemap) {
      const index = updatedData.includedPages.indexOf(sitemap);
      e.target.checked
        ? updatedData.includedPages.push(sitemap)
        : index !== -1 && updatedData.includedPages.splice(index, 1);
      mutateAsync(updatedData);
    }
    setInSitemap(e.target.checked);
  };

  const handleClick = () => handleSubmit();

  useEffect(() => {
    if (data && sitemap) {
      setInSitemap(data.includedPages.includes(sitemap));
    }
  }, [data, sitemap]);

  useEffect(() => {
    setDescLength(
      nameBefore ? meta.length : values.meta.metaDescription.length
    );
    setTitleLength(nameBefore ? meta.length : values.meta.metaTitle.length);
  }, [nameBefore, values, meta.length]);

  return (
    <Styled.MetaBlockWraper theme={theme}>
      <div style={{ padding: "30px 30px" }}>
        {metaData?.lastModified && historyLink && (
          <HistoryLink
            sectionName="Meta"
            lastModified={metaData?.lastModified}
            link={historyLink}
          />
        )}
        <SubHeaderWithInput
          header="Meta Title"
          minRows={5}
          inputValue={meta.metaTitle}
          onInputFunction={handleTitle}
          name={
            nameBefore != "" ? `${nameBefore}.meta.metaTitle` : `meta.metaTitle`
          }
          onChangeFunction={handleChange}
        />
        <Text>
          <Message>
            {(titleLength > META_TITLE_MAX || titleLength < META_TITLE_MIN) &&
              "Title should be between 10 and 60 characters"}
          </Message>
          <Counter
            className={
              titleLength > META_TITLE_MAX || titleLength < META_TITLE_MIN
                ? "error"
                : undefined
            }
          >
            {titleLength}
          </Counter>
        </Text>
        <SubHeaderWithInput
          header="Meta Description"
          minRows={5}
          inputValue={meta.metaDescription}
          onInputFunction={handleDescInput}
          name={
            nameBefore != ""
              ? `${nameBefore}.meta.metaDescription`
              : `meta.metaDescription`
          }
          onChangeFunction={handleChange}
        />
        <Text>
          <Message>
            {(descLength > META_DESCRIPTION_MAX ||
              descLength < META_DESCRIPTION_MIN) &&
              "Description should be between 120 and 160 characters"}
          </Message>
          <Counter
            className={
              descLength > META_DESCRIPTION_MAX ||
              descLength < META_DESCRIPTION_MIN
                ? "error"
                : undefined
            }
          >
            {descLength}
          </Counter>
        </Text>
        <Styled.CheckBoxWrapper>
          <Styled.SitemapInput
            type="checkbox"
            checked={inSitemap}
            onChange={handleSitemapToggle}
            disabled={!sitemap}
          />
          <Styled.Label>Include in sitemap</Styled.Label>
        </Styled.CheckBoxWrapper>
        <SubHeaderWithInput
          header="Custom Head"
          minRows={5}
          inputValue={meta.customHead}
          name={
            nameBefore != ""
              ? `${nameBefore}.meta.customHead`
              : `meta.customHead`
          }
          onChangeFunction={handleChange}
        />
        <BlackButton
          type="submit"
          size={"1.5em"}
          padding={"1.11em 1.5em"}
          onClick={handleClick}
        >
          Update meta tags
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.MetaBlockWraper>
  );
};

export default MetaTagsBlock;
