import React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import {About, MobileAbout} from "../About/components";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(to right, #7f00ff, #e100ff)',
  },
}));

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
                padding: width870 ? "0px 0px" : "10px 20px",
                fontSize: width870 ? "0.5rem" : "25px",
                fontWeight: "bold",
                minWidth: "15%",
                color: "white"
              }}>
                Mint
              </Button>
            </Box>
          </Box>
          <Box sx={{backgroundColor: "#8459ff", padding: "60px 0px"}}>
            <Container maxWidth="1200px" sx={{border: "1px solid white", padding: "30px 50px"}}>
              <Box>
                <Typography sx={{color: "white"}} variant="h3">
                  Sale Info
                </Typography>
                <Typography sx={{color: "white"}} variant="h4">
                  Price: 50 STX
                </Typography>
              </Box>
              <Divider sx={{backgroundColor: "white"}}/>
              <Box mt={4} mb={4}>
                <Typography mb={3} sx={{color: "white"}} variant="h5">
                  NFT Sale Info
                </Typography>
                <BorderLinearProgress variant="determinate" value={100}/>
              </Box>
              <Divider sx={{backgroundColor: "white"}}/>
              <Box mt={3} sx={{display: "flex", flexWrap: "wrap", gap: "50px"}}>
                <Button sx={{flexGrow: 1, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>1</Button>
                <Button sx={{flexGrow: 1, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>2</Button>
                <Button sx={{flexGrow: 1, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>3</Button>
                <Button sx={{flexGrow: 1, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>4</Button>
                <Button sx={{flexGrow: 1, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>5</Button>
                <Button sx={{flexGrow: 2, backgroundColor: "#6200ff", fontSize: "1.3rem"}} variant={"contained"}>Mint</Button>
              </Box>
            </Container>
          </Box>
          {
            width870 ? <MobileAbout isSale={true}/>
              :
              <About isSale={true}/>
          }

        </Container>
      </Box>
    </Main>
  );
};

export default SalePage;
