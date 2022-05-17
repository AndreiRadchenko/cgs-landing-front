import Image from "next/image";
import React from "react";
import * as Styled from "../../styles/allYouNeed.styled";
import * as UsefullStyled from "../../styles/usefull.Styled";
import ListElement from "./ListElement";
import first from "../../../public/firstBlockchain.png";
import second from "../../../public/secondBlockchain.png";
import last from "../../../public/lastBlockchain.png";
import { services, techs } from "../../utils/text";

const half = Math.ceil(techs.length / 2);

const firstHalf = techs.slice(0, half);
const secondHalf = techs.slice(-half);

const AllYouNeed = () => {
  return (
    <UsefullStyled.TitlePlusContentBlock>
      <UsefullStyled.HeaderBig>all you need</UsefullStyled.HeaderBig>
      <div>
        <Styled.TechnologiesGrid>
          <div>
            <Styled.GreenSubheader>technologies:</Styled.GreenSubheader>
            <Styled.HalfGrid>
              <div>
                <Styled.GreenLineBlock>
                  <Styled.TechList>
                    {firstHalf.map((i, ind) => (
                      <ListElement text={i} key={`leftSideListElem${ind}`} />
                    ))}
                  </Styled.TechList>
                </Styled.GreenLineBlock>
              </div>
              <div>
                <Styled.GreenLineBlock>
                  <Styled.TechList>
                    {secondHalf.map((i, ind) => (
                      <ListElement text={i} key={`rightSideListElem${ind}`} />
                    ))}
                  </Styled.TechList>
                </Styled.GreenLineBlock>
              </div>
            </Styled.HalfGrid>
          </div>

          <div>
            <Styled.GreenSubheader>services:</Styled.GreenSubheader>
            <UsefullStyled.DefaultGrid>
              <Styled.GreenLineBlock>
                <Styled.TechList>
                  {services.map((i, ind) => (
                    <ListElement text={i} key={`servicesListElem${ind}`} />
                  ))}
                </Styled.TechList>
              </Styled.GreenLineBlock>
            </UsefullStyled.DefaultGrid>
          </div>
        </Styled.TechnologiesGrid>

        <Styled.ImagesGrid>
          <Image src={first} />
          <Image src={second} />
          <Image src={last} />
        </Styled.ImagesGrid>
      </div>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default AllYouNeed;
