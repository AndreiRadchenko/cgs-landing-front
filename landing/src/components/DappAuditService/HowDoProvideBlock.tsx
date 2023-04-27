import Image from "next/image";
import React from "react";
import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";
import HowToProvideBlockItem from "./HowDoProvideBlockItem";
import HowDoWeProvideBg from "../../../public/DappAuditService/HowDoWeProvide.svg";
import HowDoProvideSubItem from "./HowDoProvideSubItem";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const HowDoProvideBlock = () => {
  const data = {
    subtitle: "How do we provide it?",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/c5ad3465-ef6c-491d-955d-bbc6f16ede68.svg",
    },
    textBlock: [
      {
        title: "Smart contract source code",
        text: "CGS-team starts by reviewing the dapp source code, backend, and smart contract side. We divide this stage into 2 parts to ensure everything is well-designed, secure, and optimized.",
        subContent: [
          {
            title: "Automation testing",
            text: "Our skilled specialists run automated security audits to detect vulnerabilities and storage slot checks to inspect functions', variables' order, and access modifiers. Gas optimization tests are done to test smart contracts, calculate deployment prices and the costs of interactions.",
            _id: "636a61e33507a37b0caa77e3",
          },
          {
            title: "Manual code overview",
            text: "Here we manually test smart contract interactions, gas optimization, and security. The first stage ends up with a detailed description of all the potential improvements.",
            _id: "636a61e33507a37b0caa77e4",
          },
        ],
        _id: "636a61e33507a37b0caa77e2",
      },
      {
        title: "Dapp design*",
        text: "Powered by extensive expertise in smart contract development and designing dapps, our team can evaluate tokenomics and the ecosystem of your project. Also, we provide auditing and correction of existing tokenomics models.",
        subContent: [],
        _id: "636a61e33507a37b0caa77e5",
      },
      {
        title: "Penetration testing",
        text: "Penetration testing aims to find security vulnerabilities and offer helpful guidance for fixing them. It includes the smart contracts vulnerabilities test (reentrancy, overflow, self-destruction, etc.) and common client-side issues test (DNS attacks, SQL injections, XSS, DDoS, Css injections, etc.)",
        subContent: [],
        _id: "636a61e33507a37b0caa77e6",
      },
    ],
  };

  return (
    <Styled.Wrapper>
      <Styled.SubtitleWrapper>
        <div>
          <MobileInfiniteText title={data?.subtitle} withoutMargin />
          <Subtitle className="mobileDissapear">{data?.subtitle}</Subtitle>
          {data && (
            <HowToProvideBlockItem
              number={1}
              title={data.textBlock[0].title}
              text={data.textBlock[0].text}
            />
          )}
        </div>
        {data && (
          <Styled.ImageWrapper>
            <Image
              src={data?.image.url}
              alt="how to provide img"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
      </Styled.SubtitleWrapper>
      <Styled.BackgroundContainer>
        <Styled.BgImage
          src={HowDoWeProvideBg.src}
          alt="how do we provide bg image"
        />
        <Styled.SubContentWrapper>
          {data?.textBlock[0].subContent.map((item, idx) => (
            <HowDoProvideSubItem
              title={item.title}
              text={item.text}
              key={item.title + idx}
            />
          ))}
        </Styled.SubContentWrapper>
        <WrapperWithLine />
        {data && (
          <Styled.SecondSubtitleContainer>
            <HowToProvideBlockItem
              optional
              number={2}
              title={data.textBlock[1].title}
              text={data.textBlock[1].text}
            />
          </Styled.SecondSubtitleContainer>
        )}
        {data && (
          <Styled.ThirdSubtitleContainer>
            <HowToProvideBlockItem
              number={3}
              title={data.textBlock[2].title}
              text={data.textBlock[2].text}
            />
          </Styled.ThirdSubtitleContainer>
        )}
      </Styled.BackgroundContainer>
    </Styled.Wrapper>
  );
};

export default HowDoProvideBlock;
