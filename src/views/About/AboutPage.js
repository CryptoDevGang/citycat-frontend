import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About, MobileAbout
} from './components';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const AboutPage = () => {
  const theme = useTheme();
  const width870 = useMediaQuery('(max-width:870px)');

  return (
    <Main>
      <Container>
        {
          width870 ? <MobileAbout isSale={false}/>
            :
            <About isSale={false}/>
        }
      </Container>
    </Main>
  );
};

export default AboutPage;
