import React, { useState } from "react";
import { useFormikContext } from "formik";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import CategoryDropdown from "./CategoryDropdown";
import TechnologyDropdown from "./TechnologyDropdown";
import ButtonArrow from "../../../utils/ButtonArrow";
import { queryKeys } from "../../../consts/queryKeys";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { adminCvService } from "../../../services/adminCvPage";
import TrashIcon from "../Portfolio/TrashIcon";
import { technologiesService } from "../../../services/technologies";

import * as Styled from "../../../styles/AdminPage";
import * as Styles from "../../../styles/AdminCvPage"
import { ArrowContainer, BlackButton } from "../../../styles/HomePage/General.styled";

import { CvData } from "../../../types/Admin/AdminCv.types";
import { IImage } from "../../../types/Admin/Admin.types";
import { ITechnology } from "../../../types/Admin/technologies.types";
import TextEditor from "../../TextEditor/TextEditor";

const CvAddOrEdit = () => {
    const { values, handleChange, errors, handleSubmit, setValues } = useFormikContext<CvData>();
    const [focusedAchievementIdx, setFocusedAchievementIdx] = useState(-1);

    const { data: category } = useQuery([queryKeys.getCvPage], () =>
        adminCvService.getCvPage()
    );

    const { data: technologies } = useQuery([queryKeys.getTechnologies], () =>
        technologiesService.getTechnologies()
    );

    const handleClick = () => {
        handleSubmit();
    }

    const deleteImage = useDeleteImageFunction(values, "", false);
    const uploadImage = useUploadImageFunction(values, "", false);

    const deleteImageFunc = async () => (await deleteImage)();
    const uploadImageFunc = (image: IImage) => uploadImage(image);

    const handleAddStack = (idx: number) => {
        setValues((prevState) => {
            const updatedCard = [...prevState.skills.card];
            updatedCard[idx] = {
                ...updatedCard[idx],
                stack: [...updatedCard[idx].stack, ""],
            };

            return {
                ...prevState,
                skills: {
                    ...prevState.skills,
                    card: updatedCard,
                },
            };
        });
    };

    const handleDeleteStack = (idx: number, stackIdx: number) => {
        setValues((prevState) => {
            const updatedCard = prevState.skills.card.map((card, cardIdx) => {
                if (cardIdx === idx) {
                    return {
                        ...card,
                        stack: card.stack.filter((_, index) => index !== stackIdx),
                    };
                } else {
                    return card;
                }
            });

            return {
                ...prevState,
                skills: {
                    ...prevState.skills,
                    card: updatedCard,
                },
            };
        });
    };

    const handleAddAchievement = (idx: number) => {
        setValues((prevState) => {
            const updatedProject = [...prevState.projects.project];
            updatedProject[idx] = {
                ...updatedProject[idx],
                achievements: [...updatedProject[idx].achievements, ""],
            };

            return {
                ...prevState,
                projects: {
                    ...prevState.projects,
                    project: updatedProject,
                },
            };
        });
    };

    const handleDeleteAchievement = (idx: number, achievementIdx: number) => {
        setValues((prevState) => {
            const updatedProject = prevState.projects.project.map((project, projectIdx) => {
                if (projectIdx === idx) {
                    return {
                        ...project,
                        achievements: project.achievements.filter((_, index) => index !== achievementIdx),
                    };
                } else {
                    return project;
                }
            });

            return {
                ...prevState,
                projects: {
                    ...prevState.projects,
                    project: updatedProject,
                },
            };
        });
    };

    const handleAddProject = () => {
        setValues((prevState) => ({
            ...prevState,
            projects: {
                ...prevState.projects,
                project: [
                    ...prevState.projects.project,
                    {
                        projectName: "",
                        role: "",
                        date: "",
                        summary: "",
                        achievements: [""],
                        technology: [],
                    },
                ],
            },
        }));
    };

    const handleDeleteProject = (index: number) => {
        setValues((prevState) => ({
            ...prevState,
            projects: {
                ...prevState.projects,
                project: prevState.projects.project.filter((_, i) => i !== index),
            },
        }));
    };

    const handleSelectCategory = (category: string) => {
        setValues((prevState) => ({
            ...prevState,
            category: category
        }));
    };

    const handleSelectTechnology = (techIndex: number, projectIdx: number) => {
        if (!technologies || !technologies.technologies[techIndex]) {
            return;
        }

        const selectedTech: ITechnology = technologies.technologies[techIndex];

        const isTechAlreadyAdded = values.projects.project[projectIdx].technology.some(
            tech => tech.name === selectedTech.name
        );

        if (!isTechAlreadyAdded) {
            setValues(prevValues => {
                const updatedProjects = prevValues.projects.project.map((project, idx) => {
                    if (idx === projectIdx) {
                        return {
                            ...project,
                            technology: [...project.technology, selectedTech],
                        };
                    }
                    return project;
                });

                return {
                    ...prevValues,
                    projects: {
                        ...prevValues.projects,
                        project: updatedProjects,
                    },
                };
            });
        }
    };

    const handleDeleteTechnology = (projectIndex: number, techIndex: number) => {
        const projectsCopy = { ...values.projects };
        const currentProjectTechnologies = projectsCopy.project[projectIndex]?.technology;

        if (currentProjectTechnologies) {
            const updatedTechnologies = currentProjectTechnologies.filter(
                (tech, index) => index !== techIndex
            );

            projectsCopy.project[projectIndex].technology = updatedTechnologies;

            setValues({ ...values, projects: projectsCopy });
        }
    };

    const getTextLengthWithoutTags = (htmlText: string) => {
        const textWithoutTags = htmlText.replace(/(<([^>]+)>)/ig, "");
        return textWithoutTags.length;
      };

    return (
        <Styles.AdminCvGrid>
            <div>
                <Styles.AdminImageSubTitle>Photo</Styles.AdminImageSubTitle>
                {!!errors.image && !values.image && (
                    <Styled.ImageErrorBox />
                )}
                <PhotoBlockDashed
                    photo={values.image}
                    deleteFlag={true}
                    uploadFunction={uploadImageFunc}
                    deleteFunction={deleteImageFunc}
                    header="Drop new image here"
                />
            </div>
            <div style={{ marginTop: 35, marginBottom: 35 }}>
                <CategoryDropdown
                    isError={!!errors.category && !values.category.length}
                    category={category?.categories}
                    cvCategory={values.category}
                    handleSelectCategory={handleSelectCategory}
                />
                <AdminBlockDropDown title="1 BLOCK">
                    <Styles.FieldsWrapper>
                        <SubHeaderWithInput
                            isError={!!errors.personal?.name && !values.personal.name}
                            inputValue={values.personal.name}
                            onChangeFunction={handleChange}
                            placeholder="NAME"
                            name="personal.name"
                            header="Name"
                        />
                        <SubHeaderWithInput
                            isError={!!errors.personal?.summary && !values.personal.summary}
                            inputValue={values.personal.summary}
                            onChangeFunction={handleChange}
                            placeholder="Text summary"
                            name="personal.summary"
                            header="Summary"
                            maxLength={190}
                        />
                        <Styled.BottomText className="portfolio-admin-description">
                            <Styled.TextCounter>
                                {values.personal.summary.length}/190
                            </Styled.TextCounter>
                        </Styled.BottomText>
                        <SubHeaderWithInput
                            isError={!!errors.personal?.role && !values.personal.role}
                            inputValue={values.personal.role}
                            onChangeFunction={handleChange}
                            name="personal.role"
                            placeholder="ex.: Full-stack developer"
                            header="Role"
                            maxLength={42}
                        />
                        <Styled.BottomText className="portfolio-admin-description">
                            <Styled.TextCounter>
                                {values.personal.role.length}/42
                            </Styled.TextCounter>
                        </Styled.BottomText>
                    </Styles.FieldsWrapper>
                </AdminBlockDropDown>
                <AdminBlockDropDown title="2 BLOCK (INFO)">
                    <Styles.FieldsWrapper>
                        <SubHeaderWithInput
                            isError={!!errors.info?.title && !values.info.title}
                            inputValue={values.info.title}
                            onChangeFunction={handleChange}
                            header="Title"
                            name="info.title"
                        />
                        {values?.info?.content?.map((item, idx) => (
                            <Styles.InfoGrid key={idx}>
                                <SubHeaderWithInput
                                    isError={!!errors?.info?.content?.[idx] && !item.subtitle}
                                    inputValue={item.subtitle}
                                    onChangeFunction={handleChange}
                                    header={`Subtitle ${idx + 1}`}
                                    name={`info.content[${idx}].subtitle`}
                                />
                                {idx === 0 ? (
                                    <div>
                                        <TextEditor
                                            header="Text"
                                            name={`info.content[${idx}].text`}
                                        />
                                        <Styled.BottomText className="portfolio-admin-description">
                                            <Styled.TextCounter>
                                                {getTextLengthWithoutTags(item.text)}/62
                                            </Styled.TextCounter>
                                        </Styled.BottomText>
                                        {errors?.info?.content?.[idx] && (
                                            <Styles.ErrorMsg>Field is not filled</Styles.ErrorMsg>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <SubHeaderWithInput
                                            isError={!!errors?.info?.content?.[idx] && !item.text}
                                            inputValue={item.text}
                                            onChangeFunction={handleChange}
                                            header="Text"
                                            name={`info.content[${idx}].text`}
                                            maxLength={62}
                                            placeholder={
                                                idx === 1 ? "Location (ex.: Warsaw, Poland)" :
                                                    idx === 2 ? "Level (ex.: Advanced)" :
                                                        idx === 3 ? "Years (ex.: 6+ years)" : ""
                                            }
                                        />
                                        <Styled.BottomText className="portfolio-admin-description">
                                            <Styled.TextCounter>
                                                {item.text.length}/62
                                            </Styled.TextCounter>
                                        </Styled.BottomText>
                                    </div>

                                )}
                            </Styles.InfoGrid>
                        ))}
                    </Styles.FieldsWrapper>
                </AdminBlockDropDown>
                <AdminBlockDropDown title="3 BLOCK (SKILLS)">
                    <Styles.FieldsWrapper>
                        <SubHeaderWithInput
                            isError={!!errors.skills?.title && !values.skills.title}
                            inputValue={values.skills.title}
                            onChangeFunction={handleChange}
                            header="Title"
                            name="skills.title"
                        />
                        {values?.skills?.card?.map((item, idx) => (
                            <Styles.CardWrapper key={idx}>
                                <SubHeaderWithInput
                                    isError={!!errors?.skills?.card?.[idx] && !values?.skills?.card[idx].subtitle && !values.skills.card.some((card) => !!card.subtitle?.trim())}
                                    inputValue={item.subtitle}
                                    onChangeFunction={handleChange}
                                    header={`${idx + 1} Card Subtitle`}
                                    name={`skills.card[${idx}].subtitle`}
                                />
                                <h2>Stack</h2>
                                <Styles.StackWrapper>
                                    {values?.skills?.card[idx]?.stack?.map((stack, stackIdx) => (
                                        <div key={stackIdx} style={{ display: "flex", flexDirection: "column" }}>
                                            <Styled.AdminCategoryNameInput
                                                value={stack}
                                                onChange={handleChange}
                                                name={`skills.card[${idx}].stack[${stackIdx}]`}
                                                placeholder="Text"
                                                className="cvSkills"
                                            />
                                            {stackIdx !== 0 ? (
                                                <Styles.DeleteStack onClick={() => handleDeleteStack(idx, stackIdx)}>
                                                    delete
                                                </Styles.DeleteStack>
                                            ) : null}
                                        </div>
                                    ))}
                                    <Styled.AdminCategoryAddBlockWrapper onClick={() => handleAddStack(idx)}>
                                        <Styled.AdminCategoryAddBlockBtn type="button">
                                            {"[ +add next ]"}
                                        </Styled.AdminCategoryAddBlockBtn>
                                    </Styled.AdminCategoryAddBlockWrapper>
                                </Styles.StackWrapper>
                            </Styles.CardWrapper>
                        ))}
                    </Styles.FieldsWrapper>
                </AdminBlockDropDown>
                <AdminBlockDropDown title="4 BLOCK (PROJECTS)">
                    <Styles.FieldsWrapper>
                        <SubHeaderWithInput
                            isError={!!errors.projects?.title && !values.projects.title}
                            inputValue={values.projects.title}
                            onChangeFunction={handleChange}
                            header="Title"
                            name="projects.title"
                        />
                        {values?.projects?.project?.map((project, idx) => (
                            <Styles.ProjectWrapper>
                                <Styles.ProjectNumberWrapper>
                                    <Styles.ProjectNumber>#{idx + 1}</Styles.ProjectNumber>
                                    {idx !== 0 ? (
                                        <div
                                            style={{ color: "red", fontSize: 14 }}
                                            onClick={() => handleDeleteProject(idx)}
                                        >
                                            delete project
                                        </div>
                                    ) : (
                                        null
                                    )}
                                </Styles.ProjectNumberWrapper>
                                <Styles.ProjectInfo>
                                    <Styles.FirstProjectInfoBlock>
                                        <SubHeaderWithInput
                                            isError={!!errors?.projects?.project?.[idx] && !project.projectName}
                                            inputValue={project.projectName}
                                            onChangeFunction={handleChange}
                                            header="Project name"
                                            name={`projects.project[${idx}].projectName`}
                                            placeholder="NAME"
                                        />
                                        <SubHeaderWithInput
                                            isError={!!errors?.projects?.project?.[idx] && !project.role}
                                            inputValue={project.role}
                                            onChangeFunction={handleChange}
                                            header="Role"
                                            name={`projects.project[${idx}].role`}
                                            placeholder="Role (ex.: Role: Full-stack developer)"
                                        />
                                        <SubHeaderWithInput
                                            isError={!!errors?.projects?.project?.[idx] && !project.date}
                                            inputValue={project.date}
                                            onChangeFunction={handleChange}
                                            header="Date"
                                            name={`projects.project[${idx}].date`}
                                            placeholder="Date (ex.: Aug `22 - Jan `23 • (6 months))"
                                        />
                                    </Styles.FirstProjectInfoBlock>
                                    <SubHeaderWithInput
                                        isError={!!errors?.projects?.project?.[idx] && !project.summary}
                                        inputValue={project.summary}
                                        onChangeFunction={handleChange}
                                        header="Summary"
                                        name={`projects.project[${idx}].summary`}
                                        placeholder="Text"
                                        maxLength={370}
                                    />
                                    <Styled.BottomText className="portfolio-admin-description">
                                        <Styled.TextCounter>
                                            {project.summary.length}/370
                                        </Styled.TextCounter>
                                    </Styled.BottomText>
                                    <Styles.LastProjectInfoBlock>
                                        <div>
                                            <h2>Achievements</h2>
                                            {values?.projects?.project[idx]?.achievements?.map((achievement, achievementIdx) => (
                                                <div>
                                                    <Styles.AchievementsGrid key={achievementIdx}>
                                                        <div>
                                                            <Styled.AdminCategoryNameInput
                                                                isError={!!errors?.projects?.project?.[idx] && !achievement}
                                                                value={achievement}
                                                                onChange={handleChange}
                                                                name={`projects.project[${idx}].achievements[${achievementIdx}]`}
                                                                className="cvAchievements"
                                                                placeholder="Add new achievements"
                                                                onFocus={() => setFocusedAchievementIdx(achievementIdx)}
                                                                onBlur={() => setFocusedAchievementIdx(-1)}
                                                                maxLength={94}
                                                            />
                                                            {achievementIdx === focusedAchievementIdx &&
                                                                <Styled.BottomText className="portfolio-admin-description">
                                                                    <Styled.TextCounter>
                                                                        {achievement.length}/94
                                                                    </Styled.TextCounter>
                                                                </Styled.BottomText>
                                                            }
                                                        </div>
                                                        {achievementIdx === 0 ? (
                                                            null
                                                        ) : (
                                                            <Styled.AdminCategoryDeleteBlockWrapper
                                                                onClick={() => handleDeleteAchievement(idx, achievementIdx)}
                                                                className="cvAchievement"
                                                            >
                                                                <TrashIcon />
                                                            </Styled.AdminCategoryDeleteBlockWrapper>
                                                        )}
                                                    </Styles.AchievementsGrid>
                                                    {achievementIdx === values.projects.project[idx].achievements.length - 1 ? (
                                                        <Styled.AdminCategoryAddBlockWrapper onClick={() => handleAddAchievement(idx)} className="cvAchievement">
                                                            <Styled.AdminCategoryAddBlockBtn type="button">
                                                                {"[ +add next ]"}
                                                            </Styled.AdminCategoryAddBlockBtn>
                                                        </Styled.AdminCategoryAddBlockWrapper>
                                                    ) : (null)}
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <h2>Technologies</h2>
                                            <TechnologyDropdown
                                                isError={!!errors?.projects?.project?.[idx] && !project.technology[idx]}
                                                technologies={technologies?.technologies}
                                                cvTechnologies={project.technology}
                                                handleSelectTechnology={handleSelectTechnology}
                                                projectIdx={idx}
                                                handleDeleteTechnology={handleDeleteTechnology}
                                            />
                                        </div>
                                    </Styles.LastProjectInfoBlock>
                                </Styles.ProjectInfo>
                            </Styles.ProjectWrapper>
                        ))}
                        <Styles.AddProjectBtn type="button" onClick={() => handleAddProject()}>
                            ADD PROJECT
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17.75 10.575H10.575V17.75H7.425V10.575H0.25V7.425H7.425V0.25H10.575V7.425H17.75V10.575Z" fill="#F1EFED" />
                            </svg>
                        </Styles.AddProjectBtn>
                    </Styles.FieldsWrapper>
                </AdminBlockDropDown>
                <BlackButton
                    size={"1.5em"}
                    padding={"1.11em 3em"}
                    style={{ marginTop: "1.33em" }}
                    onClick={() => handleClick()}
                >
                    Save Changes
                    <ArrowContainer>
                        <ButtonArrow />
                    </ArrowContainer>
                </BlackButton>
            </div>
        </Styles.AdminCvGrid>
    )
}

export default CvAddOrEdit;