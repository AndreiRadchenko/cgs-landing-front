import styled from "styled-components";
import themes from "../../../../utils/themes";

interface LastItem {
    lastItem: boolean;
}

export const Wrapper = styled.div`
    margin-top: 12.4em;
    margin-bottom: 11.65em;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: block;
    }

    @media (max-width: 400px) {
        margin-top: 8.5em;
        margin-bottom: 8.5em;
    }
`;

export const TextContainer = styled.div`
    width: 50vw;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 3.4em;
    margin: 0;
    margin-bottom: 0.5em;
    text-transform: uppercase;
    line-height: 56px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
`;

export const Description = styled.div`
    font-size: 1.5em;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 28px;

    @media (max-width: 475px) {
        font-size: 18px;
    }
`;

export const ScrollList = styled.div`
    width: 44vw;
    height: 184px;
    position: relative;
    overflow-y: scroll;
    direction: rtl;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #8F8E93;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: #D9D9D9;
        border-radius: 5px;
    }

    scrollbar-color: #8F8E93 #D9D9D9;
    scrollbar-width: thin;

    @media (max-width: 768px) {
        margin-top: 35px;
        width: 97%;
        padding-left: 12px;
        height: 200px;
        direction: ltr;
    }

    @media (max-width: 475px) {
       margin-top: 20px;
       width: 105%;
       height: 150px;
       margin-left: -5%;
    }
`;

export const ScrollContainer = styled.div`
    margin-top: 5px;
    direction: ltr;

    @media (max-width: 2560px) {
        width: 95%;
    }

    @media (max-width: 1440px) {
        width: 44.3em;
        margin-right: 60px;
    }

    @media (max-width: 1350px) {
        width: 95%;
        margin-right: 0;
    }

    @media (max-width: 768px) {
        width: 97%;
    }

    @media (max-width: 766px) {
        width: 97%;
    }

    @media (max-width: 475px) {
        width: 95%;
        margin-top: 3px;
    }
`;

export const ScrollItem = styled.div<LastItem>`
    font-size: 20px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 32px;
    border-top: 1px solid rgb(192, 191, 192);
    padding: 11px 0 9px 14px;
    border-bottom:   ${({ lastItem }) => lastItem ? '1px solid rgb(192, 191, 192)' : 'none'};

    @media (max-width: 400px) {
        padding: 10px 0 8px 10px;
        font-size: 16px;
        line-height: 25.6px;
    }
`;