import React from 'react';
import * as Styled from "../../styles/WebAuditService/HowTodoList.styled";
import HowTodoListItem from "./HowTodoListItem";

interface Props {
    data: Array<string>;
}

const HowTodoList: React.FC<Props> = ({data}) => {

    const mappedItems = data &&
        data.map((item, idx) => <HowTodoListItem key={idx+item+'desk'} item={item} isLastItem={idx !== data.length - 1}/>)

    return (
        <Styled.ListWrapper>
            <Styled.ContentWrapper >
        { mappedItems }
            </Styled.ContentWrapper>
    <Styled.Shadow>
        <Styled.TopCorner />
        <Styled.BottomCorner />
    </Styled.Shadow>
</Styled.ListWrapper>
    );
};

export default HowTodoList;