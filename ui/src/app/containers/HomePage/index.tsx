import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Technology, SocialList, Nav } from '../../../consts/lists';

import Header from '../../components/shared/Header/header.component';
import Footer from '../../components/shared/Footer/footer.component';
import Home from '../../components/HomeSection/home.component';
import Form from '../../components/shared/Form/form.component';
import Article from '../../components/Article/article.component';
import Technologies from '../../components/Technologies/technologies.component';

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
          children={
            <div
              style={{ width: ' 50px', height: '500px', background: 'pink' }}
            >
              Akuna Matata
            </div>
          }
        />
        <Article
          id="portfolio"
          title="Portfolio"
          desc="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. "
          children={
            <div
              style={{
                width: ' 50px',
                height: '500px',
                background: 'lightgreen',
              }}
            >
              Akuna Matata
            </div>
          }
        />
        <Article
          id="technologies"
          title="Technologies"
          children={<Technologies technologies={Technology} />}
        />
        <Article id="form" title="Contact" children={<Form />} />
      </div>
      <Footer socialList={SocialList} fill="white" />
    </>
  );
}
/* Mockups-03 */
