import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useQueryClient } from "@tanstack/react-query";

import WhatAppIncludeSubListItem from "./WhatAppIncludeSubList";

import { Separator } from "../../styles/MobileAuditService/Common.styled";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

import { SplitBrackets } from "../../utils/splitBrackets";

import MobileAuditIcons from "./MobileAuditIcons";

const WhatAppIncludeBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppInclude;

  const [gradientPosition, setGradientPosition] = useState<string>("50%");

  const mouseMoveListener = useCallback(({ pageY }: MouseEvent) => {
    const windowHeight = window.innerHeight;
    const mouseYpercentage = Math.round(
      ((pageY - window.scrollY) / windowHeight) * 100
    );
    setGradientPosition(`${mouseYpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  const initialCoordinates = { x: 0, y: 0 };
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [hoverOut, setHoverOut] = useState(false);
  const [activeIcon, setActiveIcon] = useState("");
  const [animationCompleted, setAnimationCompleted] = useState(true);
  const [transitionTime, setTransitionTime] = useState(0);

  const securityTestIconRef = useRef<HTMLDivElement>(null);
  const encryptionDefinitionIconRef = useRef<HTMLDivElement>(null);
  const operatingSystemIconRef = useRef<HTMLDivElement>(null);
  const appsStaticIconRef = useRef<HTMLDivElement>(null);
  const discoveringDataIconRef = useRef<HTMLDivElement>(null);
  const migrationAuditIconRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const listInformation = [
    { key: data?.textBlock[0], ref: securityTestIconRef },
    { key: data?.textBlock[1], ref: encryptionDefinitionIconRef },
    { key: data?.textBlock[2], ref: operatingSystemIconRef },
    { key: data?.textBlock[3], ref: appsStaticIconRef },
    { key: data?.textBlock[4], ref: discoveringDataIconRef },
    { key: data?.textBlock[5], ref: migrationAuditIconRef },
  ];

  const iconPosition = useMemo(() => {
    return listInformation?.map((it) => ({
      key: it.key,
      ref: it.ref,
      bullets: data?.textBlock?.find((block) => {
        return (
          block.text?.toUpperCase()?.includes(it!.key!.text!.toUpperCase()) ||
          block.subtext?.some((subtextLine) =>
            it?.key?.subtext?.includes(subtextLine)
          )
        );
      })?.subtext,
    }));
  }, []);

  const onMouseEnter = (title: string, event: React.MouseEvent) => {
    event?.stopPropagation();
    if (
      !hoverOut &&
      coordinates.x === initialCoordinates.x &&
      coordinates.y === initialCoordinates.y &&
      animationCompleted
    ) {
      const is1200px = window.matchMedia("(max-width: 1200px)").matches;
      const is992px = window.matchMedia("(max-width: 992px)").matches;
      const is768px = window.matchMedia("(max-width: 768px)").matches;
      const is475px = window.matchMedia("(max-width: 475px)").matches;
      const is375px = window.matchMedia("(max-width: 375px)").matches;

      const glassPositionAndSize = glassRef?.current?.getBoundingClientRect();
      const targetIcon = iconPosition?.find((it) => {
        const isBulletHovered = it.bullets?.some((bullet) =>
          title?.toUpperCase()?.includes(bullet?.toUpperCase())
        );
        return (
          title?.toUpperCase()?.includes(it!.key!.text!.toUpperCase()) ||
          isBulletHovered
        );
      });

      const targetPictureRef = targetIcon?.ref;

      const targetPicturePosition =
        targetPictureRef?.current?.getBoundingClientRect();

      if (!glassPositionAndSize) return;

      const glassCenterPosition = {
        x: glassPositionAndSize.left + glassPositionAndSize?.width * 0.18,
        y: glassPositionAndSize?.top + glassPositionAndSize?.height * 0.2,
      };

      if (is1200px) {
        (glassCenterPosition.x =
          glassPositionAndSize.left + glassPositionAndSize?.width * 0.27),
          (glassCenterPosition.y =
            glassPositionAndSize?.top + glassPositionAndSize?.height * 0.4);
      }
      if (is992px) {
        (glassCenterPosition.x =
          glassPositionAndSize.left + glassPositionAndSize?.width * 0.25),
          (glassCenterPosition.y =
            glassPositionAndSize?.top + glassPositionAndSize?.height * 0.3);
      }
      if (is768px) {
        (glassCenterPosition.x =
          glassPositionAndSize.left + glassPositionAndSize?.width * 0.28),
          (glassCenterPosition.y =
            glassPositionAndSize?.top + glassPositionAndSize?.height * 0.5);
      }
      if (is475px) {
        (glassCenterPosition.x =
          glassPositionAndSize.left + glassPositionAndSize?.width * 0.3),
          (glassCenterPosition.y =
            glassPositionAndSize?.top + glassPositionAndSize?.height * 0.4);
      }
      if (is375px) {
        (glassCenterPosition.x =
          glassPositionAndSize.left + glassPositionAndSize?.width * 0.27),
          (glassCenterPosition.y =
            glassPositionAndSize?.top + glassPositionAndSize?.height * 0.32);
      }

      const newPosition = {
        x: (targetPicturePosition?.left ?? 0) - glassCenterPosition.x,
        y: (targetPicturePosition?.top ?? 0) - glassCenterPosition.y,
      };

      if (newPosition) {
        setCoordinates(newPosition);
        const iconKey = targetIcon?.key;
        setActiveIcon(iconKey?.text || "");
        setHoverOut(true);
        setTransitionTime(0.1);
      }
    }
  };

  const onMouseOut = () => {
    setActiveIcon("");
    setCoordinates(initialCoordinates);
    setHoverOut(false);
    setTransitionTime(0);
  };

  useEffect(() => {
    if (
      coordinates.x === initialCoordinates.x &&
      coordinates.y === initialCoordinates.y
    ) {
      setAnimationCompleted(true);
    } else {
      setAnimationCompleted(false);
    }
  }, [coordinates]);

  return (
    <Styled.Container>
      <Separator />
      <Styled.Title>
        <SplitBrackets text={data?.subtitle} />
      </Styled.Title>
      <Styled.GradientLineContainer>
        <Styled.MobileAuditBgiContainer angle={gradientPosition} ref={elRef} />
        <Styled.SubtitlesList>
          {data?.textBlock.map((item, idx) => (
            <WhatAppIncludeSubListItem
              item={item}
              key={idx}
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
            />
          ))}
        </Styled.SubtitlesList>
      </Styled.GradientLineContainer>
      <Styled.GlassContainer>
        <MobileAuditIcons
          transitionTime={transitionTime}
          top={coordinates.y}
          left={coordinates.x}
          securityTestIconRef={securityTestIconRef}
          encryptionDefinitionIconRef={encryptionDefinitionIconRef}
          operatingSystemIconRef={operatingSystemIconRef}
          appsStaticIconRef={appsStaticIconRef}
          discoveringDataIconRef={discoveringDataIconRef}
          migrationAuditIconRef={migrationAuditIconRef}
          glassRef={glassRef}
          activeIcon={activeIcon}
          iconPositions={iconPosition}
        />
      </Styled.GlassContainer>
    </Styled.Container>
  );
};

export default WhatAppIncludeBlock;
