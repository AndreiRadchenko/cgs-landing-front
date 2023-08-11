import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";

import { queryKeys } from "../../../consts/queryKeys";
import ButtonArrow from "../../../utils/ButtonArrow";

import * as Styles from "../../../styles/AdminCvPage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import { ArrowContainer } from "../../../styles/Blog.styled";

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
    const data = queryClient.getQueryData<CvData[]>([
        queryKeys.getCvs,
    ]);
    const editTriggerFunc = () => {
        if (setCurrent && typeof idx === "number" && editTrigger && data) {
            setCurrent(data.findIndex((val) => val._id === cv._id));
            editTrigger((prev) => !prev);
        }
        if (editFlag) onScroll();
    };
    return (
        <>
        <Styles.AdminCvItemFrame className={editFlag ? undefined : !editFlag && current !== idx ? "fade" : undefined}>
            <Styles.AdminCvItemFlexContent>
                <Styles.AdminCvItemLeftFlex>
                    <img
                        src={cv.image.url}
                        width={155}
                        height={155}
                        alt="admin cv image"
                    />
                    <Styles.AdminCvItemTitle>
                        <Styles.AdminCvItemName>{cv.personal.name}</Styles.AdminCvItemName>
                        <Styles.AdminCvItemRole>{cv.personal.role}</Styles.AdminCvItemRole>
                    </Styles.AdminCvItemTitle>
                </Styles.AdminCvItemLeftFlex>
                <Styles.AdminCvItemRightFlex>
                    <Styles.AdminCvItemLink>
                        <a href={`/cv/${cv.personal.name.toLowerCase().replace(/\s+/g, '-')}-${cv._id}`} target="_blank">link</a>
                        <ArrowContainer>
                            <ButtonArrow />
                        </ArrowContainer>
                    </Styles.AdminCvItemLink>
                    <Styles.AdminCvItemExport>export as PDF</Styles.AdminCvItemExport>
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
    )
}

export default AdminCvItem;