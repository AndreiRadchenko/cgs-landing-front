import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { StyledSpinner } from "../../components/Loader/Loader.styled";

import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";
import * as Styled from "../../styles/AdminPage";

import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import EstimationPage from "../../components/EstimationForm/EstimationPage";
import ImageBackground from "../../components/EstimationForm/ImageBackground";
import { IFormData, IFormFileData } from "../../types/EstimationForm.types";
import EstimationCongratsModal from "../../components/EstimationForm/EstimationCongratsModal";
import EstimationFailModal from "../../components/EstimationForm/EstimationFailModal";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminEstimationFormService } from "../../services/adminEstimationForm";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const EstimationsForm = () => {
  const router = useRouter();

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

  const { data, isLoading } = useQuery(
    [queryKeys.getEstimationFormData, page],
    () => adminEstimationFormService.getPageData(page.toString())
  );

  useEffect(() => {
    const handleBrowseAway = () => {
      setOpenFailedModal(true);
      router.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };

    router.events.on("routeChangeStart", handleBrowseAway);
    return () => {
      router.events.off("routeChangeStart", handleBrowseAway);
    };
  }, []);
  useEffect(() => {
    if (openSuccessModal || openFailedModal)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [openSuccessModal, openFailedModal]);

  return (
    <LoadingOverlay active={isLoading} spinner={<StyledSpinner />}>
      {isLoading ? null : (
        <Container>
          <HeaderNavNew
            clickFromEstimationForm={true}
            setOpenFailedModal={setOpenFailedModal}
          />
          <ContainerDate>
            {openSuccessModal && <EstimationCongratsModal />}
            {openFailedModal && (
              <EstimationFailModal setOpenFailedModal={setOpenFailedModal} />
            )}
            <HeaderText />
            <EstimationPage
              setOpenSuccessModal={setOpenSuccessModal}
              attachFiles={attachFiles}
              setAttachFiles={setAttachFiles}
              formData={formData}
              setFormData={setFormData}
              pageN={page}
              setPage={setPage}
              data={data!}
            />
            <ImageBackground page={page} />
          </ContainerDate>
          <FooterNew
            clickFromEstimationForm={true}
            setOpenFailedModal={setOpenFailedModal}
          />
        </Container>
      )}
    </LoadingOverlay>
  );
};

export default EstimationsForm;
