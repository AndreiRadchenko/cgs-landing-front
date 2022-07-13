import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import Careers from "../../components/Careers";
import CareersForm from "../../components/CareersForm/index";
import { NextPage } from "next";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCareersService } from "../../services/adminCareersPage";
import { CareersProps } from "../../types/Admin/Admin.types";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import * as Styles from "../../styles/Careers.styled";
import { AdminUnauthorizedModal } from "../../styles/AdminPage";
import Arrow from "../../../public/arrowRight.svg";
import MagnifiedGlass from "../../../public/magnifiedGlass.svg";
import CareersTicket from "../../components/CareersTicket";

const CarrersPage: NextPage = () => {
  const { data, isLoading }: CareersProps = useQuery(
    queryKeys.getCareerPage,
    () => adminCareersService.getCareersPage()
  );
  const { metaTitle, metaDescription, customHead } = { ...data?.meta };
  const positions = data?.tickets?.length
    ? data.tickets.map(({ vacancy }) => vacancy)
    : [];

  return !isLoading ? (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Styles.CareersContainer>
        <Styles.Title>
          <Styles.TitleText>NEXT-GENERATION</Styles.TitleText>
          <Styles.TitleArrow src={Arrow.src} alt="test" />
          <Styles.TitleText>PROJECTS REQUIRE AN </Styles.TitleText>
          <Styles.TitleText>OUTSTANDING TEAM.</Styles.TitleText>
        </Styles.Title>
        <Styles.TicketsContainer>
          {data?.tickets.map(({ vacancy, image, _id }, idx) => (
            <CareersTicket
              vacancy={vacancy}
              imgUrl={image.url}
              route={true}
              id={_id}
              key={`${idx + (_id || "0000")}`}
            />
          ))}
        </Styles.TicketsContainer>
        <Styles.Separator />
        <Styles.FormTitle>
          &lt; Found your dream-job?
          <br />
          Let us discover you! &gt;
        </Styles.FormTitle>
        <Styles.FormContainer>
          <Styles.FormContainer3D />
          <Styles.Form>
            <CareersForm positions={positions} data={data} />
          </Styles.Form>
          <Styles.FormImage src={MagnifiedGlass.src} alt="Magnified Glass" />
        </Styles.FormContainer>
      </Styles.CareersContainer>
      <FooterNew />
    </>
  ) : (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  );
};

export default CarrersPage;
