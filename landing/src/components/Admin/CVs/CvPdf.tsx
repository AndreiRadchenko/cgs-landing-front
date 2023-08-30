import React from "react";
import Image from "next/image";

import { SplitBrackets } from "../../../utils/splitBrackets";

import * as Styles from "../../../styles/AdminCvPdf.styled";

import { CvData } from "../../../types/Admin/AdminCv.types";

interface CvPdfProps {
    data: CvData;
}

const CvPdf = ({ data }: CvPdfProps) => {
    const cardsToShow = data.skills.card.filter((e) => e.subtitle !== "");

    const groupedProjects = [];
    for (let i = 0; i < data.projects.project.length; i += 2) {
        const pair = [
            data.projects.project[i],
            data.projects.project[i + 1]
        ];
        groupedProjects.push(pair);
    }

    return (
        <>
            <Styles.Wrapper className="project-wrapper">
                <Styles.HeadBlock>
                    <Styles.TextHeadBlock>
                        <Styles.Name>{data.personal.name}</Styles.Name>
                        <Styles.Role>{data.personal.role}</Styles.Role>
                        <Styles.Summary>{data.personal.summary}</Styles.Summary>
                    </Styles.TextHeadBlock>
                    <Styles.ImageWrapper>
                        <Image
                            src={data.image.url}
                            alt="cv img"
                            width={400}
                            height={400}
                            objectFit="contain"
                        />
                        <Styles.ImageBackground />
                    </Styles.ImageWrapper>
                </Styles.HeadBlock>
                <Styles.InfoBlock>
                    <Styles.InfoTitle><p>{data?.info?.title}</p></Styles.InfoTitle>
                    <Styles.InfoItemFlex>
                        {data?.info?.content?.map((item, idx) => (
                            <Styles.InfoCard key={idx}>
                                <Styles.InfoCardTitle>
                                    {item.subtitle}
                                    <Styles.InfoArrowContainer>
                                        <Styles.Line1>⎯</Styles.Line1>
                                        <Styles.Line2>⎯</Styles.Line2>
                                        <Styles.Line3>⎯</Styles.Line3>
                                    </Styles.InfoArrowContainer>
                                </Styles.InfoCardTitle>
                                <Styles.InfoText>{item.text.replace(/<\/?[^>]+(>|$)/g, "")}</Styles.InfoText>
                            </Styles.InfoCard>
                        ))}
                    </Styles.InfoItemFlex>
                </Styles.InfoBlock>
                <Styles.SkillsBlock>
                    <Styles.SkillsTitle>{data.skills.title}</Styles.SkillsTitle>
                    <Styles.SkillsCardWrapper>
                        {cardsToShow.map((item, idx) => (
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
            </Styles.Wrapper>
            {groupedProjects.map((pair, pairIdx) => (
                <div key={pairIdx} className="project-wrapper" style={{ paddingTop: 50 }}>
                    <Styles.ProjectsBlockTitle>{data.projects.title}</Styles.ProjectsBlockTitle>
                    {pair.map((project, i) => (
                        <Styles.ProjectsBlock key={i}>
                            <Styles.ProjectWrapper>
                                <Styles.ProjectNumberTitle>
                                    <Styles.ProjectNumber>{pairIdx * 2 + i + 1}</Styles.ProjectNumber>
                                    <Styles.ProjectTitleWrapper>
                                        <Styles.ProjectTitleContainer>
                                            <Styles.ProjectTitle>{project && project.projectName}</Styles.ProjectTitle>
                                            <Styles.ProjectDate>{project && project.date}</Styles.ProjectDate>
                                        </Styles.ProjectTitleContainer>
                                        <Styles.ProjectRole>Role: {project && project.role}</Styles.ProjectRole>
                                    </Styles.ProjectTitleWrapper>
                                </Styles.ProjectNumberTitle>
                                <Styles.ProjectAboutBlock>
                                    <Styles.ProjectAboutTitle>ABOUT PROJECT:</Styles.ProjectAboutTitle>
                                    <Styles.ProjectAboutText>
                                        <SplitBrackets text={project && project.summary} />
                                    </Styles.ProjectAboutText>
                                </Styles.ProjectAboutBlock>
                                <Styles.ProjectAchievementTechnologyWrapper>
                                    <Styles.ProjectAchievementWrapper>
                                        <Styles.ProjectAchievementTitle>Achievements:</Styles.ProjectAchievementTitle>
                                        <Styles.ProjectAchievementListWrapper>
                                            <Styles.ProjectAchievementList>
                                                {project && project.achievements.map((ac, acIdx) => (
                                                    <>
                                                        {acIdx < 6 ?
                                                            <Styles.ProjectAchievementItem key={acIdx}>
                                                                <Styles.ProjectAchievementListIcon>
                                                                    <Styles.AcLine1></Styles.AcLine1>
                                                                    <Styles.AcLine2></Styles.AcLine2>
                                                                </Styles.ProjectAchievementListIcon>
                                                                <Styles.ProjectAchievementListText>{ac}</Styles.ProjectAchievementListText>
                                                            </Styles.ProjectAchievementItem>
                                                            : null}
                                                    </>
                                                ))}
                                            </Styles.ProjectAchievementList>
                                            <Styles.ProjectAchievementListShadow />
                                        </Styles.ProjectAchievementListWrapper>
                                    </Styles.ProjectAchievementWrapper>
                                    <Styles.ProjectTechnologiesWrapper>
                                        <Styles.ProjectTechnologiesTitle>Technologies:</Styles.ProjectTechnologiesTitle>
                                        <Styles.ProjectTechnologiesIconContainer>
                                            {project && project.technology.map((tech, techIdx) => (
                                                <div key={techIdx} className="image">
                                                    <Image
                                                        src={tech.image.url}
                                                        alt="tech"
                                                        objectFit="contain"
                                                        width={100}
                                                        height={95}
                                                    />
                                                </div>
                                            ))}
                                        </Styles.ProjectTechnologiesIconContainer>
                                    </Styles.ProjectTechnologiesWrapper>
                                </Styles.ProjectAchievementTechnologyWrapper>
                            </Styles.ProjectWrapper>
                        </Styles.ProjectsBlock>
                    ))}
                </div>
            ))}
        </>
    )
}

export default CvPdf;