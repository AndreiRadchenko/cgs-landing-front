import { useEffect, useState } from "react";
import { getAdminData } from "services/api/adminApi";
import { IIconFile } from "../types";
import * as Styled from "./Images.style";
import Slider from "react-slick";
import { slides } from "../../../img/";
import { CheckboxLabel, CustomCheckbox } from "../Form.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "app/components/shared/Slider/arrows";
import { getSpinner } from 'helpers/spinner';

const Images: React.FC<{
  activeImage?: IIconFile | undefined;
  getImageId: Function;
}> = ({ activeImage, getImageId }) => {
  const [images, setImages] = useState<IIconFile[]>([]);
  const [imageID, setImageID] = useState(activeImage?.id || "");
  const [isLoading, setIsLoading] = useState(false);

  const getImages = async () => {
    setIsLoading(true);

    const images = await getAdminData("file");

    setImages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleImageChange = (id: string) => {
    setImageID(id);
    getImageId(id);
  };

  let settings = {
    infinite: true,
    slidesToShow: images.length > 2 ? 3 : images.length === 2 ? 2 : 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow img={slides.AdminVectorRight} forWorks top={50} />
    ),
    prevArrow: (
      <SamplePrevArrow img={slides.AdminVectorLeft} forWorks top={50} />
    ),
    className: "slides",
  };

  const renderSlider = () => (
    <Styled.SliderContainer>
      <Slider {...settings}>
        {images.map((image) => (
          <CheckboxLabel key={image.id}>
            <input
              type="radio"
              name="imageOption"
              checked={imageID === image.id}
              onChange={() => handleImageChange(image.id)}
            />
            <img className="slide-image" src={image.s3FileUrl} />
            <CustomCheckbox sliderLabel selected={imageID === image.id}>
              <img src={slides.Check} alt={slides.Check} />
            </CustomCheckbox>
          </CheckboxLabel>
        ))}
      </Slider>
    </Styled.SliderContainer>
  );

  return (
    <Styled.Wrapper>
      <Styled.ImagesWrapper>
        {isLoading ? getSpinner() : renderSlider()}
      </Styled.ImagesWrapper>
    </Styled.Wrapper>
  );
};

export default Images;
