import React, { useRef, useState } from "react";
import axios from "axios";

import ButtonArrow from "../../../../utils/ButtonArrow";

import * as Styles from "../../../../styles/AdminCvPage";
import * as Styled from "./ListItem.styled";
import Loading from "../../../../../public/CareerDecorations/loading.svg";

import { CvData } from "../../../../types/Admin/AdminCv.types";

interface ListItemProps {
  item: CvData;
  i: number;
}

export const ListItem = ({ item, i }: ListItemProps) => {
  const [onHover, setOnHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [pdfLoad, setPdfLoad] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleClick = () => {
    if (linkRef.current) {
      const fullURL = linkRef.current.href;
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
          link.download = `cv-${item.personal.name
            .toLowerCase()
            .replace(/\s+/g, "-")}.pdf`;
          link.click();
        })
        .catch((error) => {
          console.error("Error downloading the PDF", error);
          setPdfLoad(false);
        });
    }
  };

  return (
    <Styled.ListItemWrapper
      key={i}
      onMouseMove={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Styled.ListItemTitle>
        <Styled.ListItemName onHover={onHover}>
          {item.personal.name}
        </Styled.ListItemName>
        <Styled.ListItemPosition>{item.personal.role}</Styled.ListItemPosition>
      </Styled.ListItemTitle>
      <Styled.ListItemActions>
        <Styled.ListItemLink
          onMouseMove={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          href={`/cv/${item.personal.name.toLowerCase().replace(/\s+/g, "-")}-${
            item._id
          }`}
          ref={linkRef}
          rel="noreferrer"
          linkHover={linkHover}
        >
          <p>link</p>
          <Styled.ListItemArrowContainer className="cv">
            <ButtonArrow />
          </Styled.ListItemArrowContainer>
        </Styled.ListItemLink>
        {!pdfLoad ? (
          <Styled.ListItemPDF onClick={handleClick}>
            export as PDF
          </Styled.ListItemPDF>
        ) : (
          <Styles.Loader src={Loading.src} className="cv" alt="pdf loader" />
        )}
      </Styled.ListItemActions>
    </Styled.ListItemWrapper>
  );
};
