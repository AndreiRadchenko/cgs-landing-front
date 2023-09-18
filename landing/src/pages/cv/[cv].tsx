import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { adminCvService } from "../../services/adminCvPage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { CTASection } from "../../components/CV/CTA/CTASection";
import FooterNew from "../../components/FooterNew/FooterNew";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";

import {
  Personal,
  InfoSection,
  Skills,
  ProjectsSection,
} from "../../components/CV";

import * as Styled from "../../styles/CV/CV.styled";
import { CvData } from "../../types/Admin/AdminCv.types";
import { queryKeys } from "../../consts/queryKeys";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

export interface ICvResponse {
  data: CvData | undefined;
  isLoading: boolean;
  refetch: () => Promise<ICvResponse>;
}

const CV = () => {
  const router = useRouter();
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  const { cv } = router.query;
  const slug = cv?.slice(-24);

  const { data }: ICvResponse = useQuery(
    [queryKeys.getCvById, slug],
    async () => await adminCvService.getCvById(slug as string),
    { enabled: !!slug }
  );

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  return (
    <>
      {data && (
        <>
          {isCalendlySuccessfull && (
            <CalendlyInfoModal
              isOpen={isCalendlySuccessfull}
              setIsCalendlySuccessfull={setIsCalendlySuccessfull}
            />
          )}
          <HeaderNavNew />
          <Styled.CvLayout>
            <Personal data={data} />
            <InfoSection data={data} />
            <Skills data={data} />
            <ProjectsSection data={data} />
            <CTASection name={data.personal.name} />
          </Styled.CvLayout>
          <FooterNew />
        </>
      )}
    </>
  );
};

export default CV;
