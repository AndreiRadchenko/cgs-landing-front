import React from 'react';
import { SocialList, Nav } from '../../../consts/lists';
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
import MainLayout from 'app/components/Layout/Layout';

export function HomePage({ props }) {
  React.useEffect(() => {
    scrollEA('data-scroll');
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
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
            >
              <SliderWorks>
                {props.projects.map((item) => (
                  <Slide item={item} key={item.id} />
                ))}
              </SliderWorks>
            </Article>
          )}
          {props.workers && (
            <Article
              id="aboutUs"
              title="About Us"
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
            >
              <SliderAboutUs workers={props.workers} />
            </Article>
          )}
          {props.facts && (
            <Article
              id="facts"
              title="Some interesting facts"
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
            >
              <SliderFacts facts={props.facts} />
            </Article>
          )}
          {props.technologies && (
            <Article
              data-scrolling="technologies"
              id="technologies"
              title="Technologies"
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
            >
              <SliderTechnologies technologies={props.technologies} />
            </Article>
          )}
          {props.testimonials && (
            <Article
              id="tetimonials"
              title="Testimonials"
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
            >
              <SliderTestimonials testimonials={props.testimonials} />
            </Article>
          )}
          {props.featuredTechnologies && (
            <Article
              id="featured"
              title="Featured Technologies"
              desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
            >
              <SliderFeatured
                featuredTechnologies={props.featuredTechnologies}
              />
            </Article>
          )}
          <Article id="Contacts" title="New text for contact form">
            <Form />
          </Article>
        </div>
      </MainLayout>
    </>
  );
}
