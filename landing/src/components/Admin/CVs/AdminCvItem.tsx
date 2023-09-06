import { useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

import ButtonArrow from "../../../utils/ButtonArrow";
import Loading from "../../../../public/CareerDecorations/loading.svg";

import * as Styles from "../../../styles/AdminCvPage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import { ArrowContainer } from "../../../styles/Blog.styled";

import { queryKeys } from "../../../consts/queryKeys";
import { CvData } from "../../../types/Admin/AdminCv.types";

interface IItemProps {
  cv: CvData;
  deleteFunc?: (e?: React.ChangeEvent<any>) => void;
  editTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag?: boolean;
  current: number;
  setCurrent?: (value: number) => void;
  idx?: number;
  onScroll: () => void;
}

const AdminCvItem = ({
  cv,
  deleteFunc,
  editTrigger,
  editFlag,
  current,
  setCurrent,
  idx,
  onScroll,
}: IItemProps) => {
  const queryClient = useQueryClient();
  const [pdfLoad, setPdfLoad] = useState(false);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const data = queryClient.getQueryData<CvData[]>([queryKeys.getCvs]);

  const link = `/cv/${cv.personal.name.toLowerCase().replace(/\s+/g, "-")}-${
    cv._id
  }`;

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
          link.download = `cv-${cv.personal.name
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

  const editTriggerFunc = () => {
    if (setCurrent && typeof idx === "number" && editTrigger && data) {
      setCurrent(data.findIndex((val) => val._id === cv._id));
      editTrigger((prev) => !prev);
    }
    if (editFlag) onScroll();
  };

  return (
    <>
      <Styles.AdminCvItemFrame
        className={
          editFlag
            ? undefined
            : !editFlag && current !== idx
            ? "fade"
            : undefined
        }
      >
        <Styles.AdminCvItemFlexContent>
          <Styles.AdminCvItemLeftFlex>
            <img
              src={cv.image.url}
              width={155}
              height={155}
              alt="admin cv image"
            />
            <Styles.AdminCvItemTitle>
              <Styles.AdminCvItemName>
                {cv.personal.name}
              </Styles.AdminCvItemName>
              <Styles.AdminCvItemRole>
                {cv.personal.role}
              </Styles.AdminCvItemRole>
            </Styles.AdminCvItemTitle>
          </Styles.AdminCvItemLeftFlex>
          <Styles.AdminCvItemRightFlex>
            <Styles.AdminCvItemLink>
              <a ref={linkRef} href={link} target="_blank">
                link
              </a>
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </Styles.AdminCvItemLink>
            <Styles.AdminCvItemExport onClick={handleClick}>
              {!pdfLoad ? (
                <p>export as PDF</p>
              ) : (
                <Styles.Loader src={Loading.src} alt="pdf loader" />
              )}
            </Styles.AdminCvItemExport>
          </Styles.AdminCvItemRightFlex>
        </Styles.AdminCvItemFlexContent>
        <Styles.AdminCvItemEditDelete>
          <Styles.AdminCvItemEdit onClick={editTriggerFunc}>
            <Image
              src={editFlag || current !== idx ? edit : close}
              alt="admin cv edit icon"
            />
          </Styles.AdminCvItemEdit>
          <Styles.AdminCvItemDelete onClick={deleteFunc}>
            delete
          </Styles.AdminCvItemDelete>
        </Styles.AdminCvItemEditDelete>
      </Styles.AdminCvItemFrame>
    </>
  );
};

export default AdminCvItem;
