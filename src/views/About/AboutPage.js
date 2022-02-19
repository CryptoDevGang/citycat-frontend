import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About
} from './components';

const AboutPage = () => {
  return (
    <Main colorInvert={true}>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <About />
      </Container>
    </Main>
  );
};

export default AboutPage;
