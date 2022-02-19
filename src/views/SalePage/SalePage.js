import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {About, MobileAbout} from "../About/components";

const SalePage = () => {
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
        <Container>
          <Box sx={{display: "flex", position: "relative"}}>
            <img style={{width: '100%'}} src={"/sale_background.jpeg"}/>
            <Box sx={{width: "100%", position: "absolute", bottom: "20%", right: "auto", textAlign: "center"}}>
              <Button sx={{
                backgroundImage: "url('/button_background_purple.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                padding: width870? "0px 0px" : "10px 20px",
                fontSize: width870? "0.5rem" : "25px",
                fontWeight: "bold",
                minWidth: "15%",
                color: "white"
              }}>
                Mint
              </Button>
            </Box>
          </Box>
          {
            width870 ? <MobileAbout/>
              :
              <About/>
          }

        </Container>
      </Box>
    </Main>
  );
};

export default SalePage;
