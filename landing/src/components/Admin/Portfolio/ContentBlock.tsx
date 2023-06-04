import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { animateScroll as scroll, scroller } from "react-scroll";

import AddAndEdit from "./AddAndEdit";
import CallToAction from "./CallToAction";
import TitleBlock from "./TitleBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import BlockDropdown from "../BlockDropdown";
import IndividualProjectPageInfo from "./IndividualProjectPageInfo";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import EditReview from "./EditReview";
import AdminCategory from "./AdminCategory";

import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";

const AdminPortfolioContentBlock = () => {
  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  const { data: portfolio, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);

  const scrollFunc = () => {
    scroller.scrollTo("add-and-edit", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
        <TitleBlock />
        <BlockDropdown title="Category">
          <AdminCategory />
        </BlockDropdown>
        <BlockDropdown
          styles={{ marginTop: "50px" }}
          title="Add a new case"
          id="add-and-edit"
        >
          <AddAndEdit
            current={current}
            isNewStatus={isNewStatus}
            reviews={data}
            setIsNewStatus={setIsNewStatus}
          />
        </BlockDropdown>
        <BlockDropdown title="Editing">
          <EditReview
            scrollFunc={scrollFunc}
            setCurrent={setCurrent}
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
