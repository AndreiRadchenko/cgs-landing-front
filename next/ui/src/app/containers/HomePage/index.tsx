import React from 'react';
import { SocialList, Nav, Works } from '../../../consts/lists';
import Header from '../../components/shared/Header/header.component';
import Footer from '../../components/shared/Footer/footer.component';
import Home from '../../components/HomeSection/home.component';
import Form from '../../components/shared/Form/form.component';
import Article from '../../components/Article/article.component';
import SliderWorks from '../../components/shared/SliderTestimonials/Slider.component';
import Slide from '../../components/shared/SliderTestimonials/Slide/slide.component';
import { scrollEA } from '../../../services/event';
import SliderAboutUs from 'app/components/AboutUs/slider.component';
import SliderFacts from 'app/components/Facts/SliderFacts';
import SliderTestimonials from 'app/components/Testimonials/SliderTestimonials';
import SliderFeatured from 'app/components/FeaturedTechnologies/SliderFeatured';
import SliderTechnologies from 'app/components/Technologies/SliderTechnologies';

export function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    scrollEA('data-scroll');
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
          <SliderWorks>
            {Works.map((item) => (
              <Slide item={item} />
            ))}
          </SliderWorks>
        </Article>

        <Article
          id="aboutUs"
          title="About Us"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderAboutUs />
        </Article>

        <Article
          id="facts"
          title="Some interesting facts"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderFacts />
        </Article>

        <Article
          data-scrolling="technologies"
          id="technologies"
          title="Technologies"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderTechnologies />
        </Article>

        <Article
          id="tetimonials"
          title="Testimonials"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderTestimonials />
        </Article>

        <Article
          id="featured"
          title="Featured Technologies"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderFeatured />
        </Article>

        <Article id="Contacts" title="Contacts">
          <Form />
        </Article>
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
