import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {ReactComponent as ComingSoonBackground} from '../../assets/coming-soon.svg';
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
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const WebBasic = () => {
  const theme = useTheme();
  const width600 = useMediaQuery('(max-width:870px)');
  const width300 = useMediaQuery('(max-width:600px)');

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
          {/*<img style={{width: "100%", height: "100vh", objectPosition: "center"}} src={"/coming-soon.jpg"}/>*/}
          <ComingSoonBackground sx={{width: "100%", height: "100%"}}/>
          {width600 ?
            <Box sx={{height: "500px", background: "#222222", textAlign: "center"}}>
              <Box>
                <img style={{marginTop: "150px", width: "240px"}} src={'/city_cats_logo.svg'}/>
              </Box>
              <Box mt={1} sx={{display: "flex", justifyContent: "center"}}>
                <Box mr={2} sx={{alignSelf: "center"}}>
                  <a href={"https://twitter.com/Hollycat_box"} target={"_blank"}>
                    <img style={{height: "40px"}} src={"/twitter_logo.png"}/>
                  </a>
                </Box>
                <Box sx={{alignSelf: "center"}}>
                  <a href={"https://discord.gg/HezwYHvece"} target={"_blank"}>
                    <img style={{height: "40px"}} src={"/discord.png"}/>
                  </a>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography sx={{fontSize: "11px"}} color={"white"}>Copyright © 2022 City Cats.</Typography>
              </Box>
            </Box> :
            <></>}
          {/*<CityBackgroundSvg/>*/}
        </Container>
      </Box>
    </Main>
  );
};

export default WebBasic;
