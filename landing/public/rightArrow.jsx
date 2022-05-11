import * as React from "react";
import styled from "styled-components";
import themes from "../src/utils/themes";

const ArrowWrapper = styled.div`
  border: 0.125rem solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0.688rem;
`;

const SvgComponent = (props) => (
  <ArrowWrapper>
    <svg
      width={17}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.37 13.224a1 1 0 1 0 1.26 1.552L.37 13.224ZM16.74 2.12a1 1 0 0 0-.893-1.098L6.895.097a1 1 0 0 0-.206 1.99l7.958.822-.822 7.957a1 1 0 1 0 1.99.206l.924-8.952ZM1.63 14.776 16.376 2.793 15.114 1.24.369 13.224l1.262 1.552Z"
        fill="#fff"
      />
    </svg>
  </ArrowWrapper>
);

export default SvgComponent;
