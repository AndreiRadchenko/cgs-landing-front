import styled from "styled-components";

export const Wrapper = styled("div")``

export const ImgAfterTitle = styled("img")`
    display: block;
    width: 80%;
	max-height: 400px;
`

export const ImgAfterBenefits = styled("img")`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-top: 0px;
    @media screen and (max-width: 1023.5px) {
        display: none;
    }
`

export const StepToEarn = styled("div")`
    position: relative;
    @media screen and (max-width: 1023.5px) {
        position: static;
    }
`;
