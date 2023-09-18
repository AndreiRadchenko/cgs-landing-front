import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { scroller } from "react-scroll";

import CvForm from "./CvForm";
import CvCategory from "./CvCategory";
import BlockDropdown from "../BlockDropdown";
import { adminCvService } from "../../../services/adminCvPage";
import { adminSitemapService } from "../../../services/adminSitemapPage";
import CvCtaBlock from "./CvCtaBlock";
import PublishedCvs from "./PublishedCvs";
import MetaTagsBlock from "../MetaTagsBlock";

import { queryKeys } from "../../../consts/queryKeys";
import ButtonArrow from "../../../utils/ButtonArrow";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import * as AdminPageStyled from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import { ICvPageData } from "../../../types/Admin/AdminCv.types";

const CvContentBlock = () => {
  const [isNewCv, setIsNewCv] = useState<boolean>(true);
  const [current, setCurrent] = useState(0);

  const { values, handleChange, handleSubmit, setValues } =
    useFormikContext<ICvPageData>();

  const { data } = useQuery([queryKeys.getCvs], () => adminCvService.getCv());

  const { data: sitemap } = useQuery([queryKeys.getSitemapData], () =>
    adminSitemapService.getSitemapData()
  );

  const handleClick = () => handleSubmit();

  const scrollFunc = () => {
    scroller.scrollTo("add-and-edit", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };

  return (
    <AdminPageStyled.AdminPaddedBlock theme="light">
      <AdminPageStyled.AdminContentBlock>
        <AdminPageStyled.AdminHeader>DEV'S CV</AdminPageStyled.AdminHeader>
        <div style={{ width: 347 }}>
          <SubHeaderWithInput
            header="Title"
            name="title"
            inputValue={values.title}
            onChangeFunction={handleChange}
          />
        </div>
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
        <div style={{ marginTop: 50 }}>
          <AdminBlockDropDown title="CATEGORY">
            <CvCategory
              categories={values.categories}
              onChangeFunction={handleChange}
              handleClick={handleClick}
              setValues={setValues}
            />
          </AdminBlockDropDown>
        </div>
        <BlockDropdown title="ADD A NEW CV" id="add-and-edit">
          <CvForm
            current={current}
            isNewCv={isNewCv}
            setIsNewCv={setIsNewCv}
            cv={data}
          />
        </BlockDropdown>
        <AdminBlockDropDown title="EDITING CV">
          <PublishedCvs
            current={current}
            setCurrent={setCurrent}
            isNewCv={isNewCv}
            setIsNewCv={setIsNewCv}
            data={data}
            sitemap={sitemap}
            scrollFunc={scrollFunc}
          />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="CTA BLOCK">
          <CvCtaBlock
            cta={values.cta}
            onChangeFunction={handleChange}
            handleClick={handleClick}
            setValues={setValues}
          />
        </AdminBlockDropDown>
      </AdminPageStyled.AdminContentBlock>
      <AdminPageStyled.MetaBlockWraper>
        <MetaTagsBlock sitemap="/" queryKey={queryKeys.getCvPage} />
      </AdminPageStyled.MetaBlockWraper>
    </AdminPageStyled.AdminPaddedBlock>
  );
};

export default CvContentBlock;
