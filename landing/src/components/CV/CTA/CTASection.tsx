import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import { adminCvService } from "../../../services/adminCvPage";
import GetEstimationButton from "../../GetEstimationButton";
import ScrambleText from "../../HomePage/ScrambleText";

import * as Styled from "./CTASection.styled";
import * as Style from "../List/ListItem/ListItem.styled";
import * as Styles from "../../../styles/AdminCvPage";
import { queryKeys } from "../../../consts/queryKeys";
import { ICvResponse } from "../../../types/Admin/AdminCv.types";
import rightArrow from "../../../../public/CV/cta-right-arrow.svg";
import rightArrowMobile from "../../../../public/CV/cta-right-arrow_mobile.svg";
import Loading from "../../../../public/CareerDecorations/loading.svg";

export const CTASection = ({ name }: { name: string }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [pdfLoad, setPdfLoad] = useState(false);

  const { data }: ICvResponse = useQuery([queryKeys.getCvPage], () =>
    adminCvService.getCvPage()
  );

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 24, 14)")
      ) {
        return (
          <>
            <Styled.CTAArrowWrapper>
              <Image
                src={isMobile ? rightArrowMobile.src : rightArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Styled.CTAArrowWrapper>
            <br />
          </>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      }
    },
  };

  const handleClick = () => {
    const fullURL = `${window.location.origin}${router.asPath}`;

    setPdfLoad(true);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/devs-info/cv/pdf?link=${fullURL}`,
        {
          responseType: "arraybuffer",
          onDownloadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            if (percentCompleted === 100) {
              setPdfLoad(false);
            }
          },
        }
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `cv-${name.toLowerCase().replace(/\s+/g, "-")}.pdf`;
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading the PDF", error);
        setPdfLoad(false);
      });
  };

  return (
    <Styled.CTAWrapper className="cv-cta-wrapper">
      {data && (
        <>
          <Styled.CTATitle>
            {data.cta && parse(data.cta.title, options)}
          </Styled.CTATitle>

          <Styled.CTAButtonWrapper>
            <GetEstimationButton
              buttonLink={data.cta.buttonLink}
              buttonText={data.cta.buttonText}
              withEstimation
              buttonClassName="homepage"
            />
            <Styled.PDFWrapper>
              {!pdfLoad ? (
                <Style.ListItemPDF
                  className="download-text"
                  onClick={handleClick}
                >
                  Get CV as PDF
                </Style.ListItemPDF>
              ) : (
                <Styles.Loader
                  src={Loading.src}
                  className="cv"
                  alt="pdf loader"
                />
              )}
            </Styled.PDFWrapper>
          </Styled.CTAButtonWrapper>
        </>
      )}
    </Styled.CTAWrapper>
  );
};
