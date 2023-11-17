import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { Loader, LoaderStub } from "../../components/Loader";
import { HeaderText } from "../../components/EstimationForm/HeaderText";
import {
  Container,
  ContainerDate,
} from "../../components/EstimationForm/index.styled";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import EstimationPage from "../../components/EstimationForm/EstimationPage";
import ImageBackground from "../../components/EstimationForm/ImageBackground";
import EstimationCongratsModal from "../../components/EstimationForm/EstimationCongratsModal";
import EstimationFailModal from "../../components/EstimationForm/EstimationFailModal";

import { IFormData, IFormFileData } from "../../types/EstimationForm.types";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminEstimationFormService } from "../../services/adminEstimationForm";
import { IEstimationFormPagesResponse } from "../../types/Admin/AdminEstimationForm.types";

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
  const [link, setLink] = useState<string>("");

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
  const { data: estimationData }: IEstimationFormPagesResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPages()
  );

  useEffect(() => {
    const handleBrowseAway = (url: string) => {
      setLink(url);
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
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <Container>
          <HeaderNavNew
            setLink={setLink}
            clickFromEstimationForm={true}
            setOpenFailedModal={setOpenFailedModal}
          />
          <ContainerDate>
            {openSuccessModal && <EstimationCongratsModal />}
            {openFailedModal && (
              <EstimationFailModal
                link={link}
                setOpenFailedModal={setOpenFailedModal}
              />
            )}
            {estimationData && <HeaderText title={estimationData?.title} />}
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
    </Loader>
  );
};

export default EstimationsForm;
