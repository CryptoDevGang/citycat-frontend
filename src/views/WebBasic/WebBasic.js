import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Contact,
  Faq,
  Features,
  Hero,
  Partners,
  Pricings,
  Reviews,
  Services,
  Users,
  PromoNumbers
} from './components';
import {CityBackgroundSvg} from "../../components/CityBackgroundSvg";
import * as url from "url";

const WebBasic = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <img style={{width: "100%", height: "100vh", objectPosition: "center"}} src={"/coming-soon.jpg"}/>
          {/*<CityBackgroundSvg/>*/}
        </Container>
      </Box>
    </Main>
  );
};

export default WebBasic;
