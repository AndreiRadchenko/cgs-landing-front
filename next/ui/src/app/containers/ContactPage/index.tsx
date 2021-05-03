import React from "react";
import { Helmet } from "react-helmet-async";
import { Technology, SocialList, Nav } from "../../../consts/lists";

import Header from "../../components/shared/Header/header.component";
import Footer from "../../components/shared/Footer/footer.component";
import Home from "../../components/HomeSection/home.component";
import Form from "../../components/shared/Form/form.component";
import Article from "../../components/Article/article.component";
import Technologies from "../../components/Technologies/technologies.component";

import SliderTestimonials from "../../components/shared/SliderTestimonials/Slider.component";
import Slide from "../../components/shared/SliderTestimonials/Slide/slide.component";
import { slides } from "../../img";
import SliderPortfolio from "../../components/shared/SliderPortfolio/slider.component";

import { scrollEA } from "../../../services/event";

export function ContactPage() {
  const [activeIndex, setActiveIndex] = React.useState(2);

  React.useEffect(() => {
    scrollEA("data-scroll");
  }, []);

  return (
    <>
      <div className="main-wraper">
        <Header
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          socialList={SocialList}
          navigation={Nav}
        />
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
