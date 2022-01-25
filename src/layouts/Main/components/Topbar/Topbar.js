import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {alpha, useTheme} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import {NavItem} from './components';
import {Container} from "@mui/material";

const Topbar = ({onSidebarOpen, pages, colorInvert = false}) => {
  const theme = useTheme();
  const {mode} = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
      sx={{background: "#3E27AF", padding: "10px 40px"}}
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
      <Box sx={{display: {xs: 'flex', md: 'flex'}}} alignItems={'center'}>
        {/*<Box>*/}
        {/*  <Link color={'white'} href={'#'} underline={'none'}>*/}
        {/*    Home*/}
        {/*  </Link>*/}
        {/*</Box>*/}
        {/*<Box marginLeft={4}>*/}
        {/*  <Link color={'white'} href={'#'} underline={'none'}>*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*</Box>*/}
        {/*<Box marginLeft={4}>*/}
        {/*  <Link color={'white'} href={'#'} underline={'none'}>*/}
        {/*    Roadmap*/}
        {/*  </Link>*/}
        {/*</Box>*/}
        {/*<Box marginLeft={4}>*/}
        {/*  <Link color={'white'} href={'#'} underline={'none'}>*/}
        {/*    Community*/}
        {/*  </Link>*/}
        {/*</Box>*/}
        {/*<Box marginLeft={4}>*/}
        {/*  <Link color={'white'} href={'#'} underline={'none'}>*/}
        {/*    Team*/}
        {/*  </Link>*/}
        {/*</Box>*/}
      </Box>
      <Box sx={{display: {xs: 'none', md: 'none'}}} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon/>
        </Button>
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
