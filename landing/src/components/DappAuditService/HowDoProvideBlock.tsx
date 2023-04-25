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
        title: "Preparation",
        text: "We enhance your idea, set deadlines and demands, and create no-charge estimations, wireframes, and specifications. Our team will deeply research your project and industry and choose the best solution among:",
        subContent: [
          {
            title: "Building with AI API from scratch",
            text: "Our development team chooses the AI API that covers your needs and develops the app from scratch. We can use all the functionality or take the particular features for your idea. For example, ChatGPT for chatbots or Deep Vision AI for facial recognition.",
            _id: "636a61e33507a37b0caa77e3",
          },
          {
            title: "AI integration into the existing apps",
            text: "Implementation of the next-gen plugins into your app can revolutionize your app. Apply the power of quality-tested, purpose-built AI solutions to reach your business goals. ",
            _id: "636a61e33507a37b0caa77e4",
          },
        ],
        _id: "636a61e33507a37b0caa77e2",
      },
      {
        title: "Development",
        text: "You'll see the task dashboard and videos presenting the finished project within the process. We focus highly on code quality and give project manager and code reviews as a bonus. We set up regular meetings as communication is key. ",
        subContent: [],
        _id: "636a61e33507a37b0caa77e5",
      },
      {
        title: "Launch and maintenance",
        text: "After thousands of tests and checks, we finally launch your idea. CGS-team is not only a development tasks coverer but your reliable partner. We give quality deployment and 6 months of support as a gift.",
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
