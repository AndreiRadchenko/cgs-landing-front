import React, {useRef} from 'react';
import * as Styled from '../../styles/WebAuditService/HowTodoDynamicMobileList.styles'
import HowTodoDynamicMobileListItem from "./HowTodoDynamicMobileListItem";
import {useOnScreen} from "../../hooks/useOnScreen";

interface Props {
    points: Array<string>;
}

const HowTodoDynamicMobileList: React.FC<Props> = ({points}) => {
    const elRef = useRef<HTMLDivElement>(null);
    const isScrolled = useOnScreen(elRef, true);

    const items = points.map((text, ind) => (
        <HowTodoDynamicMobileListItem key={text+'mobile'} ind={ind} text={text} isScrolled={isScrolled} />))

    return (
        <Styled.ListWrapper  ref={elRef}>
            {items}
        </Styled.ListWrapper>
    );
};

export default HowTodoDynamicMobileList;