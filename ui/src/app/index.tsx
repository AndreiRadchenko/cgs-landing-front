/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    ReactGA.initialize('UA-175242489-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Code Generation Software"
        defaultTitle="Code Generation Software"
      >
        <meta name="description" content="Code Generation Software" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
