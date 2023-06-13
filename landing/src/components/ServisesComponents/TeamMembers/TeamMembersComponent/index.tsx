import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./teamMembers.styled";
import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";
import { ITeamMembers } from "../../../../types/ServicesComponent.types";

interface ITeamMembersProps {
  teamMembers?: ITeamMembers;
  className?: string;
}

const TeamMembers = ({ teamMembers, className }: ITeamMembersProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ScrollListRef = useRef<HTMLDivElement>(null);

  const { title, description, members, selectedMembers } = teamMembers ?? {
    title: "",
    description: "",
    members: [{ id: "", member: "" }],
    selectedMembers: [{ id: "", member: "" }],
  };

  useEffect(() => {
    const is768px = window.matchMedia("(max-width: 768px)").matches;
    if (is768px) {
      const is400px = window.matchMedia("(max-width: 400px)").matches;

      const handleScroll = () => {
        if (ScrollListRef.current) {
          const scrollTop = ScrollListRef.current.scrollTop;
          const maxScrollHeight =
            ScrollListRef.current.scrollHeight -
            ScrollListRef.current.clientHeight;
          const scrollPercentage = (scrollTop / maxScrollHeight) * 100;
          const maxTop = is400px ? 110 : 128;
          const calculatedTop = Math.min(
            scrollPercentage * (maxTop / 100),
            maxTop
          );
          setScrollPosition(calculatedTop);
        }
      };

      if (ScrollListRef.current) {
        ScrollListRef.current.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (ScrollListRef.current) {
          ScrollListRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    } else {
      const handleScroll = () => {
        if (wrapperRef.current) {
          const scrollTop = wrapperRef.current.scrollTop;
          const maxScrollHeight =
            wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight;
          const scrollPercentage = (scrollTop / maxScrollHeight) * 100;
          const maxTop = 128;
          const calculatedTop = Math.min(
            scrollPercentage * (maxTop / 100),
            maxTop
          );
          setScrollPosition(calculatedTop);
        }
      };

      if (wrapperRef.current) {
        wrapperRef.current.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (wrapperRef.current) {
          wrapperRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <>
      <MobileInfiniteText title={title} />
      <Styled.Wrapper ref={wrapperRef} className={className}>
        <Styled.TextContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
        </Styled.TextContainer>
        <Styled.ScrollbarContainer>
          <Styled.Scrollbar top={scrollPosition}></Styled.Scrollbar>
        </Styled.ScrollbarContainer>
        <Styled.ScrollList ref={ScrollListRef}>
          {selectedMembers?.map(({ id, member }, index) => (
            <Styled.ScrollContainer key={id}>
              <Styled.ScrollItem
                lastItem={index === selectedMembers.length - 1}
              >
                {member}
              </Styled.ScrollItem>
            </Styled.ScrollContainer>
          ))}
        </Styled.ScrollList>
      </Styled.Wrapper>
    </>
  );
};

export default TeamMembers;
