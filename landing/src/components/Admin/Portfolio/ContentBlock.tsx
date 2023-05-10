import React, { useState } from "react";
import { FieldArray, useFormikContext } from "formik";
import { useQuery } from "@tanstack/react-query";

import AddAndEdit from "./AddAndEdit";
import CallToAction from "./CallToAction";
import TitleBlock from "./TitleBlock";
import renderPortfolioInputs from "./renderPortfolioInputs";
import { useScrollTo } from "../../../hooks/useScrollTo";
import MetaTagsBlock from "../MetaTagsBlock";
import BlockDropdown from "../BlockDropdown";
import IndividualProjectPageInfo from "./IndividualProjectPageInfo";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import SaveBtn from "../Global/SaveBtn";
import EditReview from "./EditReview";

import {
  IPortfolioPageData,
  IPortfolioResponse,
} from "../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";

const AdminPortfolioContentBlock = () => {
  const [ref, scrollHandler] = useScrollTo<HTMLDivElement>();

  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();

  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  const { data: portfolio, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader ref={ref}>Portfolio</Styled.AdminHeader>
        <TitleBlock />
        <BlockDropdown title="Category">
          <Styled.AdminCategoryBlock>
            <FieldArray name="categories">
              {() =>
                renderPortfolioInputs({
                  state: values.categories,
                  handleChange,
                })
              }
            </FieldArray>
          </Styled.AdminCategoryBlock>
        </BlockDropdown>
        <SaveBtn title="Save Changes" handleClick={submitFunction} />
        <BlockDropdown styles={{ marginTop: "50px" }} title="Add a new case">
          <AddAndEdit
            current={current}
            isNewStatus={isNewStatus}
            reviews={data}
            setIsNewStatus={setIsNewStatus}
          />
        </BlockDropdown>
        <BlockDropdown title="Editing">
          <EditReview
            setCurrent={setCurrent}
            scrollHandler={scrollHandler}
            isNewStatus={isNewStatus}
            setIsNewStatus={setIsNewStatus}
          />
        </BlockDropdown>
        <BlockDropdown title="CTA">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CallToAction initValues={portfolio!.cta} />
          )}
        </BlockDropdown>
        <BlockDropdown title="Individual project page">
          <IndividualProjectPageInfo />
        </BlockDropdown>
      </Styled.AdminPaddedBlock>
      <Styled.MetaBlockWraper>
        <MetaTagsBlock theme="dark" sitemap="portfolio" />
      </Styled.MetaBlockWraper>
    </div>
  );
};

export default AdminPortfolioContentBlock;
