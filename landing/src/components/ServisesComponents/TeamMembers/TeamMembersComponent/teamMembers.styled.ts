import styled from "styled-components";
import themes from "../../../../utils/themes";

interface LastItem {
    lastItem: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: 768px) {
        display: inline-block;
    }

    @media (max-width: 400px) {
        margin: 60px 0;
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

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const ScrollList = styled.div`
    width: 42vw;
    height: 184px;
    position: relative;
    overflow-y: scroll;
    direction: rtl;

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #8F8E93;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #D9D9D9;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        margin-top: 35px;
        width: 97%;
        padding-left: 12px;
        height: 200px;
        direction: ltr;
    }

    @media (max-width: 475px) {
       margin-top: 20px
    }

    @media (max-width: 400px) {
        padding-left: 1px;
        height: 180px;
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
        margin-right: 30px;
    }

    @media (max-width: 1350px) {
        width: 95%;
        margin-right: 0;
    }

    @media (max-width: 768px) {
        width: 97%;
    }

    @media (max-width: 400px) {
        width: 32em;
        margin-left: 12px;
    }
`;

export const ScrollItem = styled.div<LastItem>`
    font-size: 20px;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 32px;
    border-top: 2px solid ${themes.primary.colors.lightGreyBorder};
    padding: 10px 0 8px 14px;
    border-bottom:   ${({ lastItem }) => lastItem ? '2px solid #D9D9D9' : 'none'};

    @media (max-width: 400px) {
        padding: 12px 0 12px 10px;
        font-size: 16px;
        line-height: 25.6px;
    }
`;