import React, { useState } from "react";
import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";
import Content from "../../components/EstimationForm";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import EstimationPage from "../../components/EstimationForm/EstimationPage";
import ImageBackground from "../../components/EstimationForm/ImageBackground";

const EstimationsForm = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <Container>
      <HeaderNavNew />
      <ContainerDate>
        <HeaderText />
        <EstimationPage pageN={page} setPage={setPage} />
        <ImageBackground page={page} />
      </ContainerDate>
      <FooterNew />
    </Container>
  );
};

export default EstimationsForm;
