import React, {useEffect, useState} from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import {About, MobileAbout} from "../About/components";
import Typography from "@mui/material/Typography";
import {CardContent, Divider, Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import Card from "@mui/material/Card";
import {useConnect} from "../../connect/auth";
import {useSelector} from "../../store";
import {setConnected} from "../../slices/connect";
import {useDispatch} from "react-redux";


const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
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

const doMint = (mintCount) => {
  alert('do Mint!!!' + mintCount)
}

const SalePage = () => {
  const theme = useTheme();
  const width870 = useMediaQuery('(max-width:870px)');
  const [mintCount, setMintCount] = useState(3);
  const {handleOpenAuth, handleSignOut} = useConnect();
  const { connected } = useSelector((state) => state.connect);
  const dispatch = useDispatch();
  const {authOptions, userSession} = useConnect()

  useEffect(() => {
    dispatch(setConnected(userSession.isUserSignedIn()))
  }, [userSession])

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
          </Box>
          <Box sx={{backgroundColor: "#1d1270", padding: "60px 0px"}}>
            <Grid container>
              <Grid xs={12} md={6} item>
                <img style={{width: "60%", display: "block", margin: "0px auto"}} src={"/sale/gatcha.png"}/>
              </Grid>
              <Grid xs={12} md={6} item>
                <Card sx={{width: "95%", margin: "auto auto"}}>
                  <CardContent>
                    <Box>
                      <Box>
                        <Typography sx={{color: "#1d1270", fontWeight: "bold"}} variant="h3">
                          Sale Info_
                        </Typography>
                        <Typography mt={1} mb={1} sx={{color: "#1d1270", fontWeight: "bold"}} variant="h5">
                          Price: 50 STX Per CityCats NFT.
                        </Typography>
                      </Box>
                      <Divider sx={{backgroundColor: "white"}}/>
                      <Box mt={4} mb={4}>
                        <Typography mb={3} sx={{color: "#1d1270", fontWeight: "bold"}} variant="h4">
                          NFT Sale Info
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={100}/>
                      </Box>
                      <Divider sx={{backgroundColor: "white"}}/>
                      <Box mt={3} sx={{display: "flex", flexWrap: "nowrap", gap: width870 ? "0px" : "50px", padding: width870? "0px 0px" : "10px 30px"}}>
                        <Button sx={{
                          minHeight: "71px",
                          flexGrow: 1,
                          backgroundImage: "url('/sale/mint1.png')",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat"
                        }} onClick={() => {setMintCount(1)}}
                        />
                        <Button sx={{
                          minHeight: "71px",
                          flexGrow: 1,
                          backgroundImage: "url('/sale/mint2.png')",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat"
                        }} onClick={() => {setMintCount(2)}}
                        />
                        <Button sx={{
                          minHeight: "71px",
                          flexGrow: 1,
                          backgroundImage: "url('/sale/mint3.png')",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat"
                        }} onClick={() => {setMintCount(3)}}/>
                        <Button sx={{
                          minHeight: "71px",
                          flexGrow: 1,
                          backgroundImage: "url('/sale/mint4.png')",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat"
                        }} onClick={() => {setMintCount(4)}}/>
                        <Button sx={{
                          minHeight: "71px",
                          flexGrow: 1,
                          backgroundImage: "url('/sale/mint5.png')",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat"
                        }} onClick={() => {setMintCount(5)}}/>
                      </Box>
                      <Box mt={3}>
                        <Typography sx={{textAlign: "center"}} variant={"h5"}>
                          {mintCount}
                        </Typography>
                      </Box>
                      <Box mt={2} sx={{width: "100%", textAlign: "center"}}>
                        <Button
                          variant={"contained"}
                          sx={{
                            backgroundColor: "#663ff1",
                            padding: width870 ? "0px 0px" : "10px 20px",
                            fontSize: width870 ? "1rem" : "20px",
                            fontWeight: "bold",
                            minWidth: width870? "50%" : "15%",
                            color: "white"
                          }}
                          onClick={() => {
                            if(!connected){
                              handleOpenAuth()
                            }else{
                              doMint(mintCount)
                            }
                          }}
                        >
                          {connected ? "MINT" : "CONNECT"}
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
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
