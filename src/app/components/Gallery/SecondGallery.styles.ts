import styled from "styled-components";

export const Container = styled("div")`
   display: block;
`;

export const Image = styled("div")`
    display: block;
    .image {
        width: 150px;
        height: 150px;
    }
    :nth-child(5) {
        display: none;
        background: red;
    }
`

export const Block = styled("div")`
    width: 150px;
    height: 150px;
`
