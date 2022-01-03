import Image from "next/image";

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
      <Image
        src={"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/"+ code.toLowerCase() +".svg"}
        width= "200"
        height= "150"
      />
    </Styled.Container>
  );
};
