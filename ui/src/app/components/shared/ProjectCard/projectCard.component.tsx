import React from 'react';
import * as Styled from './projectCard.style';
import { technologiesImg } from './technologiesImg/importTechnologyImg';

interface ProjectImgStyle {
  img: string;
  width: string;
}

interface ProjectCardType {
  title: string;
  projectImg: ProjectImgStyle;
  technologies: Array<string>;
  background: string;
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardType> = ({   title,   projectImg,   technologies,   background,   children, }) => { 
  return (
    <Styled.CardWraper>
        <Styled.CardContainer style={{background:`${background}`}}>
                <Styled.CardHeader>
                    <div className={"title"}>
                        {title}
                    </div>
                    <div className={"description"}>
                        {children}
                    </div>
                </Styled.CardHeader>
                <Styled.ProjectImg>
                    <img style={{left:`${projectImg.width!=="100%"&&"25%"}`}}
                     width={`${projectImg.width!=="100%"?"50%":projectImg.width}`}
                    src={projectImg.img} alt="imgProject" />
                </Styled.ProjectImg>
                <Styled.CardTechnologies>
                    {technologies.map(technology=>{
                        return  <div className={"technology"} style={{width:`${100/technologies.length}%`}}>
                                    <div className={"Img"}>
                                        <img src={technologiesImg[technology]} width={"70%"} height={"70%"}/>
                                    </div>
                                    <div className="nameTechnology">
                                        {technology}
                                    </div>
                                </div>
                    })}
                </Styled.CardTechnologies>
        </Styled.CardContainer>
    </Styled.CardWraper >
  )

};

export default ProjectCard;