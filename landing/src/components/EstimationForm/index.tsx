import React from "react";
import { thirdPageImages } from "../../utils/imagesEstimationForm";
import IconBackground from "./IconBackground";
import { ButtonBlock } from "./index.styled";

import EstimationForm from "./EstimationForm";

const Content = () => {
  return (
    <ButtonBlock>
      {thirdPageImages.map((el) => (
        <IconBackground key={el.className} {...el} />
      ))}

      <EstimationForm />
    </ButtonBlock>
  );
};

export default Content;
