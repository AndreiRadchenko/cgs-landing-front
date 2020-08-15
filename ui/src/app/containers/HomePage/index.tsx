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
import unknown from '../../img/unknown.jpeg';
import americaFlag from '../../img/americaFlag.jpg';

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
      <Header socialList={SocialList} navigation={Nav} />
      <div className="main-wraper">
        {/* <span>HomePage container1</span> */}
        <Home id="home" />
        <Article
          id="code"
          title="Our Team"
          desc="We do not just hire employees. We bring talent and professionalism together."
        >
          <SliderTestimonials>
            <Slide
              person1={{
                name: 'Oleksii Samoilenko',
                position: 'CEO',
                img: slides.CEO,
              }}
              description={
                '“It is highly important to understand that a person who needs your service is not just a customer. It is all about trust and reliability.\n' +
                'You should support your client in all the possible aspects, from initial requirements to final testing.”'
              }
              background={'#0C1033'}
              title={'The main principle'}
            />
            <Slide
              person1={{
                name: 'Danyyl Kuchkov',
                position: 'CTO',
                img: slides.CTO,
              }}
              description={`“High level product is not something, that comes from a plain code writing. It is all about combining experience, skills and passion.
                  Be professionals from the first line of code to the final deployment.”`}
              background={'#0C1033'}
              title={'Quality'}
            />
            <Slide
              person1={{
                name: 'Khrystyna Vysochina',
                position: 'Chief Project Manager',
                img: slides.CPM,
              }}
              description={`“Reputation is built through enormous efforts. Every detail, every action makes its own contribution into the whole picture.
                  Always do your best, to be proud of the final result.”`}
              background={'#0C1033'}
              title={'Reputation'}
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
          title="Feedbacks"
          desc="The most recent feedbacks from our clients"
        >
          <SliderTestimonials>
            <Slide
              person1={{
                name: 'RabI Boundi',
                position: 'Happy client',
                img: slides.unknown,
                country: { name: 'Spain', img: slides.flagSpain },
              }}
              description={
                '“Excellent work! Good communication in English, all requirements were correctly implemented, on time, and according to the specification.\n' +
                'Will hire again in the future. Highly recommended!”'
              }
              background={'#0C1033'}
              title={'Space Impulse'}
            />
            <Slide
              person1={{
                name: 'Pratibha Sharma',
                position: 'Happy client',
                img: slides.unknown,
                country: { name: 'India', img: slides.indiaFlag },
              }}
              description={
                '“Very sincere, professional and cooperative team. Analyses the business requirements and provides on time feedback and support to improve features. They have done a good job so far and looking forward to rehiring them again.”'
              }
              background={'#0C1033'}
              title={'LiveOfficially'}
            />

            <Slide
              person1={{
                name: 'Vincent McLoughlin',
                position: 'Happy client',
                img: slides.unknown,
                country: { name: 'USA', img: slides.americaFlag },
              }}
              description={
                '“It was such a pleasure to work with them. I did not even expect to get such a beatiful work!”'
              }
              background={'#0C1033'}
              title={'CIVIQ'}
            />
          </SliderTestimonials>
        </Article>
        <Article id="Contacts" title="Contacts">
          <Form />
        </Article>
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
