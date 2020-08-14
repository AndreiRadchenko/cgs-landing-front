import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Technology, SocialList, Nav } from '../../../consts/lists';

import Header from '../../components/shared/Header/header.component';
import Footer from '../../components/shared/Footer/footer.component';
import Home from '../../components/HomeSection/home.component';
import Form from '../../components/shared/Form/form.component';
import Article from '../../components/Article/article.component';
import Technologies from '../../components/Technologies/technologies.component';

import SliderTestimonials from '../../components/shared/SliderTestimonials/Slider.component';
import Slide from '../../components/shared/SliderTestimonials/Slide/slide.component';
import { slides } from '../../img';
import SliderPortfolio from '../../components/shared/SliderPortfolio/slider.component';

import { scrollEA } from '../../../services/event';

export function HomePage() {
  React.useEffect(() => {
    scrollEA('data-scroll');
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header socialList={SocialList} navigation={Nav}></Header>
      <div className="main-wraper">
        {/* <span>HomePage container1</span> */}
        <Home id="home" />
        <Article
          id="our-code"
          title="Our code"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. "
        >
          <SliderTestimonials>
            <Slide
              person1={{
                name: 'Alexei Samoilenko',
                position: 'Big Boss',
                img: slides.boss,
              }}
              description={
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”'
              }
              background={'#0C1033'}
              title={'The main principle'}
            />
            <Slide
              person1={{
                name: '1st Fullstack hero',
                position: 'Senior',
                img: slides.developer1,
              }}
              person2={{
                name: '2nd React wizard',
                position: 'Middle',
                img: slides.developer2,
              }}
              background={'#0C1033'}
              title={'Our javascript developers'}
            />
            <Slide
              person1={{
                name: 'Alexei Samoilenko',
                position: 'Big Boss',
                img: slides.boss,
              }}
              description={
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”'
              }
              background={'#0C1033'}
              title={'The main principle'}
            />
            <Slide
              person1={{
                name: '1st Fullstack hero',
                position: 'Senior',
                img: slides.developer1,
              }}
              person2={{
                name: '2nd React wizard',
                position: 'Middle',
                img: slides.developer2,
              }}
              background={'#0C1033'}
              title={'Our javascript developers'}
            />
          </SliderTestimonials>
        </Article>
        <Article
          id="portfolio"
          title="Portfolio"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
        >
          <SliderPortfolio />
        </Article>
        <Article
          data-scrolling="technologies"
          id="technologies"
          title="Technologies"
          children={<Technologies technologies={Technology} />}
        />
        <Article
          id="Testimonials"
          title="Testimonials"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua."
        >
          <SliderTestimonials>
            <Slide
              person1={{
                name: 'John Doe',
                position: 'Happy client',
                img: slides.clientSpain,
                country: { name: 'Spain', img: slides.flagSpain },
              }}
              description={
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”'
              }
              background={'#0C1033'}
              title={'First testimonial'}
            />
            <Slide
              person1={{
                name: '1st Fullstack hero',
                position: 'Senior',
                img: slides.developer1,
              }}
              person2={{
                name: '2nd React wizard',
                position: 'Middle',
                img: slides.developer2,
              }}
              background={'#0C1033'}
              title={'Our javascript developers'}
            />
            <Slide
              person1={{
                name: 'Alexei Samoilenko',
                position: 'Big Boss',
                img: slides.boss,
              }}
              description={
                '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”'
              }
              background={'#0C1033'}
              title={'The main principle'}
            />
            <Slide
              person1={{
                name: '1st Fullstack hero',
                position: 'Senior',
                img: slides.developer1,
              }}
              person2={{
                name: '2nd React wizard',
                position: 'Middle',
                img: slides.developer2,
              }}
              background={'#0C1033'}
              title={'Our javascript developers'}
            />
          </SliderTestimonials>
        </Article>
        <Article title="Contacts">
          <Form />
        </Article>
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
