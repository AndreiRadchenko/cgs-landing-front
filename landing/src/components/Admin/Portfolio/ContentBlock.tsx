import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Field, useFormikContext } from "formik";

import AddAndEdit from "./AddAndEdit";
import CallToAction from "./CallToAction";
import TitleBlock from "./TitleBlock";
import MetaTagsBlock from "../MetaTagsBlock";
import BlockDropdown from "../BlockDropdown";
import IndividualProjectPageInfo from "./IndividualProjectPageInfo";
import EditReview from "./EditReview";
import AddProjectTechIcon from "./AddProjectTechIcon";
import AdminCategory from "./AdminCategory";

import * as Styled from "../../../styles/AdminPage";

import {
  IPortfolioPageData,
  IPortfolioResponse,
  ITechnology,
} from "../../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../../consts/queryKeys";
import { technologiesService } from "../../../services/technologies";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";

const AdminPortfolioContentBlock = () => {
  const queryClient = useQueryClient();

  const { values } = useFormikContext<IPortfolioPageData>();

  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  const { data: portfolio, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const { data: technologies } = useQuery([queryKeys.getTechnologies], () =>
    technologiesService.getTechnologies()
  );

  const { mutateAsync: addTech } = useMutation(
    [queryKeys.updateTechnologies],
    (technology: ITechnology) => technologiesService.addTechnology(technology),
    {
      onSuccess: () => {
        values.technologyNew.name = "";
        values.technologyNew.image = null as any;
        values.technologyNew.main = false;
        queryClient.invalidateQueries([queryKeys.getPortfolioPage]);
      },
    }
  );

  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);
  const [errorMsgTech, setErrorMsgTech] = useState("");

  useEffect(() => {
    setTimeout(() => setErrorMsgTech(""), 2000);
  }, [errorMsgTech]);

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
        <BlockDropdown title="Add Technology">
          <Styled.AdminPageAddTechnologyWrapper>
            <Field
              name="technologyNew.name"
              type="text"
              placeholder="Name the new technology"
            />
            <AddProjectTechIcon />
            <div
              className="plus"
              onClick={() => {
                if (
                  technologies?.technologies.some(
                    (e) => e.name === values.technologyNew.name
                  )
                ) {
                  setErrorMsgTech("Such technology already exists");
                } else if (values.technologyNew.name.length === 0) {
                  setErrorMsgTech("Enter the name of tech");
                } else {
                  values.technologyNew.name.length > 0 &&
                    values.technologyNew.image !== null &&
                    addTech(values.technologyNew);
                }
              }}
            >
              +
            </div>
            {errorMsgTech && <p style={{ color: "red" }}>{errorMsgTech}</p>}
          </Styled.AdminPageAddTechnologyWrapper>
        </BlockDropdown>
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
            technologies={technologies}
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
