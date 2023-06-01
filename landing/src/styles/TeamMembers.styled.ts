import styled from "styled-components";
import themes from "../utils/themes";

interface LastItem {
    lastItem: boolean;
}

export const Wrapper = styled.div`
    width: 90vw;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: 768px) {
        display: inline-block;
        width: 100%;
    }
`;

export const TextContainer = styled.div`
    width: 50vw;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.div`
    font-size: 40px;
    margin-bottom: 30px;
    text-transform: uppercase;
    line-height: 56px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
`;

export const Description = styled.div`
    font-size: 18px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 28px;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const ScrollList = styled.div`
    width: 40vw;
    height: 200px;
    position: relative;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }

    @media (max-width: 768px) {
        margin-top: 35px;
        width: 90vw;
        height: 200px;
        padding-left: 20px;
    }

    @media (max-width: 475px) {
       width: 86vw;
    }
`;

export const StickyContainer = styled.div`
    position: relative;
    width: 0.5vw;
    margin-right: 30px;
    background-color: ${themes.primary.colors.lightGreyBorder};
    border-radius: 5px;
    height: 200px;

    @media (max-width: 768px) {
       position: absolute;
       width: 1vw;
       margin-top: 35px;
       right: 0;
    }

    @media (max-width: 475px) {
       width: 1.5vw;
    }
`;

export const StickyScroll = styled.div`
    position: sticky;
    background-color: #8F8E93;
    height: 30%;
    border-radius: 5px;
    top: 0;
`;


export const ScrollContainer = styled.div``;

export const ScrollItem = styled.div<LastItem>`
    font-size: 20px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 32px;
    border-top: 2px solid ${themes.primary.colors.lightGreyBorder};
    padding: 15px 0 15px 15px;
    border-bottom:   ${({ lastItem }) => lastItem ? '2px solid #D9D9D9' : 'none'};
`;