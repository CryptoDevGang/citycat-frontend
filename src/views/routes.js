import React from 'react';

import {
  WebBasic as WebBasicView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';
import SalePage from "./SalePage";
import AboutPage from "./About";
import Roadmap from "./Roadmap/Roadmap";
import TeamPage from "./Team";
import ComingsoonPage from "./Comingsoon";

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/sale',
    renderer: (params = {}) => <SalePage {...params} />,
  },
  {
    path: '/abouts',
    renderer: (params = {}) => <AboutPage {...params} />,
  },
  {
    path: '/test',
    renderer: (params = {}) => <WebBasicView {...params} />,
  },
  {
    path: '/comingsoon',
    renderer: (params = {}) => <ComingsoonPage {...params} />,
  },
  {
    path: '/roadmap',
    renderer: (params = {}) => <Roadmap {...params} />,
  },
  {
    path: '/teams',
    renderer: (params = {}) => <TeamPage {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
