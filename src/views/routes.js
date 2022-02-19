import React from 'react';

import {
  WebBasic as WebBasicView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';
import SalePage from "./SalePage";

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
    path: '/test',
    renderer: (params = {}) => <WebBasicView {...params} />,
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
