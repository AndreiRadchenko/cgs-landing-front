import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import * as Styled from "../../styles/allYouNeed";
import * as UsefullStyled from "../../styles/usefullStyled";
import ListElement from "./ListElement";
import first from "../../../public/firstBlockchain.png";
import second from "../../../public/secondBlockchain.png";
import last from "../../../public/lastBlockchain.png";
import { services, techs } from "../../utils/text";

const half = Math.ceil(techs.length / 2);

const firstHalf = techs.slice(0, half);
const secondHalf = techs.slice(-half);

const AllYouNeed = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const blockRef = useRef(null);

  const onScroll = () => {
    const elTop = blockRef?.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY;
    if (elTop - 100 <= scrollY) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return window.removeEventListener("scroll", onScroll);
  }, []);

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
          <UsefullStyled.ImageWrapper
            ref={blockRef}
            isScrolled={isScrolled}
            className="first"
          >
            <Image src={first} alt="first block" />
          </UsefullStyled.ImageWrapper>
          <UsefullStyled.ImageWrapper>
            <Image src={second} alt="second block" />
          </UsefullStyled.ImageWrapper>
          <UsefullStyled.ImageWrapper isScrolled={isScrolled} className="last">
            <Image src={last} alt="last block" />
          </UsefullStyled.ImageWrapper>
        </Styled.ImagesGrid>
      </div>
    </UsefullStyled.TitlePlusContentBlock>
  );
};

export default AllYouNeed;
