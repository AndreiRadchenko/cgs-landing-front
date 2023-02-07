import React, { useEffect, useState } from "react";
import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";

import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import EstimationPage from "../../components/EstimationForm/EstimationPage";
import ImageBackground from "../../components/EstimationForm/ImageBackground";
import { IFormData, IFormFileData } from "../../types/EstimationForm.types";
import EstimationCongratsModal from "../../components/EstimationForm/EstimationCongratsModal";
import EstimationFailModal from "../../components/EstimationForm/EstimationFailModal";
import { useRouter } from "next/router";

const EstimationsForm = () => {
  const [page, setPage] = useState<number>(1);
  const [attachFiles, setAttachFiles] = useState<IFormFileData[]>([]);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openFailedModal, setOpenFailedModal] = useState(false);

  const [formData, setFormData] = useState<IFormData>({
    formTitle: "Estimation Form",
    clientName: "",
    clientEmail: "",
    clientAnswers: [],
  });

  const router = useRouter();

  /*useEffect(() => {
    const exitingFunction = () => {
      setOpenFailedModal(true);
      return;
      console.log("exiting...");

      throw "cancelRouteChange";
    };

    router.events.on("routeChangeStart", exitingFunction);

    return () => {
      console.log("unmounting component...");
      router.events.off("routeChangeStart", exitingFunction);
    };
  }, []);*/

  return (
    <Container>
      <HeaderNavNew />
      <ContainerDate>
        {openSuccessModal && <EstimationCongratsModal />}
        {openFailedModal && <EstimationFailModal />}
        <HeaderText />
        <EstimationPage
          setOpenSuccessModal={setOpenSuccessModal}
          attachFiles={attachFiles}
          setAttachFiles={setAttachFiles}
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
