import React, { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";

import { queryKeys } from "../../consts/queryKeys";
import { useOnScreen } from "../../hooks/useOnScreen";

import * as Styled from "../../styles/HomePage/projectorBlock.styled";
import projectorIcon from "../../../public/HomePageDecoration/ProjectorBlock/projectorIcon.svg";
import light from "../../../public/HomePageDecoration/ProjectorBlock/light.svg";
import mobileCamera from "../../../public/HomePageDecoration/ProjectorBlock/mobileCamera.svg";

import { IDataResponse } from "../../types/Admin/Response.types";
import GetEstimationButton from "../GetEstimationButton";

const ProjectorBlock = () => {
    const queryClient = useQueryClient();
    const ref = useRef<HTMLDivElement>(null);
    const isScrolled = useOnScreen(ref);
    const isMobile = useMediaQuery("(max-width:768px)");
    const [visibleContent, setVisibleContent] = useState(false);
    const [timer, setTimer] = useState(3);

    const data = queryClient.getQueryData<IDataResponse>([
        queryKeys.getFullHomePage,
    ])?.BadgesBlock.projectorBlock;

    useEffect(() => {
        if (isScrolled && timer > 1) {
            const timeout = setTimeout(() => {
                setTimer((prev) => prev - 1);
            }, 500);

            return () => {
                clearTimeout(timeout);
                setTimeout(() => {
                    setVisibleContent(true)
                }, 950)
            };
        }
    }, [isScrolled, timer]);

    return (
        <Styled.ProjectorBlockWrapper ref={ref}>
            {isMobile ? (
                <Styled.MobileWrapper>
                    {!visibleContent ? (
                        <Styled.ScreenBlock className={isMobile ? "mobile" : undefined}>
                            <Styled.projectorLoaderBg className={isScrolled ? "isScrolled" : undefined}>
                                <Styled.TimerNumber>{timer}</Styled.TimerNumber>
                            </Styled.projectorLoaderBg>
                        </Styled.ScreenBlock>
                    ) : (
                        <Styled.TextContent>
                            <Styled.Title>{data?.title}</Styled.Title>
                            <Styled.Text>{data?.text}</Styled.Text>
                            <GetEstimationButton
                                buttonText={data?.button}
                                buttonLink={data?.buttonLink}
                                withEstimation
                                buttonClassName="homePage"
                                style={{ textTransform: "uppercase" }}
                            />
                        </Styled.TextContent>
                    )}
                    <Styled.MobileCamera
                        src={mobileCamera.src}
                        alt="mobile camera"
                    />
                </Styled.MobileWrapper>
            ) : (
                <Styled.ScrollContent className={visibleContent ? "visibleText" : undefined}>
                    <Styled.ProjectorIcon
                        src={projectorIcon.src}
                        className={visibleContent ? "visibleText" : undefined}
                        alt="camera"
                    />
                    {!visibleContent ? (
                        <Styled.ScreenWithLight>
                            <Styled.Light
                                src={light.src}
                                alt="light"
                            />
                            <Styled.ScreenBlock>
                                <Styled.projectorLoaderBg className={isScrolled ? "isScrolled" : undefined}>
                                    <Styled.TimerNumber>{timer}</Styled.TimerNumber>
                                </Styled.projectorLoaderBg>
                            </Styled.ScreenBlock>
                        </Styled.ScreenWithLight>
                    ) : (
                        <Styled.TextContent>
                            <Styled.Title>{data?.title}</Styled.Title>
                            <Styled.Text>{data?.text}</Styled.Text>
                            <GetEstimationButton
                                buttonText={data?.button}
                                buttonLink={data?.buttonLink}
                                withEstimation
                                buttonClassName="homePage"
                                style={{ textTransform: "uppercase" }}
                            />
                        </Styled.TextContent>
                    )}
                </Styled.ScrollContent>
            )}
        </Styled.ProjectorBlockWrapper>
    )
}

export default ProjectorBlock;