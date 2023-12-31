import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Field, useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import countryList, { CountryData } from "react-select-country-list";
import Select, { SingleValue } from "react-select";
import ReactCountryFlag from "react-country-flag";

import DropdownCategory from "../Portfolio/DropdownCategory";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import DropdownIndustry from "../Portfolio/DropdownIndustry";
import DropdownTechnology from "../Portfolio/DropdownTechnology";
import SaveBtn from "../Global/SaveBtn";

import * as Styled from "../../../styles/AdminPage";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

import { IImage } from "../../../types/Admin/Admin.types";
import {
  IPortfolioReview,
  ITechnology,
} from "../../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";

interface IAddReviewProps {
  categories: string[];
  industries: string[];
  technologies: ITechnology[] | undefined;
}

const AddReview = ({
  categories,
  industries,
  technologies,
}: IAddReviewProps) => {
  const queryClient = useQueryClient();

  const [errorMsg, setErrorMsg] = useState("");

  const { values, handleChange, errors, handleSubmit, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const industryRef = useRef<HTMLInputElement | null>(null);

  const options = useMemo(() => countryList().getData(), []);

  const deleteFunctionBanner = useDeleteImageFunction(
    values.imageBanner.image !== null ? values.imageBanner : values,
    "",
    false,
    "imageBanner.image"
  );
  const uploadFunctionBanner = useUploadImageFunction(
    values.imageBanner,
    "",
    false,
    "imageBanner.image"
  );

  const deleteFunctionProjectBanner = useDeleteImageFunction(
    values.imageProjectBanner.image !== null
      ? values.imageProjectBanner
      : values,
    "",
    false,
    "imageProjectBanner.image"
  );
  const uploadFunctionProjectBanner = useUploadImageFunction(
    values.imageProjectBanner,
    "",
    false,
    "imageProjectBanner.image"
  );

  const { mutateAsync: addIndustry } = useMutation(
    [queryKeys.addPortfolioIndustry],
    (industry: string) => adminPortfolioService.addIndustry(industry),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolioPage]);
      },
    }
  );

  const changeCountryHandler = (e: SingleValue<CountryData>) => {
    setFieldValue("country", e.label);
    setFieldValue("flag", e.value);
  };

  const deleteFuncBanner = async () => (await deleteFunctionBanner)();
  const uploadFuncBanner = (image: IImage) => uploadFunctionBanner(image);

  const deleteFuncProjectBanner = async () =>
    (await deleteFunctionProjectBanner)();
  const uploadFuncProjectBanner = (image: IImage) =>
    uploadFunctionProjectBanner(image);

  useEffect(() => {
    setTimeout(() => setErrorMsg(""), 2000);
  }, [errorMsg]);

  return (
    <>
      <Styled.AdminPageFirstBlockLayout>
        <Styled.AdminPortfolioImage>
          <Styled.AdminPortfolioImageContainer>
            <Styled.AdminPortfolioImageText>
              <h2>
                Banner <span>(project page)</span>
              </h2>
            </Styled.AdminPortfolioImageText>
            {!!errors.imageBanner?.image && !values.imageBanner?.image && (
              <Styled.ImageErrorBox />
            )}
            <PhotoBlockDashedHorizontal
              emptyHeader="Click to drop new image here"
              photo={values.image ? values.image : values.imageBanner.image}
              deleteFunction={deleteFuncBanner}
              uploadFunction={uploadFuncBanner}
            />
          </Styled.AdminPortfolioImageContainer>

          <Styled.AdminPortfolioImageContainer>
            <Styled.AdminPortfolioImageText>
              <h2>
                Project banner <span>(Separate page)</span>
              </h2>
            </Styled.AdminPortfolioImageText>
            {!!errors.imageProjectBanner?.image &&
              !values.imageProjectBanner?.image && <Styled.ImageErrorBox />}
            <PhotoBlockDashedHorizontal
              emptyHeader="Click to drop new image here"
              photo={
                values.image ? values.image : values.imageProjectBanner.image
              }
              deleteFunction={deleteFuncProjectBanner}
              uploadFunction={uploadFuncProjectBanner}
            />
          </Styled.AdminPortfolioImageContainer>
        </Styled.AdminPortfolioImage>
        <Styled.AdminPageReviewBlock>
          <Styled.AdminCategoryWrapper>
            <DropdownCategory
              iserror={!!errors.categories && !values.categories.length}
              categories={categories}
            />
          </Styled.AdminCategoryWrapper>
          <h3 style={{ margin: 0 }}>About Project</h3>
          <Styled.AdminPageSecondBlockLayout>
            <div>
              <Styled.AdminNDAWrapper>
                <Styled.AdminField
                  iserror={!!errors.button && !values.button && !values.NDA}
                  placeholder="Link"
                  value={values.button}
                  onChange={handleChange}
                  name="button"
                />
                <Styled.AdminCheckboxField
                  iserror={!!errors.NDA && !values.NDA && !values.button}
                  checked={values.NDA}
                  type="checkbox"
                  id="NDA"
                  name="NDA"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const { checked } = e.target;
                    if (checked) {
                      setFieldValue("button", "");
                    }
                    setFieldValue("NDA", checked);
                  }}
                />
                <label htmlFor="NDA">NDA</label>
              </Styled.AdminNDAWrapper>

              <Styled.AdminInput
                iserror={!!errors.title && !values.title}
                placeholder="Name project"
                value={values.title}
                onChange={handleChange}
                name="title"
              />
              <Styled.AdminInput
                minRows={4}
                placeholder="About project:"
                value={values.text}
                maxLength={1200}
                onChange={handleChange}
                name="text"
                iserror={!!errors.text && !values.text}
                className="withBottomButtons"
              />
              <Styled.BottomText className="portfolio-admin-description">
                <Styled.TextCounter>
                  {values.text.length}/1200
                </Styled.TextCounter>
              </Styled.BottomText>
              <Styled.FlagSelector>
                <ReactCountryFlag
                  countryCode={values.flag}
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                />
                <Select
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      width: "200px",
                      borderRadius: 0,
                      background: "transparent",
                      borderColor:
                        !!errors.country && !values.country
                          ? "red"
                          : "rgb(204, 204, 204)",
                    }),
                  }}
                  value={{ label: values.country }}
                  options={options}
                  onChange={changeCountryHandler}
                />
              </Styled.FlagSelector>
            </div>
            <div>
              <div>
                <Styled.IndustryWrapper>
                  <input
                    type="text"
                    placeholder="Add NEW industry"
                    ref={industryRef}
                  />
                  <div
                    onClick={() => {
                      if (industries.includes(industryRef.current!.value)) {
                        setErrorMsg("Such industry already exists");
                      } else {
                        industryRef.current!.value.length > 0 &&
                          addIndustry(industryRef.current!.value);
                      }

                      industryRef.current!.value = "";
                    }}
                  >
                    +
                  </div>
                </Styled.IndustryWrapper>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
                <DropdownIndustry
                  iserror={!!errors.industry && !values.industry}
                  industries={industries}
                />
              </div>
              <Styled.SmallProjectInfoWrapper>
                <Styled.SmallInputWrapper
                  iserror={
                    !!errors.projectDuration &&
                    (values.projectDuration === "" ||
                      +values.projectDuration < 1 ||
                      +values.projectDuration > 999)
                  }
                >
                  <p>Project Duration</p>
                  <label>
                    <Field type="text" placeholder="0" name="projectDuration" />
                    months
                  </label>
                </Styled.SmallInputWrapper>
                <Styled.SmallInputWrapper
                  iserror={
                    !!errors.projectTeam &&
                    (values.projectTeam === "" ||
                      +values.projectTeam < 1 ||
                      +values.projectTeam > 99)
                  }
                >
                  <p>Team members</p>
                  <label>
                    <Field type="text" placeholder="0" name="projectTeam" />
                    members
                  </label>
                </Styled.SmallInputWrapper>
              </Styled.SmallProjectInfoWrapper>
            </div>
          </Styled.AdminPageSecondBlockLayout>
          <Styled.AdminPageThirdBlockLayout>
            <h3 style={{ margin: "0 0 15px 0" }}>Add review</h3>
            <Styled.AdminPageThirdBlockFlex>
              <Styled.AdminInput
                iserror={!!errors.feedback?.name && !values.feedback.name}
                placeholder="Name"
                value={values.feedback.name}
                onChange={handleChange}
                name="feedback.name"
                style={{ height: "50px", overflow: "inherit" }}
              />
              <Styled.AdminInput
                placeholder="Position"
                value={values.feedback.position}
                onChange={handleChange}
                name="feedback.position"
                style={{ height: "50px", overflow: "inherit" }}
              />
            </Styled.AdminPageThirdBlockFlex>
            <Styled.AdminInput
              iserror={
                !!errors.feedback?.feedbackText &&
                !values.feedback?.feedbackText
              }
              minRows={4}
              placeholder="Text review"
              value={values.feedback.feedbackText}
              onChange={handleChange}
              name="feedback.feedbackText"
              style={{ height: "120px", overflow: "inherit" }}
            />
            <Styled.AdminInput
              placeholder="Show case title"
              value={values.showCaseTitle || ""}
              onChange={handleChange}
              name="showCaseTitle"
              style={{ height: "50px", overflow: "inherit" }}
            />
          </Styled.AdminPageThirdBlockLayout>
          <Styled.AdminPageFourthBlockLayout>
            <h3 style={{ margin: "0 0 15px 0" }}>Technology</h3>
            <DropdownTechnology
              iserror={!!errors.technologies && !values.technologies.length}
              technologies={technologies}
            />
          </Styled.AdminPageFourthBlockLayout>
          <SaveBtn handleClick={handleSubmit} />
          {Object.keys(errors).length > 0 && errors.constructor === Object && (
            <p style={{ color: "red" }}>Some fields are missed</p>
          )}
        </Styled.AdminPageReviewBlock>
      </Styled.AdminPageFirstBlockLayout>
    </>
  );
};

export default AddReview;
