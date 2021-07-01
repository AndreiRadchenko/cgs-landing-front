import React from "react";
import Home from "../../components/HomeSection/home.component";
import Form from "../../components/shared/Form/form.component";
import Article from "../../components/Article/article.component";
import { scrollEA } from "../../../services/event";
import { ProjectsSlider } from "app/components/Projects/Slider";
import SliderAboutUs from "app/components/AboutUs/slider.component";
import SliderFacts from "app/components/Facts/SliderFacts";
import SliderTestimonials from "app/components/Testimonials/SliderTestimonials";
import SliderFeatured from "app/components/FeaturedTechnologies/SliderFeatured";
import SliderTechnologies from "app/components/Technologies/SliderTechnologies";
import MainLayout from "app/components/Layout/Layout";

export const HomePage = ({ props }) => {
  React.useEffect(() => {
    scrollEA("data-scroll");
  }, []);

  return (
    <>
      <MainLayout title="Home">
        <div className="main-wraper">
          {props.slogan && <Home id="home" slogan={props.slogan} />}
          {props.projects && (
            <Article
              id="code"
              title="Our Latest Works"
              desc={"Actions speak louder than words – our completed projects demonstrate our experience and skills the best! Take a look to see it for yourself"}
            >
              <ProjectsSlider projects={props.projects} />
            </Article>
          )}
          {props.workers && (
            <Article
              id="aboutUs"
              title="About Us"
              desc={"Our team consists of 40+ members: developers, designers, QA-testers and more!\nIt is a space where everyone feels equally involved in and supported."}
            >
              <SliderAboutUs workers={props.workers} />
            </Article>
          )}
          {props.facts && (
            <Article
              id="facts"
              title="Benefits of working with us:"
              desc={"The impression we leave is very important to us. That is why we provide our clients with only high quality work, but also with some FREE bonuses."}
            >
              <SliderFacts facts={props.facts} />
            </Article>
          )}
          {props.technologies && (
            <Article
              data-scrolling="technologies"
              id="technologies"
              title="Our technical stack"
              desc={"We are knowledgeable of the latest versions of our stack and modern coding practices,\nso we can cover all aspects of your project’s execution."}
            >
              <SliderTechnologies technologies={props.technologies} />
            </Article>
          )}
          {props.testimonials && (
            <Article
              id="tetimonials"
              title="Feedback of our clients"
              desc="Without any further words —  just take a look at it!"
            >
              <SliderTestimonials testimonials={props.testimonials} />
            </Article>
          )}
          {props.featuredTechnologies && (
            <Article
              id="featured"
              title="Featured Technologies"
              desc={"We have an enormous experience in software development,\nso we can implement anything you want us to do!"}
            >
              <SliderFeatured
                featuredTechnologies={props.featuredTechnologies}
              />
            </Article>
          )}
          <Article id="contact"
            title="Your project is one of the kind and we will never use “templates” to build it"
            desc="Just leave your contact info here and we will offer you a personalized solution"
          >
            <Form />
          </Article>
        </div>
      </MainLayout >
    </>
  );
};
