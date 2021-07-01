import ReactCountryFlag from "react-country-flag";

import * as Styled from "./CountryFlag.styles";

const style = {
  width: "100%",
  height: "100%",
};

export interface CountryFlagProps {
  code: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ code }) => {
  return (
    <Styled.Container>
      <ReactCountryFlag svg countryCode={code} style={style} />
    </Styled.Container>
  );
};
