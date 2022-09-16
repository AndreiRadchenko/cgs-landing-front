import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminPortfolioPageService } from "../../../../services/adminPortfolioPage";
import {
  AdminHalfGrid,
  AdminPaddedBlock,
  AdminCategorySelect,
  AdminCategoryOption,
  AdminBlockWrapper,
} from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";

const WhoNeedApps = () => {
  const [category, setCategory] = useState("");
  const [project, setProject] = useState<string[]>([]);
  const { values, handleChange, setFieldValue, handleSubmit } =
    useFormikContext<IServiceMobile>();

  const { data: portfolio } = useQuery(queryKeys.getPortfolioPage, () =>
    adminPortfolioPageService.getPortfolio()
  );

  const { projects, ...blocks } = values.whoNeedApps;

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "whoNeedApps" },
            state: blocks,
            onChangeFunction: handleChange,
          })}
        </div>
      </AdminHalfGrid>
      <AdminPaddedBlock>
        <AdminHalfGrid>
          <AdminBlockWrapper>
            <AdminBlockWrapper>
              <AdminCategorySelect
                name="categories"
                autoComplete="off"
                onChange={(ev) => setCategory(ev.target.value)}
              >
                <AdminCategoryOption disabled selected>
                  Choose category
                </AdminCategoryOption>
                {portfolio?.categories.map((el, idx) => (
                  <AdminCategoryOption value={el} key={idx}>
                    {el[0].toUpperCase() + el.split("").splice(1).join("")}
                  </AdminCategoryOption>
                ))}
              </AdminCategorySelect>
            </AdminBlockWrapper>
            <AdminBlockWrapper>
              <AdminCategorySelect
                name="project"
                autoComplete="off"
                onChange={(el) => {
                  if (!project.includes(el.target.value))
                    setProject([el.target.value, ...project]);
                }}
              >
                <AdminCategoryOption disabled selected>
                  Choose project
                </AdminCategoryOption>
                {portfolio?.reviews
                  .filter((el) => el.category === category)
                  .map((el, idx) => (
                    <AdminCategoryOption value={el.title} key={idx}>
                      {el.title}
                    </AdminCategoryOption>
                  ))}
              </AdminCategorySelect>
            </AdminBlockWrapper>
            <button
              onClick={() => {
                if (projects) {
                  projects.length = 0;
                  projects.push(...project);
                }
                setFieldValue("whoNeedApps.projects", project);
              }}
            >
              Submit projects list
            </button>
          </AdminBlockWrapper>
          <AdminBlockWrapper>
            {project.map((el, idx) => (
              <div key={idx}>
                <button
                  onClick={() => {
                    setProject(project.filter((element) => element !== el));
                  }}
                >
                  {el} x
                </button>
              </div>
            ))}
          </AdminBlockWrapper>
        </AdminHalfGrid>
      </AdminPaddedBlock>
    </AdminPaddedBlock>
  );
};

export default WhoNeedApps;
