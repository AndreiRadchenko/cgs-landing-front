import React from 'react';
import * as Styled from "../../styles/WebAuditService/HowTodoListItem.styled";
import Image from "next/image";
import HowToDoAuditImg from "../../../public/WebAuditServicePage/HowToDoAuditImg.svg";

interface Props {
    item: string;
    isLastItem: boolean;
}

const HowTodoListItem: React.FC<Props> = ({item, isLastItem}) => {
    return (
        <Styled.ListItem key={item}>
            <Styled.TextWrapper>
                <Styled.ImageWrapper>
                    <Image
                        src={HowToDoAuditImg}
                        alt="list check icon img"
                        layout="fill"
                        objectFit="contain"
                    />
                </Styled.ImageWrapper>
                <Styled.Text>{item}</Styled.Text>
            </Styled.TextWrapper>
            {isLastItem && <Styled.BottomLine />}
        </Styled.ListItem>
    );
};

export default HowTodoListItem;