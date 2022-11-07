import React from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {IServiceWebAudit} from "../../types/Admin/Response.types";
import {queryKeys} from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/ProfessionalAuditBlock.style";
import {ArrowContainer} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import Image from "next/image";
import AuditTimeText from "../../../public/WebAuditServicePage/AuditTimeText.svg"
import AuditTimeCommon from "../../../public/WebAuditServicePage/AuditTimeCommon.svg"

const ProfessionalAuditBlock = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<IServiceWebAudit>([
        queryKeys.getServiceWebAuditPage,
    ])?.footerBlock;

    return (
        <Styled.Wrapper>
            <Styled.Subtitle>{data?.title}</Styled.Subtitle>
            <Styled.Content>
                <Styled.InfoBlock>
                    <Styled.TextWrapper>{data?.text}</Styled.TextWrapper>
                    <Styled.Button
                        padding={"1.117em 2.537em"}
                        size={"1.5em"}
                        href={data?.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data?.button}
                        <ArrowContainer>
                            <ButtonArrow/>
                        </ArrowContainer>
                    </Styled.Button>
                </Styled.InfoBlock>
                    <Styled.ImageWrapper>
                        <Image
                            src={AuditTimeCommon}
                            alt="types of grid image"
                            layout="fill"
                            objectFit="contain"
                        />
                        <Styled.HoveredImageContainer>
                            <Styled.HoveredImage>
                            <Image src={AuditTimeText}
                                   alt="types of grid image"
                                   layout="fill"
                                   objectFit="contain"
                            />
                            </Styled.HoveredImage>
                        </Styled.HoveredImageContainer>
                    </Styled.ImageWrapper>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default ProfessionalAuditBlock;