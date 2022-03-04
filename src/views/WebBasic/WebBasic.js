import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {ReactComponent as ComingSoonBackground} from '../../assets/coming-soon.svg';
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import {CityBackgroundSvg} from "../../components/CityBackgroundSvg";
import {CityBackgroundSvgOn} from "../../components/CityBackgroundSvgOn";

const WebBasic = () => {
  const theme = useTheme();
  const width870 = useMediaQuery('(max-width:870px)');

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
        <Container sx={{backgroundColor: "#222222"}}>
          {/*<img style={{width: "100%", height: "100vh", objectPosition: "center"}} src={"/coming-soon.jpg"}/>*/}
          {window.location.pathname === '/test' ?
              <CityBackgroundSvg/>
            : <ComingSoonBackground/>
          }
          {width870 ?
            <Box mt={-3} sx={{height: "500px", background: "#222222", textAlign: "center"}}>
              <Box>
                <img style={{marginTop: "150px", width: "240px"}} src={'/city_cats_logo.svg'}/>
              </Box>
              <Box mt={1} sx={{display: "flex", justifyContent: "center"}}>
                <Box mr={2} sx={{alignSelf: "center"}}>
                  <a href={"https://twitter.com/citycatsworld"} target={"_blank"}>
                    <img style={{height: "30px"}} src={"/twitter_logo.png"}/>
                  </a>
                </Box>
                <Box sx={{alignSelf: "center"}}>
                  <a href={"https://discord.gg/HezwYHvece"} target={"_blank"}>
                    <img style={{height: "35px"}} src={"/discord.png"}/>
                  </a>
                </Box>
              </Box>
              <Box mt={2}>
                <Typography sx={{fontSize: "11px"}} color={"white"}>Copyright © 2022 City Cats.</Typography>
              </Box>
            </Box> :
            <></>}
        </Container>
      </Box>
    </Main>
  );
};

export default WebBasic;
