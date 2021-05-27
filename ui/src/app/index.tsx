/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useParams,
} from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import Header from './components/shared/Header/header.component';

import { HomePage } from './containers/HomePage/Loadable';
import { BlogPage } from './containers/BlogPage/Loadable';
import { ContactPage } from './containers/ContactPage/Loadable';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { SocialList, Nav } from '../consts/lists';

export function App() {
  useEffect(() => {
    ReactGA.initialize('UA-175242489-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Code Generation Software"
        defaultTitle="Code Generation Software"
      >
        <meta name="description" content="Code Generation Software" />
      </Helmet>
      <Header
        activeIndex={activeIndex}
        socialList={SocialList}
        navigation={Nav}
        setActiveIndex={setActiveIndex}
      />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
