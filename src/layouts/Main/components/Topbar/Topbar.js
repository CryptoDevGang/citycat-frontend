import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import Hamburger from 'hamburger-react'
import useMediaQuery from "@mui/material/useMediaQuery";

const Topbar = ({openSidebar, onSidebarOpen, pages, colorInvert = false}) => {
  const theme = useTheme();
  const {mode} = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      sx={{background: "#3E27AF", padding: isMd ? "5px 80px" : "10px 20px"}}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{xs: 140, md: 170}}
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
      <Box alignItems={'center'}>
        <Hamburger toggled={openSidebar} toggle={onSidebarOpen} distance={"sm"} size={isMd ? 40 : 30} rounded hideOutline={true}/>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
