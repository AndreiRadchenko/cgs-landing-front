import React from "react";
import { SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";

import { VerticalSlider } from "./VerticalSlider";
import { Picture } from "./VerticalSlider/Picture";

import * as Styles from "./OtherServices.styled";
import { IOtherServicesComponent } from "../../../../types/ServicesComponent.types";
import { SplitBrackets } from "../../../../utils/splitBrackets";

interface IServicesProps {
  otherServices?: IOtherServicesComponent;
}

export const OtherServices = ({ otherServices }: IServicesProps) => {
  const isMobile = useMediaQuery("(max-width:1400px)");

  return (
    <Styles.Container>
      <Styles.Carousel>
        {otherServices?.services && (
          <>
            <VerticalSlider direction={isMobile ? "horizontal" : "vertical"}>
              {otherServices?.services.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <Picture
                    imageColor={slide.imageColor}
                    imageGrayscale={slide.imageGrayscale}
                    link={slide.link}
                  />
                </SwiperSlide>
              ))}
            </VerticalSlider>
            {!isMobile && (
              <VerticalSlider isReverse={true}>
                {otherServices?.services.reverse().map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <Picture
                      imageColor={slide.imageColor}
                      imageGrayscale={slide.imageGrayscale}
                      link={slide.link}
                    />
                  </SwiperSlide>
                ))}
              </VerticalSlider>
            )}
          </>
        )}
      </Styles.Carousel>
      <Styles.Description>
        <Styles.Title>
          <SplitBrackets text={otherServices?.title} />
        </Styles.Title>
        <Styles.Text>
          <SplitBrackets text={otherServices?.text} />
        </Styles.Text>
      </Styles.Description>
    </Styles.Container>
  );
};

export default OtherServices;
