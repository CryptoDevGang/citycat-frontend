import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';

import NavItem from './components/NavItem';
import {Divider, Grid, Typography} from "@mui/material";

const SidebarNav = ({pages}) => {
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
    <Box>
      <Grid container sx={{background: "#dedede"}}>
        <Grid item md={3}>
          <Box sx={{background: "#000000", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h6"} color={"white"} fontWeight={"bold"}>
              CityCats
            </Typography>
          </Box>
          <Box sx={{background: "#dedede"}} paddingX={2} paddingY={1}>
            <Box>
              <Button
                size={'large'}
                variant="text"
                fullWidth
                component="a"
                href="/"
                sx={{
                  fontWeight: "bold"
                }}
              >
                Home
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{background: "#000000", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h6"} color={"white"} fontWeight={"bold"}>
              Community
            </Typography>
          </Box>
          <Box sx={{background: "#dedede"}} paddingX={2} paddingY={1}>
            <Box>
              <Button
                size={'large'}
                variant="text"
                fullWidth
                component="a"
                href="https://twitter.com/citycatsworld"
                target="_blank"
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
                variant="text"
                color="primary"
                fullWidth
                component="a"
                href="https://discord.gg/HezwYHvece"
                target="_blank"
                sx={{
                  fontWeight: "bold"
                }}
              >
                Discord
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{background: "#000000", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h6"} color={"white"} fontWeight={"bold"}>
              RoadMap
            </Typography>
          </Box>
          <Box sx={{background: "#dedede"}} paddingX={2} paddingY={1}>
            <Box>
              <Button
                size={'large'}
                variant="text"
                fullWidth
                component="a"
                href="/"
                sx={{
                  fontWeight: "bold"
                }}
              >
                Coming Soon!
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box sx={{background: "#000000", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h6"} color={"white"} fontWeight={"bold"}>
              About
            </Typography>
          </Box>
          <Box sx={{background: "#dedede"}} paddingX={2} paddingY={1}>
            <Box>
              <Button
                size={'large'}
                variant="text"
                fullWidth
                component="a"
                href="/"
                sx={{
                  fontWeight: "bold"
                }}
              >
                Team
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
