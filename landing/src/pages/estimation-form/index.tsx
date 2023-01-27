import React from "react";
import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";
import Content from "../../components/EstimationForm";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";

const EstimationsForm = () => {
  return (
    <Container>
      <HeaderNavNew />
      <ContainerDate>
        <HeaderText />
        <Content />
      </ContainerDate>

      <FooterNew />
    </Container>
  );
};

export default EstimationsForm;
