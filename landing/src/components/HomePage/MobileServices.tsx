import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { queryKeys } from "../../consts/queryKeys";
import * as StyledThisComp from "../../styles/HomePage/MobileServices.styled";
import params from "../../mock/MobileServicesSwiperParams";
import { adminServices } from "../../services/services/commonServices";
import TextTypingAnimation from "../Typewrite";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getAllServices, () =>
    adminServices.getAllServices()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface ISlideData {
  image: string;
  title: string;
}

const MobileServices = () => {
  const { data } = useQuery(queryKeys.getAllServices, () =>
    adminServices.getAllServices()
  );
  const [slidesData, setSlidesData] = React.useState<ISlideData[]>([]);

  React.useEffect(() => {
    if (data) {
      const services = data.map((service) => ({
        image: service.headerBlock.image.url,
        title: service.headerBlock.title,
      }));
      setSlidesData(services);
    }
  }, [data]);

  let renderSliderSlides;
  if (slidesData) {
    renderSliderSlides = slidesData.map((item, idx) => (
      <SwiperSlide key={idx} style={{ padding: "30px 0px" }}>
        <StyledThisComp.ServiceWrapper>
          <TextTypingAnimation text={item.title} />
          <StyledThisComp.ImageWrapper>
            <StyledThisComp.Image src={item.image} />
          </StyledThisComp.ImageWrapper>
        </StyledThisComp.ServiceWrapper>
      </SwiperSlide>
    ));
  }

  return (
    <StyledThisComp.Wrapper>
      <Swiper {...params}>{renderSliderSlides}</Swiper>
    </StyledThisComp.Wrapper>
  );
};

export default MobileServices;
