import React, {useEffect, useRef, useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import {About, MobileAbout} from "../About/components";
import Typography from "@mui/material/Typography";
import {CardContent, colors, Divider, Grid} from "@mui/material";
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import Card from "@mui/material/Card";
import {useConnect, userSessionState} from "../../connect/auth";
import {useSelector} from "../../store";
import {setConnected} from "../../slices/connect";
import {useDispatch} from "react-redux";
import {callReadOnlyFunction, cvToJSON, uintCV,} from "@stacks/transactions";
import {Connect} from "@stacks/connect-react";
import {StacksMainnet, StacksTestnet} from "@stacks/network";
import MintButton from "../../components/MintButton";
import {useAtomValue} from "jotai";
import {useStxAddresses} from "../../connect/hooks";
import axios from "axios";
import useDraggableScroll from "use-draggable-scroll";
import whitelistJson from "../../data/whitelist.js";


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

const SalePage = () => {
  const theme = useTheme();
  const width870 = useMediaQuery('(max-width:870px)');
  const [mintCount, setMintCount] = useState(3);
  const {handleOpenAuth, handleSignOut} = useConnect();
  const atomUserSession = useAtomValue(userSessionState);
  const {ownerStxAddress} = useStxAddresses(atomUserSession, false);
  const {connected} = useSelector((state) => state.connect);
  const dispatch = useDispatch();
  const {authOptions, userSession} = useConnect()
  const [lastTokenId, setLastTokenId] = useState(0)
  const [cityCats, setCityCats] = useState([])
  const [whitelistHelper, setWhitelistHelper] = useState('');

  const saleRef = useRef();
  const aboutRef = useRef();
  const scrollAreaRef = useRef();
  const {onMouseDown} = useDraggableScroll(scrollAreaRef, {direction: 'horizontal'})

  const contractAddress = 'SP2CV06TQ8B5NXKM6E66VCKYCS9FFDGEB8ZPK6JMR'
  const contractName = 'citycats-nft'

  const getLastTokenId = async () => {
    const functionName = 'get-last-token-id'
    const network = new StacksMainnet()
    const senderAddress = 'SP2CV06TQ8B5NXKM6E66VCKYCS9FFDGEB8ZPK6JMR'

    const options = {
      contractAddress,
      contractName,
      functionName,
      functionArgs: [],
      network,
      senderAddress,
    };

    const result = await callReadOnlyFunction(options)
    const id = cvToJSON(result).value.value;

    return id;
  }

  const getAllowAmountInWhitelist = async(address) => {
    const whitelist = whitelistJson.whitelist;
    console.log('getAllowAmountInWhitelist. address: ' + address);

    if (whitelist) {
      const allowAmount = whitelist[address];

      if (allowAmount !== undefined) {
        return `You have ${Number(allowAmount)} allow amount in whitelist`;
      } else {
        return `You don't have allow amount in whitelist`;
      }
    }

    return '';
  }

  const getCityCatsHoldings = async () => {
    let offset = 0
    let limit = 50
    let results = []
    while(true){
      const nftHoldingApi = `https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=${ownerStxAddress}&offset=${offset}&limit=${limit}`
      const result = await axios.get(nftHoldingApi)
      if(result.data.results.length === 0){
        break;
      }
      results.push(...result.data.results)
      offset += 50
    }

    return results
  }

  useEffect(() => {
    getLastTokenId().then(id => setLastTokenId(id))
  })

  useEffect(() => {
    dispatch(setConnected(userSession.isUserSignedIn()))
  }, [userSession])

  useEffect(() => {
    if (ownerStxAddress) {
      console.log('getAllowAmountInWhitelist');
      getCityCatsHoldings().then(nfts => {
        let cityCatNfts = nfts.filter(nft => nft.asset_identifier === "SP2CV06TQ8B5NXKM6E66VCKYCS9FFDGEB8ZPK6JMR.citycats-nft::CityCats")
          .map(nft => nft.value.repr.replace('u', ''))
        setCityCats(cityCatNfts)
      })
      getAllowAmountInWhitelist(ownerStxAddress).then(helperMessage => setWhitelistHelper(helperMessage));
    }
  }, [ownerStxAddress])

  const getCityCatsImageUrl = (number) => {
    // let url = `https://citycats.world/resource/reveal/${number}.png`
    let url = `https://citycats.world/resource/box/box.png`
    return url;
  }

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
            <img style={{width: '100%'}} src={width870 ? "/sale_background_mo.jpeg" : "/sale_background.jpeg"}/>
            <Box sx={{
              width: "100%",
              position: "absolute",
              bottom: width870 ? "17%" : "20%",
              right: "auto",
              textAlign: "center"
            }}>
              <Button
                onClick={() => {
                  saleRef.current.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"})
                }}
                sx={{
                  backgroundImage: "url('/button_background_purple.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  padding: width870 ? "0px 0px" : "10px 20px",
                  fontSize: width870 ? "1.2rem" : "25px",
                  fontWeight: "bold",
                  minWidth: width870 ? "25%" : "15%",
                  color: "white"
                }}
              >
                Mint
              </Button>
            </Box>
            <Box sx={{
              width: "100%",
              position: "absolute",
              bottom: width870 ? "7%" : "10%",
              right: "auto",
              textAlign: "center"
            }}>
              <Button
                onClick={() => {
                  window.scroll({
                    top: width870 ? aboutRef.current.offsetTop - 100 : aboutRef.current.offsetTop - 70,
                    behavior: "smooth"
                  })
                }}
                sx={{
                  backgroundImage: "url('/button_background_pink.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  padding: width870 ? "0px 0px" : "10px 20px",
                  fontSize: width870 ? "1.2rem" : "25px",
                  fontWeight: "bold",
                  minWidth: width870 ? "25%" : "15%",
                  color: "white"
                }}
              >
                About
              </Button>
            </Box>
            <Box sx={{
              width: "100%",
              position: "absolute",
              bottom: width870 ? "1%" : "2%",
              right: "auto",
              textAlign: "center"
            }}>
              <Typography
                  sx={{
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    padding: width870 ? "0px 0px" : "10px 20px",
                    fontSize: width870 ? "1.0rem" : "25px",
                    fontWeight: "bold",
                    minWidth: width870 ? "25%" : "15%",
                    color: "white"
                  }}
                >
                { whitelistHelper }
              </Typography>
            </Box>
          </Box>
          <Box sx={{backgroundColor: "#111141", padding: "20px 0px"}}>
            <Typography sx={{color: "#ffffff", fontWeight: "bold", textAlign: "center"}}
                        variant="h4">
              WHITELIST-MINT
            </Typography>
            <Typography sx={{color: "#ffffff", fontWeight: "bold", textAlign: "center"}}
                        variant="h6">
              2022/05/04 11:00 ~ 2022/05/06 10:59 EST
            </Typography>
          </Box>
          <Box sx={{backgroundColor: "#1d1e6f", paddingBottom: width870 ? "30px" : "0px"}}>
            <Container maxWidth="xl">
              <Box ref={saleRef}>
                <Grid container sx={{padding: width870 ? "5px 0px" : "50px 0px", alignItems: "center"}}>
                  <Grid xs={12} md={7} item>
                    <img style={{width: "50%", display: "block", margin: "0px auto", marginTop: "40px"}}
                         src={"/sale/gatcha.png"}/>
                  </Grid>
                  <Grid sx={{marginLeft: width870 ? "0px" : "-80px"}} xs={12} md={5} item>
                    <Card sx={{
                      width: "95%",
                      margin: "0 auto",
                      padding: width870 ? "5px 0px" : "30px 30px",
                      backgroundColor: "#1d1270",
                      border: "3px solid white"
                      // boxShadow: width870 ? "0 0px 2px 2px rgb(237 224 255 / 52%)" : "0 0px 5px 4px rgb(237 224 255 / 52%)"
                    }}>
                      <CardContent>
                        <Box>
                          <Box mb={3}>
                            <Typography mb={3} sx={{color: "#ffffff", fontWeight: "bold", textAlign: "center"}}
                                        variant="h4">
                              UNBOX YOUR KITTY!
                            </Typography>
                          </Box>

                          <Divider sx={{backgroundColor: "white"}}/>
                          <Divider sx={{backgroundColor: "white"}}/>
                          <Divider sx={{backgroundColor: "white"}}/>
                          <Box mt={5} ml={"auto"} mr={"auto"} sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            gap: width870 ? "3%" : "3%",
                          }}>
                            <Button
                              sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: width870 ? "20px" : "30px",
                                border: "2px solid white",
                                '&': {
                                  minWidth: "30px",
                                  padding: width870 ? "10px 15px" : "5px 5px",
                                  maxHeight: width870 ? "50px" : "100%"
                                }
                              }}
                              onClick={() => {
                                setMintCount(1)
                              }}
                              variant={"outlined"}
                            >
                              1
                            </Button>
                            <Button
                              sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: width870 ? "20px" : "30px",
                                border: "2px solid white",
                                '&': {
                                  minWidth: "30px",
                                  padding: width870 ? "10px 15px" : "5px 5px",
                                  maxHeight: width870 ? "50px" : "100%"
                                }
                              }}
                              onClick={() => {
                                setMintCount(2)
                              }}
                              variant={"outlined"}
                            >
                              2
                            </Button>
                            <Button
                              sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: width870 ? "20px" : "30px",
                                border: "2px solid white",
                                '&': {
                                  minWidth: "30px",
                                  padding: width870 ? "10px 15px" : "5px 5px",
                                  maxHeight: width870 ? "50px" : "100%"
                                }
                              }}
                              onClick={() => {
                                setMintCount(3)
                              }}
                              variant={"outlined"}
                            >
                              3
                            </Button>
                            <Button
                              sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: width870 ? "20px" : "30px",
                                border: "2px solid white",
                                '&': {
                                  minWidth: "30px",
                                  padding: width870 ? "10px 15px" : "5px 5px",
                                  maxHeight: width870 ? "50px" : "100%"
                                }
                              }}
                              onClick={() => {
                                setMintCount(4)
                              }}
                              variant={"outlined"}
                            >
                              4
                            </Button>
                            <Button
                              sx={{
                                flexGrow: 1,
                                color: "white",
                                fontSize: width870 ? "20px" : "30px",
                                border: "2px solid white",
                                '&': {
                                  minWidth: "30px",
                                  padding: width870 ? "10px 15px" : "5px 5px",
                                  maxHeight: width870 ? "50px" : "100%"
                                }
                              }}
                              onClick={() => {
                                setMintCount(5)
                              }}
                              variant={"outlined"}
                            >
                              5
                            </Button>
                          </Box>
                          <Box mt={3}>
                            <Typography sx={{textAlign: "center", fontWeight: "bold"}} variant={"h4"} color={"#c5b3ff"}>
                              {mintCount} Cats.
                            </Typography>
                          </Box>
                          <Box mt={2} sx={{width: "100%", textAlign: "center"}}>
                            {
                              connected ?
                                <Connect authOptions={authOptions}>
                                  <MintButton mintCount={mintCount}/>
                                </Connect> :
                                <Button
                                  variant={"contained"}
                                  sx={{
                                    backgroundColor: "#663ff1",
                                    padding: width870 ? "0px 0px" : "10px 20px",
                                    fontSize: width870 ? "1rem" : "20px",
                                    fontWeight: "bold",
                                    minWidth: width870 ? "50%" : "15%",
                                    color: "white"
                                  }}
                                  onClick={() => {
                                    handleOpenAuth()
                                  }}
                                >
                                  WALLET CONNECT
                                </Button>
                            }
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
          <Grid sx={{
            backgroundColor: "#d791cf",
            padding: width870 ? "20px 0px" : "40px 0px",
          }} container>
            <Grid xs={5} md={5} sx={{textAlign: "right"}} item>
              <Typography sx={{color: "#ffffff", fontWeight: "bold"}} variant={width870 ? "h5" : "h4"}>
                Price: 50 Ӿ
              </Typography>
            </Grid>
            <Grid xs={1} md={2} item>
              <Divider sx={{margin: "auto", backgroundColor: "white", width: width870 ? "3px" : "5px"}}
                       orientation="vertical"/>
            </Grid>
            <Grid xs={6} md={5} item>
              <Typography sx={{color: "#ffffff", fontWeight: "bold"}} variant={width870 ? "h5" : "h4"}>
                {`${lastTokenId} / 2050 MINTED`}
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{backgroundColor: "#1d1e6f"}}>
            <Container maxWidth={"xl"}>
              <Box sx={{padding: "30px 30px"}}>
                <Box>
                  <Typography sx={{fontWeight: "bold", textAlign: "center"}} variant={"h4"} color={"white"}>
                    My City Cats.
                  </Typography>
                </Box>
                <Box mt={3}
                     ref={scrollAreaRef}
                     onMouseDown={onMouseDown}
                     sx={{
                       display: "flex", flexWrap: "no-wrap", overflowX: "scroll", gap: 2,
                       padding: "10px 0px", justifyContent: cityCats.length < 4 ? "center" : "start",
                       '&::-webkit-scrollbar': {
                         width: '0.4em'
                       },
                       '&::-webkit-scrollbar-track': {
                         boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                         webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                       },
                       '&::-webkit-scrollbar-thumb': {
                         backgroundColor: 'rgba(0,0,0,0.1)',
                         outline: '1px solid #cccccc',
                         borderRadius: "5px"
                       }
                     }}>
                  {
                    cityCats.length > 0 ?
                      cityCats.map(value => {
                        return (
                          <Card sx={{flex: "0 0 auto", backgroundColor: "transparent", boxShadow: "none"}}>
                            <Box>
                              <img
                                style={{maxWidth: "300px", borderRadius: "12px", border: "7px solid black"}}
                                src={getCityCatsImageUrl(value)}/>
                            </Box>
                            <Typography mt={1} sx={{textAlign: "center", fontWeight: "bold"}} variant={"h5"}
                                        color={"white"}>
                              #{value}
                            </Typography>
                          </Card>
                        )
                      })
                      : <Card sx={{flex: "0 0 auto", backgroundColor: "transparent", boxShadow: "none"}}>
                        <Box>
                          <img
                            style={{maxWidth: "300px", borderRadius: "12px", border: "7px solid black"}}
                            src={"/sale/no_citycats.png"}/>
                        </Box>
                        <Typography mt={1} sx={{textAlign: "center", fontWeight: "bold"}} variant={"h5"} color={"white"}>
                          Mint Now.
                        </Typography>
                      </Card>
                  }
                </Box>
              </Box>
            </Container>
          </Box>
          <Box ref={aboutRef}>
            {
              width870 ? <MobileAbout isSale={true}/>
                :
                <About isSale={true}/>
            }
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default SalePage;
