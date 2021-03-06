import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '../src/store/index';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import './App.css'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Page>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Page>
    </ReduxProvider>
  );
};

export default App;
