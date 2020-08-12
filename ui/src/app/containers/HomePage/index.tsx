import React from 'react';
import { Helmet } from 'react-helmet-async';
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
import Mobile from '../../img/mobile.svg';
import Backend from '../../img/backend.svg';
import UIUX from '../../img/ui-ux.svg';

export function HomePage() {
  const technologies = [
    {
      type: 'Web',
      technologies: ['React', 'Angular', 'Vue'],
      image: Web,
    },
    {
      type: 'Mobile',
      technologies: ['React Native', 'Dart/Flutter'],
      image: Mobile,
    },
    {
      type: 'Backend',
      technologies: [
        'Node',
        'Express',
        ' Sequelize',
        'AWS',
        'MongoDB',
        ' MySQL',
        'Docker',
      ],
      image: Backend,
    },
    {
      type: 'UI/UX',
      technologies: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe XD',
        'Abstract',
        'Figma',
        'Sketch',
        'Principle',
        'Zeplin',
      ],
      image: UIUX,
    },
  ];
  const socialList = [
    {
      link: 'github.com',
      src: [
        'M16.29 0C7.29 0 0 7.29 0 16.29C0 23.49 4.67 29.59 11.14 31.75C11.95 31.9 12.25 31.4 12.25 30.96C12.25 30.57 12.24 29.55 12.23 28.19C7.7 29.17 6.74 26.01 6.74 26.01C6 24.13 4.93 23.62 4.93 23.62C3.45 22.61 5.04 22.63 5.04 22.63C6.67 22.75 7.54 24.31 7.54 24.31C8.99 26.8 11.35 26.08 12.28 25.66C12.43 24.61 12.85 23.89 13.31 23.48C9.7 23.08 5.9 21.68 5.9 15.44C5.9 13.66 6.53 12.21 7.58 11.07C7.41 10.65 6.85 9 7.73 6.76C7.73 6.76 9.1 6.32 12.21 8.43C13.51 8.07 14.9 7.89 16.29 7.88C17.67 7.89 19.07 8.07 20.37 8.43C23.48 6.32 24.85 6.76 24.85 6.76C25.74 9 25.18 10.66 25.01 11.07C26.05 12.21 26.68 13.66 26.68 15.44C26.68 21.7 22.87 23.07 19.24 23.48C19.82 23.98 20.35 24.98 20.35 26.5C20.35 28.68 20.33 30.43 20.33 30.97C20.33 31.41 20.62 31.91 21.45 31.75C27.92 29.59 32.58 23.49 32.58 16.3C32.58 7.29 25.29 0 16.29 0Z',
      ],
    },
    {
      link: 'upwork.com',
      src: [
        'M34.7966 2.71343C29.9728 2.73558 26.305 5.91417 24.9341 10.9792C22.6297 7.44993 20.8328 3.41117 19.8028 0L14.7271 0.0258422L14.7901 13.4342C14.8012 16.0886 12.6523 18.252 9.98847 18.263C7.32463 18.2741 5.15355 16.1329 5.14243 13.4785L5.07945 0.0701431L0 0.0922935L0.0629837 13.5007C0.0889182 19.0641 4.55335 23.4721 10.0107 23.4462C15.4718 23.4204 19.8917 18.9718 19.8658 13.4084L19.8547 11.1306C20.8772 13.15 22.1591 15.2912 23.5633 17.185L20.4586 32L25.6603 31.9742L27.8981 21.2127C29.9358 22.4679 32.2217 23.2174 34.8856 23.2026C40.4726 23.1767 45.0222 18.6027 44.9926 12.7845C44.9741 7.21735 40.38 2.68759 34.7966 2.71343ZM34.867 18.0194C32.8367 18.0305 30.8027 17.1518 29.1466 15.7674L29.6431 13.7443V13.6151C30.0136 11.4629 31.1399 7.78957 34.9448 7.77111C37.7458 7.76742 40.0243 10.0157 40.0465 12.8066C39.9354 15.7157 37.5346 18.0046 34.867 18.0194Z',
      ],
    },
    {
      link: 'circleci.com',
      src: [
        'M21.7601 22.7419C20.1602 24.2036 18.0799 25.0156 15.8401 25.0156C10.72 25.0156 7.03986 21.2797 7.03986 15.9198C7.03986 10.5598 10.72 6.98637 15.8401 6.98637C18.0799 6.98637 20.1602 7.63599 21.7601 9.26005L22.88 10.2345L27.68 5.36176L26.5601 4.22492C23.5199 1.62751 19.8402 0.00290676 15.8401 0.00290676C6.71989 -0.159499 0 6.4997 0 15.9203C0 25.0162 6.87988 32.0002 15.8401 32.0002C20.0002 32.0002 23.8399 30.5385 26.8801 27.7771L28 26.6402L22.88 21.4427L21.7601 22.7419Z',
        'M15.5201 21.4436C18.4362 21.4436 20.8002 19.0439 20.8002 16.0837C20.8002 13.1235 18.4362 10.7237 15.5201 10.7237C12.6041 10.7237 10.2401 13.1235 10.2401 16.0837C10.2401 19.0439 12.6041 21.4436 15.5201 21.4436Z',
      ],
    },
    {
      link: 'linledin.com',
      src: [
        'M32 28.8013C32 30.5689 30.5557 32 28.7745 32H3.2255C1.44431 32 0 30.5671 0 28.8013V3.19871C0 1.43289 1.44431 0 3.2255 0H28.7745C30.5576 0 32 1.43289 32 3.19871V28.8013Z',
        'M10.2878 7.82481C10.2878 9.00018 9.41958 9.95299 7.99221 9.95299C6.64945 9.95299 5.78125 9.00018 5.78125 7.82481C5.78125 6.62184 6.67704 5.69662 8.04923 5.69662C9.41958 5.69662 10.2602 6.62 10.2878 7.82481ZM5.89345 25.3193V11.6305H10.148V25.3193H5.89345Z',
        'M12.6937 15.9972C12.6937 14.2903 12.6385 12.8629 12.5815 11.6305H16.2768L16.4736 13.5343H16.5583C17.1174 12.6385 18.4896 11.3233 20.7852 11.3233C23.5848 11.3233 25.6835 13.1995 25.6835 17.2296V25.3193H21.429V17.7336C21.429 15.9697 20.8128 14.7667 19.2732 14.7667C18.0978 14.7667 17.3989 15.5779 17.0898 16.3614C16.9776 16.641 16.9501 17.0328 16.9501 17.4246V25.3193H12.6937V15.9972Z',
      ],
    },
  ];
  const nav = [
    {
      title: 'Home',
      link: '#home',
    },
    {
      title: 'Our Code',
      link: '#code',
    },
    {
      title: 'Portfolio',
      link: '#portfolio',
    },
    {
      title: 'Technologies',
      link: '#technologies',
    },
    {
      title: 'Contact',
      link: '#form',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header socialList={socialList} navigation={nav}></Header>
      <div className="main-wraper">
        <Home id="home" />
        <Article
          id="code"
          title="Our code"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
          children={<SliderTestimonials>
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
          </SliderTestimonials>}
        />
        <Article
          id="portfolio"
          title="Portfolio"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. "
          children={
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
          }
        />
        <Article
          id="technologies"
          title="Technologies"
          children={<Technologies technologies={technologies} />}
        />
        <Article id="form" title="Contact" children={<Form />} />
      </div>
      <Footer socialList={socialList} fill="white" />
    </>
  );
}
/* Mockups-03 */
