import React, { useState } from "react";
import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";

import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import EstimationPage from "../../components/EstimationForm/EstimationPage";
import ImageBackground from "../../components/EstimationForm/ImageBackground";
import { IFormData } from "../../types/EstimationForm.types";

const EstimationsForm = () => {
  const [page, setPage] = useState<number>(1);

  const [formData, setFormData] = useState<IFormData>({
    formTitle: "TEST123",
    clientName: "",
    clientEmail: "",
    clientAnswers: [],
  });

  console.log(formData);
  return (
    <Container>
      <HeaderNavNew />
      <ContainerDate>
        <HeaderText />
        <EstimationPage
          formData={formData}
          setFormData={setFormData}
          pageN={page}
          setPage={setPage}
        />
        <ImageBackground page={page} />
      </ContainerDate>
      <FooterNew />
    </Container>
  );
};

export default EstimationsForm;
