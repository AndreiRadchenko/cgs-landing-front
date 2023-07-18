import React from "react";
import Image from "next/image";

import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";

import Glass from "../../../public/MobileAuditService/glass.svg";
import securityTestIcon from "../../../public/MobileAuditService/ic1.svg";
import encryptionDefinitionIcon from "../../../public/MobileAuditService/ic2.svg";
import operatingSystemIcon from "../../../public/MobileAuditService/ic3.svg";
import appsStaticIcon from "../../../public/MobileAuditService/ic4.svg";
import discoveringDataIcon from "../../../public/MobileAuditService/ic5.svg";
import migrationAuditIcon from "../../../public/MobileAuditService/ic6.svg";

import securityTestIconActive from "../../../public/MobileAuditService/ic1active.svg";
import encryptionDefinitionIconActive from "../../../public/MobileAuditService/ic2active.svg";
import operatingSystemIconActive from "../../../public/MobileAuditService/ic3active.svg";
import appsStaticIconActive from "../../../public/MobileAuditService/ic4active.svg";
import discoveringDataIconActive from "../../../public/MobileAuditService/ic5active.svg";
import migrationAuditIconActive from "../../../public/MobileAuditService/ic6active.svg";

interface IconsProps {
  top: number;
  left: number;
  securityTestIconRef: React.RefObject<HTMLDivElement>;
  encryptionDefinitionIconRef: React.RefObject<HTMLDivElement>;
  operatingSystemIconRef: React.RefObject<HTMLDivElement>;
  appsStaticIconRef: React.RefObject<HTMLDivElement>;
  discoveringDataIconRef: React.RefObject<HTMLDivElement>;
  migrationAuditIconRef: React.RefObject<HTMLDivElement>;
  glassRef: React.RefObject<HTMLDivElement>;
  iconPositions: {
    key: { text: string; subtext: string[] } | undefined;
    ref: React.RefObject<any>;
  }[];
  activeIcon: string;
  transitionTime: number;
}

const MobileAuditIcons = ({
  top,
  left,
  securityTestIconRef,
  encryptionDefinitionIconRef,
  operatingSystemIconRef,
  appsStaticIconRef,
  discoveringDataIconRef,
  migrationAuditIconRef,
  glassRef,
  iconPositions,
  activeIcon,
  transitionTime,
}: IconsProps) => {
  return (
    <Styled.IconContainer>
      <Styled.GlassItem
        top={top}
        left={left}
        ref={glassRef}
        transitionTime={transitionTime}
      >
        <Image src={Glass} alt="magnifying glass image" />
      </Styled.GlassItem>
      <Styled.IconItems>
        <Styled.IconItem ref={securityTestIconRef}>
          <Image
            src={
              activeIcon === iconPositions[0].key?.text
                ? securityTestIconActive
                : securityTestIcon
            }
            alt="mobile application security test image"
          />
        </Styled.IconItem>
        <Styled.IconItem ref={encryptionDefinitionIconRef}>
          <Image
            src={
              activeIcon === iconPositions[1].key?.text
                ? encryptionDefinitionIconActive
                : encryptionDefinitionIcon
            }
            alt="encryption definition image"
          />
        </Styled.IconItem>
        <Styled.IconItem ref={operatingSystemIconRef}>
          <Image
            src={
              activeIcon === iconPositions[2].key?.text
                ? operatingSystemIconActive
                : operatingSystemIcon
            }
            alt="mobile app operating system image"
          />
        </Styled.IconItem>
        <Styled.IconItem ref={migrationAuditIconRef}>
          <Image
            src={
              activeIcon === iconPositions[5].key?.text
                ? migrationAuditIconActive
                : migrationAuditIcon
            }
            alt="android/ios apps static image"
          />
        </Styled.IconItem>
        <Styled.IconItem ref={discoveringDataIconRef}>
          <Image
            src={
              activeIcon === iconPositions[4].key?.text
                ? discoveringDataIconActive
                : discoveringDataIcon
            }
            alt="discovering data image"
          />
        </Styled.IconItem>
        <Styled.IconItem ref={appsStaticIconRef}>
          <Image
            src={
              activeIcon === iconPositions[3].key?.text
                ? appsStaticIconActive
                : appsStaticIcon
            }
            alt="migration audi"
          />
        </Styled.IconItem>
      </Styled.IconItems>
    </Styled.IconContainer>
  );
};

export default MobileAuditIcons;
