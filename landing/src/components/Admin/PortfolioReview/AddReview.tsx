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

import AdminDropDown from "../Global/AdminDropDown";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import DropdownIndustry from "../Portfolio/DropdownIndustry";
import DropdownTechnology from "../Portfolio/DropdownTechnology";
import SaveBtn from "../Global/SaveBtn";
import AddProjectTechIcon from "../Portfolio/AddProjectTechIcon";

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
  technologies: ITechnology[];
  newFlag: boolean;
}

const AddReview = ({
  categories,
  industries,
  technologies,
  newFlag,
}: IAddReviewProps) => {
  const queryClient = useQueryClient();

  const { values, handleChange, errors, handleSubmit, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const [catValue, setCatValue] = useState(newFlag ? "" : values.category);

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

  const { mutateAsync: addTech } = useMutation(
    [queryKeys.addPortfolioTech],
    (technology: ITechnology) =>
      adminPortfolioService.addTechnology(technology),
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
    setFieldValue("category", catValue);
  }, [catValue]);

  return (
    <>
      <Styled.AdminPageFirstBlockLayout>
        <Styled.AdminPortfolioImage>
          <Styled.AdminPortfolioImageText>
            <h2>
              Banner <span>(project page)</span>
            </h2>
          </Styled.AdminPortfolioImageText>
          <PhotoBlockDashedHorizontal
            emptyHeader="Drop new image here"
            photo={values.image ? values.image : values.imageBanner.image}
            deleteFunction={deleteFuncBanner}
            uploadFunction={uploadFuncBanner}
          />
          <Styled.AdminPortfolioImageText>
            <h2>
              Project banner <span>(Separate page)</span>
            </h2>
          </Styled.AdminPortfolioImageText>
          <PhotoBlockDashedHorizontal
            emptyHeader="Drop new image here"
            photo={
              values.image ? values.image : values.imageProjectBanner.image
            }
            deleteFunction={deleteFuncProjectBanner}
            uploadFunction={uploadFuncProjectBanner}
          />
        </Styled.AdminPortfolioImage>
        <Styled.AdminPageReviewBlock>
          <Styled.AdminCategoryWrapper>
            <AdminDropDown
              menu={categories}
              value={catValue}
              setValue={setCatValue}
            />
          </Styled.AdminCategoryWrapper>
          <h3 style={{ margin: 0 }}>About Project</h3>
          <Styled.AdminPageSecondBlockLayout>
            <div>
              <Styled.AdminNDAWrapper>
                <Styled.AdminField
                  placeholder="Link"
                  value={values.button}
                  onChange={handleChange}
                  name="button"
                />
                <Styled.AdminCheckboxField
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
                placeholder="Name project"
                value={values.title}
                onChange={handleChange}
                name="title"
              />
              <Styled.AdminInput
                minRows={4}
                placeholder="About project:"
                value={values.text}
                maxLength={625}
                onChange={handleChange}
                name="text"
                className="withBottomButtons"
              />
              <Styled.BottomText>
                <Styled.ErrorText>{errors["text"]}</Styled.ErrorText>
                <Styled.TextCounter>
                  {values.text.length}/625
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
                    }),
                  }}
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
                    onClick={() =>
                      industryRef.current!.value.length > 0 &&
                      addIndustry(industryRef.current!.value)
                    }
                  >
                    +
                  </div>
                </Styled.IndustryWrapper>
                <DropdownIndustry industries={industries} />
              </div>
              <Styled.SmallProjectInfoWrapper>
                <Styled.SmallInputWrapper>
                  <p>Project Duration</p>
                  <label>
                    <Field type="text" placeholder="0" name="projectDuration" />
                    month
                  </label>
                </Styled.SmallInputWrapper>
                <Styled.SmallInputWrapper>
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
                placeholder="Name"
                value={values.feedback.name}
                onChange={handleChange}
                name="feedback.name"
              />
              <Styled.AdminInput
                placeholder="Position"
                value={values.feedback.position}
                onChange={handleChange}
                name="feedback.position"
              />
            </Styled.AdminPageThirdBlockFlex>
            <Styled.AdminInput
              minRows={4}
              placeholder="Text review"
              value={values.feedback.feedbackText}
              onChange={handleChange}
              name="feedback.feedbackText"
            />
          </Styled.AdminPageThirdBlockLayout>
          <Styled.AdminPageFourthBlockLayout>
            <h3 style={{ margin: "0 0 15px 0" }}>Technology</h3>
            <DropdownTechnology technologies={technologies} />
            <Styled.AdminPageAddTechnologyWrapper>
              <Field
                name="technologyNew.name"
                type="text"
                placeholder="Name the new technology"
              />
              <AddProjectTechIcon />
              <div
                className="plus"
                onClick={() => addTech(values.technologyNew)}
              >
                +
              </div>
            </Styled.AdminPageAddTechnologyWrapper>
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
