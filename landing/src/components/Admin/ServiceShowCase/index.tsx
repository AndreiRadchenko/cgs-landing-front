import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioPageService } from "../../../services/adminPortfolioPage";
import {
  AdminBlockWrapper,
  AdminBlockTitle,
  AdminShowCaseCategoryDropdownHeader,
  AdminShowCaseServiceGrid,
  AdminPaddedBlock,
  AdminShowCaseServiceButton,
  AdminShowCaseTitle,
  AdminShowCaseProjectsWrapper,
  AdminShowCaseDropDownContent,
  AdminShowCaseDropDownListItem,
  AdminShowCaseButton,
} from "../../../styles/AdminPage";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";
import { IProjects } from "../../../types/Admin/Response.types";
import ButtonArrow from "../../../utils/ButtonArrow";

const ServiceShowCase = () => {
  const { values, setFieldValue, handleSubmit } = useFormikContext<IProjects>();
  const [category, setCategory] = useState("");
  const [projectIsOpen, setProjectIsOpen] = useState<boolean>(false);
  const [choosenProjects, setChoosenProjects] = useState<string[]>(
    values.projects
  );
  const [project, setProject] = useState<string>("");
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);

  const { data: portfolio } = useQuery(queryKeys.getPortfolioPage, () =>
    adminPortfolioPageService.getPortfolio()
  );
  const handleCategory = () => {
    setIsCategoryOpen((old) => !old);
  };
  const handleCategoryChoice = (category: string) => {
    setIsCategoryOpen(false);
    setCategory(category);
  };

  const handleProject = () => {
    setProjectIsOpen((old) => !old);
  };

  const handleProjectChoice = (project: string) => {
    setProjectIsOpen(false);
    setProject(project);
  };

  const handleProjectClose = (el: string) => {
    setChoosenProjects(choosenProjects.filter((element) => element !== el));
    values.projects = choosenProjects;
    setProject("");
  };

  const handleButtonClick = () => {
    if (values.projects && project) {
      setChoosenProjects([...choosenProjects, project]);
      setCategory("");
      setProject("");
      values.projects = choosenProjects;
    }
  };

  useEffect(() => {
    setFieldValue("projects", choosenProjects);
    handleSubmit();
  }, [choosenProjects, setFieldValue, handleSubmit]);

  return (
    <AdminPaddedBlock>
      <AdminBlockTitle>
        Block our work{" "}
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7.5 8L14 1" stroke="white" />
        </svg>
      </AdminBlockTitle>
      <AdminShowCaseServiceGrid>
        <AdminBlockWrapper>
          <AdminBlockWrapper>
            <AdminShowCaseTitle>OUR WORK</AdminShowCaseTitle>
            <AdminShowCaseCategoryDropdownHeader
              onClick={handleCategory}
              className={isCategoryOpen ? "open" : undefined}
            >
              {category.length === 0 ? "Technology" : category}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49999 5C4.33869 5 4.17741 4.93998 4.05443 4.82018L0.184628 1.0486C-0.0615425 0.808678 -0.0615425 0.419689 0.184628 0.179867C0.430698 -0.0599556 0.829741 -0.0599556 1.07593 0.179867L4.49999 3.51717L7.92406 0.179983C8.17023 -0.0598391 8.56923 -0.0598391 8.81528 0.179983C9.06157 0.419806 9.06157 0.808794 8.81528 1.04871L4.94554 4.8203C4.8225 4.94011 4.66122 5 4.49999 5Z"
                  fill="black"
                />
              </svg>
            </AdminShowCaseCategoryDropdownHeader>
            <AdminShowCaseDropDownContent
              className={isCategoryOpen ? "open" : undefined}
            >
              {portfolio?.categories.map((el, idx) => (
                <AdminShowCaseDropDownListItem
                  key={idx}
                  onClick={() => handleCategoryChoice(el)}
                >
                  {el[0].toUpperCase() + el.slice(1)}
                </AdminShowCaseDropDownListItem>
              ))}
            </AdminShowCaseDropDownContent>
          </AdminBlockWrapper>
          <AdminBlockWrapper>
            <AdminShowCaseCategoryDropdownHeader
              onClick={handleProject}
              className={projectIsOpen ? "open" : undefined}
            >
              {project.length === 0 ? "Name project" : project}
              <svg
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49999 5C4.33869 5 4.17741 4.93998 4.05443 4.82018L0.184628 1.0486C-0.0615425 0.808678 -0.0615425 0.419689 0.184628 0.179867C0.430698 -0.0599556 0.829741 -0.0599556 1.07593 0.179867L4.49999 3.51717L7.92406 0.179983C8.17023 -0.0598391 8.56923 -0.0598391 8.81528 0.179983C9.06157 0.419806 9.06157 0.808794 8.81528 1.04871L4.94554 4.8203C4.8225 4.94011 4.66122 5 4.49999 5Z"
                  fill="black"
                />
              </svg>
            </AdminShowCaseCategoryDropdownHeader>
            <AdminShowCaseDropDownContent
              className={projectIsOpen ? "open" : undefined}
            >
              {portfolio?.reviews
                .filter((el) => {
                  return category.length === 0
                    ? !choosenProjects.includes(el.title)
                    : el.category === category &&
                        !choosenProjects.includes(el.title);
                })
                .map((el, idx) => (
                  <AdminShowCaseDropDownListItem
                    key={idx}
                    onClick={() => handleProjectChoice(el.title)}
                  >
                    {el.title}
                  </AdminShowCaseDropDownListItem>
                ))}
            </AdminShowCaseDropDownContent>
          </AdminBlockWrapper>

          <AdminShowCaseButton
            padding={"1.117em 2.17em"}
            size={"1.125em"}
            onClick={handleButtonClick}
          >
            Submit projects list
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </AdminShowCaseButton>
        </AdminBlockWrapper>
        <AdminShowCaseProjectsWrapper>
          {choosenProjects.map((el, idx) => (
            <AdminShowCaseServiceButton
              key={idx}
              onClick={() => handleProjectClose(el)}
            >
              {el} <span>x</span>
            </AdminShowCaseServiceButton>
          ))}
        </AdminShowCaseProjectsWrapper>
      </AdminShowCaseServiceGrid>
    </AdminPaddedBlock>
  );
};

export default ServiceShowCase;
