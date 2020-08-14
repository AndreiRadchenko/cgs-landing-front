import React from 'react';
import * as Styled from './projectCard.style';
import { technologiesImg } from './technologiesImg/importTechnologyImg';
import { ProjectCardType } from '../../../../types/components/index';

const ProjectCard: React.FC<ProjectCardType> = ({
  title,
  projectImg,
  technologies,
  background,
  children,
}) => {
  return (
    <Styled.CardWraper>
      <Styled.CardContainer style={{ background: `${background}` }}>
        <Styled.CardHeader>
          <div className={'title'}>{title}</div>
          <div className={'description'}>{children}</div>
        </Styled.CardHeader>
        <Styled.ProjectImg
          style={{
            left: `${projectImg.width !== '100%' && '25%'}`,
            width: `${projectImg.width !== '100%' && '50%'}`,
          }}
        >
          <img
            width={`${projectImg.width !== '100%' ? '50%' : projectImg.width}`}
            src={projectImg.img}
            alt="img-project"
          />
        </Styled.ProjectImg>
        <Styled.CardTechnologies>
          {technologies.map(technology => {
            return (
              <div
                className={'technology'}
                style={{ width: `${100 / technologies.length}%` }}
              >
                <div className={'technology-img'}>
                  <img
                    src={technologiesImg[technology]}
                    width={'70%'}
                    height={'70%'}
                  />
                </div>
                <div className="technology-name">{technology}</div>
              </div>
            );
          })}
        </Styled.CardTechnologies>
      </Styled.CardContainer>
    </Styled.CardWraper>
  );
};

export default ProjectCard;
