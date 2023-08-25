import React from "react";
import Image from "next/image";
import { CvData } from "../../../types/Admin/AdminCv.types";
import * as Styles from "../../../styles/AdminCvPdf.styled";
import Arrow from "../../../../public/CV/02.svg";
// import achievement from "../../../../../public/CV/achievement.svg";
import { SplitBrackets } from "../../../utils/splitBrackets";


interface CvPdfProps {
    data: CvData;
}

const CvPdf = ({ data }: CvPdfProps) => {
    return (
        <Styles.Wrapper>
            <Styles.HeadBlock>
                <Styles.TextHeadBlock>
                    <Styles.Name>{data.personal.name}</Styles.Name>
                    <Styles.Role>{data.personal.role}</Styles.Role>
                    <Styles.Summary>{data.personal.summary}</Styles.Summary>
                </Styles.TextHeadBlock>
                {/* <Styles.ImageWrapper> */}
                    <Image
                        src="https://icons.iconarchive.com/icons/toma4025/rumax/256/camera-icon.png"
                        alt="cv img"
                        // crossOrigin="anonymous"
                        width={400}
                        height={400}
                        objectFit="contain"
                    />
                    {/* <Styles.ImageBackground /> */}
                {/* </Styles.ImageWrapper> */}
            </Styles.HeadBlock>
            <Styles.InfoBlock>
                <Styles.InfoTitle><p>{data?.info?.title}</p></Styles.InfoTitle>
                <Styles.InfoItemFlex>
                    {data?.info?.content?.map((item, idx) => (
                        <Styles.InfoCard key={idx}>
                            <Styles.InfoCardTitle>
                                {item.subtitle}
                            </Styles.InfoCardTitle>
                            <Styles.InfoText>{item.text.replace(/<\/?[^>]+(>|$)/g, "")}</Styles.InfoText>
                        </Styles.InfoCard>
                    ))}
                </Styles.InfoItemFlex>
            </Styles.InfoBlock>
            <Styles.SkillsBlock>
                <Styles.SkillsTitle>{data.skills.title}</Styles.SkillsTitle>
                <Styles.SkillsCardWrapper>
                    {data.skills.card.map((item, idx) => (
                        <Styles.SkillsCard key={idx}>
                            <Styles.SkillsCardTitle>{item.subtitle}</Styles.SkillsCardTitle>
                            {item.stack.map((stack, stackIdx) => (
                                <Styles.SkillsCardStack key={stackIdx}>
                                    <Styles.SkillsCardStackText>{stack}</Styles.SkillsCardStackText>
                                </Styles.SkillsCardStack>
                            ))}
                        </Styles.SkillsCard>
                    ))}
                </Styles.SkillsCardWrapper>
            </Styles.SkillsBlock>
            <Styles.ProjectsBlock>
                <Styles.ProjectsBlockTitle>{data.projects.title}</Styles.ProjectsBlockTitle>
                {data.projects.project.map((project, i) => (
                    <Styles.ProjectWrapper key={i}>
                        <Styles.ProjectNumberTitle>
                            <Styles.ProjectNumber>{i + 1}</Styles.ProjectNumber>
                            <Styles.ProjectTitleWrapper>
                                <Styles.ProjectTitleContainer>
                                    <Styles.ProjectTitle>{project.projectName}</Styles.ProjectTitle>
                                    <Styles.ProjectDate>{project.date}</Styles.ProjectDate>
                                </Styles.ProjectTitleContainer>
                                <Styles.ProjectRole>Role: {project.role}</Styles.ProjectRole>
                            </Styles.ProjectTitleWrapper>
                        </Styles.ProjectNumberTitle>
                        <Styles.ProjectAboutBlock>
                            <Styles.ProjectAboutTitle>ABOUT PROJECT:</Styles.ProjectAboutTitle>
                            <Styles.ProjectAboutText>
                                <SplitBrackets text={project.summary}/>
                            </Styles.ProjectAboutText>
                        </Styles.ProjectAboutBlock>
                        <Styles.ProjectAchievementTechnologyWrapper>
                            <Styles.ProjectAchievementListWrapper>
                                <Styles.ProjectAchievementTitle>Achievements:</Styles.ProjectAchievementTitle>
                                <Styles.ProjectAchievementListWrapper>
                                    <Styles.ProjectAchievementList>
                                        {project.achievements.map((ac, acIdx) => (
                                            <Styles.ProjectAchievementItem key={acIdx}>
                                                {/* <Styles.ProjectAchievementListIcon 
                                                    src={achievement}
                                                    alt="checkbox done"
                                                /> */}
                                                <Styles.ProjectAchievementListText>{ac}</Styles.ProjectAchievementListText>
                                            </Styles.ProjectAchievementItem>
                                        ))}
                                    </Styles.ProjectAchievementList>
                                    <Styles.ProjectAchievementListShadow />
                                </Styles.ProjectAchievementListWrapper>
                            </Styles.ProjectAchievementListWrapper>
                            <Styles.ProjectTechnologiesWrapper>
                                <Styles.ProjectTechnologiesTitle>Technologies:</Styles.ProjectTechnologiesTitle>
                                {/* <Styles.ProjectTechnologiesIconContainer>
                                    {project.technology.map((tech, techIdx) => (
                                        <div key={techIdx}>
                                            <img 
                                            src={tech?.image?.url ? tech.image.url : ""}
                                            alt="tech"
                                            />
                                        </div>
                                    ))}
                                </Styles.ProjectTechnologiesIconContainer> */}
                            </Styles.ProjectTechnologiesWrapper>
                        </Styles.ProjectAchievementTechnologyWrapper>
                    </Styles.ProjectWrapper>
                ))}
            </Styles.ProjectsBlock>
            <Styles.ProjectsBlock>
                <Styles.ProjectsBlockTitle>{data.projects.title}</Styles.ProjectsBlockTitle>
                {data.projects.project.map((project, i) => (
                    <Styles.ProjectWrapper key={i}>
                        <Styles.ProjectNumberTitle>
                            <Styles.ProjectNumber>{i + 1}</Styles.ProjectNumber>
                            <Styles.ProjectTitleWrapper>
                                <Styles.ProjectTitleContainer>
                                    <Styles.ProjectTitle>{project.projectName}</Styles.ProjectTitle>
                                    <Styles.ProjectDate>{project.date}</Styles.ProjectDate>
                                </Styles.ProjectTitleContainer>
                                <Styles.ProjectRole>Role: {project.role}</Styles.ProjectRole>
                            </Styles.ProjectTitleWrapper>
                        </Styles.ProjectNumberTitle>
                        <Styles.ProjectAboutBlock>
                            <Styles.ProjectAboutTitle>ABOUT PROJECT:</Styles.ProjectAboutTitle>
                            <Styles.ProjectAboutText>
                                <SplitBrackets text={project.summary}/>
                            </Styles.ProjectAboutText>
                        </Styles.ProjectAboutBlock>
                        <Styles.ProjectAchievementTechnologyWrapper>
                            <Styles.ProjectAchievementListWrapper>
                                <Styles.ProjectAchievementTitle>Achievements:</Styles.ProjectAchievementTitle>
                                <Styles.ProjectAchievementListWrapper>
                                    <Styles.ProjectAchievementList>
                                        {project.achievements.map((ac, acIdx) => (
                                            <Styles.ProjectAchievementItem key={acIdx}>
                                                {/* <Styles.ProjectAchievementListIcon 
                                                    src={achievement}
                                                    alt="checkbox done"
                                                /> */}
                                                <Styles.ProjectAchievementListText>{ac}</Styles.ProjectAchievementListText>
                                            </Styles.ProjectAchievementItem>
                                        ))}
                                    </Styles.ProjectAchievementList>
                                    <Styles.ProjectAchievementListShadow />
                                </Styles.ProjectAchievementListWrapper>
                            </Styles.ProjectAchievementListWrapper>
                            <Styles.ProjectTechnologiesWrapper>
                                <Styles.ProjectTechnologiesTitle>Technologies:</Styles.ProjectTechnologiesTitle>
                                <Styles.ProjectTechnologiesIconContainer>
                                    {project.technology.map((tech, techIdx) => (
                                        <div key={techIdx}>
                                            <img 
                                            src={tech?.image?.url ? tech.image.url : ""}
                                            alt="tech"
                                            />
                                        </div>
                                    ))}
                                </Styles.ProjectTechnologiesIconContainer>
                            </Styles.ProjectTechnologiesWrapper>
                        </Styles.ProjectAchievementTechnologyWrapper>
                    </Styles.ProjectWrapper>
                ))}
            </Styles.ProjectsBlock>
        </Styles.Wrapper>
    )
}

export default CvPdf;