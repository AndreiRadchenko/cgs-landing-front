import React from "react";
import Image from "next/image";

import bgImage1For1 from "../../../public/EstimationFormImages/image1.svg";
import bgImage2For1 from "../../../public/EstimationFormImages/image2.svg";
import bgImageDecor1For1 from "../../../public/EstimationFormImages/decoreImage1.svg";
import bgImageDecor2For1 from "../../../public/EstimationFormImages/decoreImage2.svg";

import bgImage1For2 from "../../../public/EstimationFormImages/image3.svg";
import bgImageDecor1For2 from "../../../public/EstimationFormImages/decoreImage3.svg";

import bgImage1For3 from "../../../public/EstimationFormImages/image4.svg";
import bgImage2For3 from "../../../public/EstimationFormImages/image5.svg";
import bgImageDecor1For3 from "../../../public/EstimationFormImages/decoreImage4.svg";
import bgImageDecor2For3 from "../../../public/EstimationFormImages/decoreImage5.svg";

import { EstimationImageContainer } from "../../styles/EstimationForm.styled";

const ImageBackground = ({ page }: { page: number }) => {
  if (page % 2 === 0) {
    return (
      <>
        <EstimationImageContainer style={{ top: "35%", zIndex: -10 }}>
          <Image src={bgImage1For2} alt="Image" />
        </EstimationImageContainer>
        <EstimationImageContainer style={{ top: "5%", right: 0, zIndex: -10 }}>
          <Image src={bgImageDecor1For2} alt="Image" />
        </EstimationImageContainer>
      </>
    );
  }

  if (page % 3 === 0) {
    return (
      <>
        <EstimationImageContainer style={{ bottom: "40%", zIndex: -10 }}>
          <Image src={bgImage1For3} alt="Image" />
        </EstimationImageContainer>
        <EstimationImageContainer style={{ top: "15%", right: 0, zIndex: -10 }}>
          <Image src={bgImage2For3} alt="Image" />
        </EstimationImageContainer>
        <EstimationImageContainer style={{ bottom: "20%", zIndex: -10 }}>
          <Image src={bgImageDecor1For3} alt="Image" />
        </EstimationImageContainer>
        <EstimationImageContainer
          style={{ bottom: "-3%", right: 0, zIndex: -10 }}
        >
          <Image src={bgImageDecor2For3} alt="Image" />
        </EstimationImageContainer>
      </>
    );
  }

  return (
    <>
      <EstimationImageContainer style={{ bottom: "15%", zIndex: -10 }}>
        <Image src={bgImage1For1} alt="Image" />
      </EstimationImageContainer>
      <EstimationImageContainer style={{ top: "20%", right: 0, zIndex: -10 }}>
        <Image src={bgImage2For1} alt="Image" />
      </EstimationImageContainer>
      <EstimationImageContainer style={{ top: "25%", zIndex: -10 }}>
        <Image src={bgImageDecor1For1} alt="Image" />
      </EstimationImageContainer>
      <EstimationImageContainer
        style={{ bottom: "-3%", right: 0, zIndex: -10 }}
      >
        <Image src={bgImageDecor2For1} alt="Image" />
      </EstimationImageContainer>
    </>
  );
};

export default ImageBackground;
