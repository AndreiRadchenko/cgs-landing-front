import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SplitBrackets } from "../../utils/splitBrackets";
import WhatAppIncludeSubListItem from "./WhatAppIncludeSubList";

import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { Separator } from "../../styles/MobileAuditService/Common.styled";
import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";
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
  const [activeIcon, setActiveIcon] = useState('');

  const securityTestIconRef = useRef<HTMLDivElement>(null);
  const encryptionDefinitionIconRef = useRef<HTMLDivElement>(null);
  const operatingSystemIconRef = useRef<HTMLDivElement>(null);
  const appsStaticIconRef = useRef<HTMLDivElement>(null);
  const discoveringDataIconRef = useRef<HTMLDivElement>(null);
  const migrationAuditIconRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const listInformation = [
    { key: 'MOBILE APPLICATION SECURITY TEST', ref: securityTestIconRef },
    { key: 'ENCRYPTION DEFINITION', ref: encryptionDefinitionIconRef },
    { key: 'MOBILE APP OPERATING SYSTEM', ref: operatingSystemIconRef },
    { key: 'ANDROID/IOS APPS STATIC', ref: appsStaticIconRef },
    { key: 'DISCOVERING DATA', ref: discoveringDataIconRef },
    { key: 'MIGRATION AUDIT', ref: migrationAuditIconRef }
  ];

  const iconPosition = useMemo(() => {
    return listInformation?.map(it => ({
      key: it.key,
      ref: it.ref,
      bullets: data?.textBlock?.find(block => block.text?.toUpperCase()?.includes(it?.key?.toUpperCase()))?.subtext
    }));
  }, []);

  const onMouseEnter = (title: string) => {
    if (!hoverOut) {
      const is1200px = window.matchMedia('(max-width: 1200px)').matches;
      const is992px = window.matchMedia('(max-width: 992px)').matches;
      const is768px = window.matchMedia('(max-width: 768px)').matches;
      const is475px = window.matchMedia('(max-width: 475px)').matches;
      const is375px = window.matchMedia('(max-width: 375px)').matches;

      const glassPositionAndSize = glassRef?.current?.getBoundingClientRect();
      const targetIcon = iconPosition?.find(it => {
        const isBulletHovered = it.bullets?.some(bullet => title?.toUpperCase()?.includes(bullet?.toUpperCase()));
        return title?.toUpperCase()?.includes(it.key?.toUpperCase()) || isBulletHovered;
      });

      const targetPictureRef = targetIcon?.ref;

      const targetPicturePosition = targetPictureRef?.current?.getBoundingClientRect();

      if (!glassPositionAndSize) return

      const glassCenterPosition = {
        x: glassPositionAndSize.left + (glassPositionAndSize?.width * 0.18),
        y: glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.2)
      };

      if (is1200px) {
        glassCenterPosition.x = glassPositionAndSize.left + (glassPositionAndSize?.width * 0.27),
        glassCenterPosition.y = glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.4)
      }
      if (is992px) {
        glassCenterPosition.x = glassPositionAndSize.left + (glassPositionAndSize?.width * 0.25),
        glassCenterPosition.y = glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.3)
      }
      if (is768px) {
        glassCenterPosition.x = glassPositionAndSize.left + (glassPositionAndSize?.width * 0.28),
        glassCenterPosition.y = glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.5)
      }
      if (is475px) {
        glassCenterPosition.x = glassPositionAndSize.left + (glassPositionAndSize?.width * 0.3),
        glassCenterPosition.y = glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.4)
      }
      if (is375px) {
        glassCenterPosition.x = glassPositionAndSize.left + (glassPositionAndSize?.width * 0.27),
        glassCenterPosition.y = glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.32)
      }

      const newPosition = {
        x: (targetPicturePosition?.left ?? 0) - glassCenterPosition.x,
        y: (targetPicturePosition?.top ?? 0) - glassCenterPosition.y,
      };

      if (newPosition && coordinates.x == initialCoordinates.x && coordinates.y == initialCoordinates.y) {
        setCoordinates(newPosition);
        const iconKey = targetIcon?.key;
        setActiveIcon(iconKey || '');
      };
    };
  };

  const onMouseOut = () => {
    setActiveIcon('');
    setCoordinates(initialCoordinates);  
    setHoverOut(false)
  };

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
            <WhatAppIncludeSubListItem item={item} key={idx} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} />
          ))}
        </Styled.SubtitlesList>
      </Styled.GradientLineContainer>
      <Styled.GlassContainer>
        <MobileAuditIcons
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