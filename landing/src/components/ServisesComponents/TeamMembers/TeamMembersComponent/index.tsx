import React from "react";
import * as Styled from "./teamMembers.styled";
import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ITeamMembers } from "../../../../types/ServicesComponent.types";

interface ITeamMembersProps {
    teamMembers?: ITeamMembers;
}

const TeamMembers = ({ teamMembers }: ITeamMembersProps) => {
    const isMobile = useMediaQuery("(max-width:768px)");

    const { title, description, members, selectedMembers } = teamMembers ?? {
        title: "",
        description: "",
        members: [{ id: "", member: "" }],
        selectedMembers: [{ id: "", member: "" }],
    };

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
            <Styled.ScrollList>
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
    );
};

export default TeamMembers;