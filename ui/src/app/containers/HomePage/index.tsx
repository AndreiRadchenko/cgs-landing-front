import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Technology, SocialList, Nav } from '../../../consts/lists';

import Header from '../../components/shared/Header/header.component';
import Footer from '../../components/shared/Footer/footer.component';
import Home from '../../components/HomeSection/home.component';
import Form from '../../components/shared/Form/form.component';
import Article from '../../components/Article/article.component';
import Technologies from '../../components/Technologies/technologies.component';

import Slider from '../../components/shared/Slider/slider.component';
import ProjectCard from '../../components/shared/ProjectCard/projectCard.component';
import SliderTestimonials from '../../components/shared/SliderTestimonials/Slider.component';
import Slide from '../../components/shared/SliderTestimonials/Slide/slide.component';
import { slides } from '../../components/shared/SliderTestimonials/slides';

import Web from '../../img/web.svg';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header socialList={SocialList} navigation={Nav}></Header>
      <div className="main-wraper">
        <Home id="home" />
        <Article
          id="code"
          title="Our code"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. "
        />
        <SliderTestimonials>
          <Slide
            person1={{
              name: 'Alexei Samoilenko',
              position: 'Senior',
              img: slides.developer1,
            }}
            person2={{
              name: 'Alexei Timoshenko',
              position: 'Middle',
              img: slides.developer2,
            }}
            background={'#0C1033'}
            title={'Our javascript developers'}
          />
          <Slide
            person1={{
              name: 'Alexei Samoilenko',
              position: 'Middle',
              img: slides.boss,
            }}
            background={'#0C1033'}
            title={'Our javascript developers'}
            description={
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam."'
            }
          />
        </SliderTestimonials>
        <Article
          id="portfolio"
          title="Portfolio"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
        />
        <Slider>
          <ProjectCard
            title={'HomeWork1'}
            projectImg={{ img: Web, width: '100%' }}
            technologies={['React', 'Node']}
            background={'#42a5f5'}
          >
            <span>JONI NODEJS</span>
            <span>HELLO JONI</span>
          </ProjectCard>

          <ProjectCard
            title={'HomeWork2'}
            projectImg={{ img: Web, width: '100%' }}
            technologies={['React', 'Node']}
            background={'pink'}
          >
            <span>DANA NODEJS</span>
            <span>HELLO DANA</span>
          </ProjectCard>

          <ProjectCard
            title={'LiveOff'}
            projectImg={{ img: Web, width: '100%' }}
            technologies={['React', 'Node']}
            background={'yellow'}
          >
            <span>JAVA NODEJS</span>
            <span>HELLO JAVA</span>
          </ProjectCard>

          <ProjectCard
            title={'Technologies'}
            projectImg={{ img: Web, width: '100%' }}
            technologies={['React', 'Node']}
            background={'green'}
          >
            <span>PONI NODEJS</span>
            <span>PONI JAVA</span>
          </ProjectCard>

          <ProjectCard
            title={'SunPower'}
            projectImg={{ img: Web, width: '100%' }}
            technologies={['React', 'Node']}
            background={'black'}
          >
            <span>PONI NODEJS</span>
            <span>BLACK JAVA</span>
          </ProjectCard>
        </Slider>
        <Article id="technologies" title="Technologies">
          <Technologies technologies={Technology} />
        </Article>
        <Article id="form" title="Contact">
          <Form />
        </Article>
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
