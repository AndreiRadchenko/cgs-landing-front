import React from "react";
import * as Styled from "../../styles/Projects.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import rightArrow from "../../../public/rightArrowSlider.svg";
import leftArrow from "../../../public/leftArrowSlider.svg";
import cosunoIMG from "../../../public/project_images/cosuno_ventures.png";
import finmixIMG from "../../../public/project_images/finmix.png";
import socoolIMG from "../../../public/project_images/so_cool.png";
import switchIMG from "../../../public/project_images/switch.png";
import ProjectItem from "./ProjectItem";
import Image from "next/image";

const projectArr = [
  {
    image: {
      url: cosunoIMG,
    },
    title: "Cosuno Ventures GmbH",
    link: "https://www.cosuno.de/en/",
    description:
      "This is a solution for procurement and subcontractor management in the construction industry of Germany. Expand a number of subcontractors from your contacts or find an ideal one in the base of 80000+ candidates. Then – one click and you’ve sent your tender.",
  },
  {
    image: {
      url: finmixIMG,
    },
    title: "FinMix",
    link: "https://www.finmix.com/home",
    description:
      "See your gainz and tendies in one platform. Account is free, you just need to get a referral code and start enjoying the world of crypto and stocks on FinMix!",
  },
  {
    image: {
      url: socoolIMG,
    },
    title: "SO-COOL",
    link: "https://review-app.io/",
    description:
      "This Blockchain DeFi system uses Smart contracts to build a bridge between your web2 social channels and new web3. The core feature: non-crypto users availability. You just need Social / Premium Collectables to get access to the platform channels.",
  },
  {
    image: {
      url: switchIMG,
    },
    title: "Switch",
    link: "https://www.producthunt.com/posts/switch-1-0",
    description:
      "This is a Browser Extension that adds a Sidebar to your browser and gives you the tools to switch between your apps, accounts, and workflows in one place. Switch instantly helps you to become more productive.",
  },
];

const ProjectCarousel = () => {
  return (
    <Styled.CarouselWrapper>
      <Swiper
        onSlideChangeTransitionStart={(slider) => {
          console.log(slider);
        }}
        direction="horizontal"
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
      >
        {projectArr.map(({ image, title, link, description }, idx) => (
          <SwiperSlide key={idx}>
            <ProjectItem
              image={image}
              title={title}
              link={link}
              description={description}
            />
          </SwiperSlide>
        ))}
        <Styled.Arrow className="prev">
          <Image
            src={leftArrow}
            alt="projects left arrow"
            className="swiper-button-prev"
          />
        </Styled.Arrow>
        <Styled.Arrow className="next">
          <Image
            src={rightArrow}
            alt="projects left arrow"
            className="swiper-button-next"
          />
        </Styled.Arrow>
      </Swiper>
    </Styled.CarouselWrapper>
  );
};

export default ProjectCarousel;
