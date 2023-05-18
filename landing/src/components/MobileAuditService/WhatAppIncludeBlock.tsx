import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [activeIcon, setActiveIcon] = useState('');

  const securityTestIconRef = useRef<HTMLDivElement>(null);
  const encryptionDefinitionIconRef = useRef<HTMLDivElement>(null);
  const operatingSystemIconRef = useRef<HTMLDivElement>(null);
  const appsStaticIconRef = useRef<HTMLDivElement>(null);
  const discoveringDataIconRef = useRef<HTMLDivElement>(null);
  const migrationAuditIconRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  const iconPosition = [
    { key: 'MOBILE APPLICATION SECURITY TEST', ref: securityTestIconRef },
    { key: 'ENCRYPTION DEFINITION', ref: encryptionDefinitionIconRef },
    { key: 'MOBILE APP OPERATING SYSTEM', ref: operatingSystemIconRef },
    { key: 'ANDROID/IOS APPS STATIC', ref: appsStaticIconRef },
    { key: 'DISCOVERING DATA', ref: discoveringDataIconRef },
    { key: 'MIGRATION AUDIT', ref: migrationAuditIconRef }
  ];

  const onMouseEnter = (title: string) => {
    const glassPositionAndSize = glassRef?.current?.getBoundingClientRect()
    const targetPictureRef = iconPosition?.find(it => title?.toUpperCase()?.includes(it.key?.toUpperCase()))?.ref;
    const targetPicturePosition = targetPictureRef?.current?.getBoundingClientRect();

    if (!glassPositionAndSize) return

    const glassCenterPosition = {
      x: glassPositionAndSize.left + (glassPositionAndSize?.width * 0.18),
      y: glassPositionAndSize?.top + (glassPositionAndSize?.height * 0.2)
    };
    
    const newPosition = {
      x: (targetPicturePosition?.left ?? 0) - glassCenterPosition.x,
      y: (targetPicturePosition?.top ?? 0) - glassCenterPosition.y,
    };

    if (newPosition) {
      setCoordinates(newPosition);
      const iconKey = iconPosition?.find(it => title?.toUpperCase()?.includes(it.key?.toUpperCase()))?.key;
      setActiveIcon(iconKey || '');
    };
  };

  const onMouseOut = () => {   
    setCoordinates(initialCoordinates)
    setActiveIcon('');
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