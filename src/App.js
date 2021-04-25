import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Router from './components/Router';

import content from './data/content.js';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header content={content} />
      <Suspense fallback={'Loading...'}>
        <Router content={content} />
      </Suspense>
    </BrowserRouter>
  );
}
