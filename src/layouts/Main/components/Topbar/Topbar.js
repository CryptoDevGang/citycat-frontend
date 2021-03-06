import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import Hamburger from 'hamburger-react'
import useMediaQuery from "@mui/material/useMediaQuery";
import {Container} from "@mui/material";
import Button from "@mui/material/Button";
import {useSelector} from "../../../../store";
import {useConnect} from "../../../../connect/auth";
import {setConnected} from "../../../../slices/connect";
import {useDispatch} from "react-redux";

const Topbar = ({openSidebar, onSidebarOpen, pages, colorInvert = false}) => {
  const theme = useTheme();
  const {mode} = theme.palette;
  const width870 = useMediaQuery('(max-width:870px)');
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const {handleOpenAuth, handleSignOut} = useConnect();
  const {authOptions, userSession} = useConnect()
  const {connected} = useSelector((state) => state.connect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConnected(userSession.isUserSignedIn()))
  }, [userSession])

  return (
    <Box
      sx={{zIndex: -2, background: "#3E27AF", padding: isMd ? "0px 80px" : "0px 10px"}}
    >
      <Container maxWidth={"xl"}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{height: "70px", maxHeight: "70px", background: "#3E27AF", padding: isMd ? "5px 60px" : "5px 0px"}}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="cityCats"
            width={{xs: 120, md: 170}}
          >
            <Box
              component={'img'}
              src={
                mode === 'light' && !colorInvert
                  ? '/city_cats_logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box sx={{display: "flex"}} alignItems={'center'}>
            <Button sx={{marginRight: width870? "0px" : "40px", fontSize: width870? "10px" : "1rem", color: "white", fontWeight: "bold", border: "1px solid white"}}
                    variant={"outlined"}
                    onClick={() => {
                      connected? handleSignOut() : handleOpenAuth()
                    }}>
              {connected ? "Disconnect" : "Connect Wallet"}
            </Button>
            <Hamburger toggled={openSidebar} toggle={onSidebarOpen} distance={"sm"} size={isMd ? 48 : 30} rounded
                       hideOutline={true}/>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
