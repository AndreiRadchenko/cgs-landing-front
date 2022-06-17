import * as React from "react";
import styled from "styled-components";
import themes from "../../utils/themes";

const ArrowWrapper = styled.div`
  border: 0.125rem solid ${themes.primary.colors.primary};
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
        d="M16.62 1.784A1 1 0 1 0 15.38.216l1.24 1.568ZM.11 12.677a1 1 0 0 0 .878 1.109l8.94 1.04a1 1 0 1 0 .23-1.987l-7.946-.925.925-7.946a1 1 0 0 0-1.987-.231l-1.04 8.94ZM15.379.216.482 12.008l1.24 1.568L16.622 1.784 15.379.216Z"
        fill="#000"
      />
    </svg>
  </ArrowWrapper>
);

export default SvgComponent;
