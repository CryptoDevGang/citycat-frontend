import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';
import {Typography} from "@mui/material";

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box sx={{background: "#3E27AF", padding: "8px 30px"}}>
        <Box width={{xs: 140, md: 170}}>
          <Box
            component={'img'}
            src={'/city_cats_logo.svg'}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box sx={{background: "#000000", padding: "15px 30px"}}>
        <Typography variant={"h6"} color={"white"} fontWeight={"bold"}>
        Community
        </Typography>
      </Box>
      <Box sx={{background: "#dedede"}} paddingX={2} paddingY={1}>
        <Box>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            target="_blank"
            href="https://twitter.com/citycatsworld"
            sx={{
              fontWeight: "bold"
            }}
          >
            Twitter
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="_blank"
            href="https://discord.gg/HezwYHvece"
            sx={{
              fontWeight: "bold"
            }}
          >
            Discord
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
