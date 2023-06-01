import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import * as Styled from "../../styles/TeamMembers.styled";
import { TeamMembersProps } from "../../types/Admin/Admin.types";
import { queryKeys } from "../../consts/queryKeys";
import { adminTeamMembers } from "../../services/adminTeamMembers";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import useMediaQuery from "@mui/material/useMediaQuery";

const TeamMembers = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const stickyScrollRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMediaQuery("(max-width:768px)");

    const { data }: TeamMembersProps = useQuery(
        [queryKeys.GetTeamMembers],
        () => adminTeamMembers.getTeamMembers()
    );

    const title = data?.title;
    const description = data?.description;
    const members = data?.selectedMembers;

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = scrollContainerRef.current;
            const stickyScroll = stickyScrollRef.current;

            if (scrollContainer && stickyScroll) {
                const { scrollTop } = scrollContainer;

                const firstElement = scrollContainer.firstChild as HTMLElement;
                const lastElement = scrollContainer.lastChild as HTMLElement;

                if (firstElement && lastElement) {
                    const firstElementTop = firstElement.offsetTop;
                    const lastElementTop = lastElement.offsetTop;

                    const scrollableDistance = lastElementTop - firstElementTop;
                    const scrollPosition = Math.max(scrollTop - firstElementTop, 0);

                    const scrollPercentage = (scrollPosition / scrollableDistance) * 100;

                    stickyScroll.style.top = `${scrollPercentage}%`;
                };
            };
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        };

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, [members]);

    return (
        <Styled.Wrapper>
            <Styled.TextContainer>
                {!isMobile ? (
                    <Styled.Title>{title}</Styled.Title>
                ) : (
                    <MobileInfiniteText title={title} />
                )}
                <Styled.Description>{description}</Styled.Description>
            </Styled.TextContainer>
            <Styled.StickyContainer>
                <Styled.StickyScroll ref={stickyScrollRef} />
            </Styled.StickyContainer>
            <Styled.ScrollList ref={scrollContainerRef}>
                {data?.selectedMembers.map(({ member, id }, index) => (
                    <Styled.ScrollContainer key={id}>
                        <Styled.ScrollItem lastItem={index === data.selectedMembers.length - 1}>{member}</Styled.ScrollItem>
                    </Styled.ScrollContainer>
                ))}
            </Styled.ScrollList>
        </Styled.Wrapper>
    );
};

export default TeamMembers;