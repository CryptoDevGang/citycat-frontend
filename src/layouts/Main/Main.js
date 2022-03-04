import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import {Topbar, Sidebar, Footer} from './components';

import pages from '../navigation';

const Main = ({children, colorInvert = false, bgcolor = 'transparent'}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  useEffect(() => {
    window.localStorage.setItem('themeMode', 'light');
  }, [])


  return (
    <Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          zIndex: 2000,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container>
          <Topbar
            openSidebar={openSidebar}
            onSidebarOpen={setOpenSidebar}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>

      <main>
        {children}
        <Sidebar
          onClose={handleSidebarClose}
          open={open}
          variant="temporary"
          pages={pages}
        />
      </main>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
