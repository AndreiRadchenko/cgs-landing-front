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

export function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const data = [
    {
      id: "608fa463b4441800a5bfe93d",
      name: "VKsadfasdf",
      countryCode: "RU",
      shortDescription: "Short description about VK",
      fullDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus velit, euismod a lacus fringilla, efficitur convallis mauris. Nam laoreet purus vitae massa interdum, a malesuada lacus luctus. Maecenas iaculis, erat id dapibus euismod, lorem magna suscipit nisl, nec vestibulum sapien urna quis turpis. Pellentesque eleifend tortor sit amet lectus consectetur ultricies.",
      technologies: [
        {
          id: "608a882e18729b114dc20e97",
          name: "JavaScript",
          iconUrl:
            "https://code-generation-landing-bucket.s3.amazonaws.com/608a86ac18729b114dc20e96.png",
        },
        {
          id: "608a882e18729b114dc20e97",
          name: "JavaScript",
          iconUrl:
            "https://code-generation-landing-bucket.s3.amazonaws.com/608a86ac18729b114dc20e96.png",
        },
      ],
      link: "https://vk.com/",
      imageUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/608a884218729b114dc20e98.jpg",
    },
    {
      id: "608fa463b4441800a5bfe93d",
      name: "VK11111",
      countryCode: "RU",
      shortDescription: "Short description about VK",
      fullDescription: "Full description about VK",
      technologies: [
        {
          id: "608a882e18729b114dc20e97",
          name: "JavaScript",
          iconUrl:
            "https://code-generation-landing-bucket.s3.amazonaws.com/608a86ac18729b114dc20e96.png",
        },
      ],
      link: "https://vk.com/",
      imageUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/608a884218729b114dc20e98.jpg",
    },
    {
      id: "608fa463b4441800a5bfe93d",
      name: "VKffffff",
      countryCode: "RU",
      shortDescription: "Short description about VK",
      fullDescription: "Full description about VK",
      technologies: [
        {
          id: "608a882e18729b114dc20e97",
          name: "JavaScript",
          iconUrl:
            "https://code-generation-landing-bucket.s3.amazonaws.com/608a86ac18729b114dc20e96.png",
        },
      ],
      link: "https://vk.com/",
      imageUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/608a884218729b114dc20e98.jpg",
    },
    {
      id: "608fa463b4441800a5bfe93d",
      name: "VK000000",
      countryCode: "RU",
      shortDescription: "Short description about VK",
      fullDescription: "Full description about VK",
      technologies: [
        {
          id: "608a882e18729b114dc20e97",
          name: "JavaScript",
          iconUrl:
            "https://code-generation-landing-bucket.s3.amazonaws.com/608a86ac18729b114dc20e96.png",
        },
      ],
      link: "https://vk.com/",
      imageUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/608a884218729b114dc20e98.jpg",
    },
  ];

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
        <Home id="home" />
        <Article
          id="code"
          title="Our Latest Works"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
        >
          <SliderTestimonials>
            {data.map((item) => (
              <Slide item={item} />
            ))}
          </SliderTestimonials>
        </Article>

        <Article
          id="portfolio"
          title="Portfolio"
          desc="Our projects are our pride. For each one we put maximum efforts and knowledges, to provide the highest quality result."
        >
          <SliderPortfolio />
        </Article>

        <Article
          data-scrolling="technologies"
          id="technologies"
          title="Technologies"
          children={<Technologies technologies={Technology} />}
        />

        <Article id="Contacts" title="Contacts">
          <Form />
        </Article>
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
