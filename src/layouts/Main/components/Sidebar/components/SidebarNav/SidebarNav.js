import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';

import NavItem from './components/NavItem';
import {Divider, Grid, Typography} from "@mui/material";


const ItemButton = (props) => {
  return (
    <Button
      size={'large'}
      variant="text"
      fullWidth
      component="a"
      href={props.href}
      sx={{
        fontSize: "1.1rem",
        color: "#888888",
        fontWeight: "bold",
        "&:hover": {
          color: "#3E27AF",
        }
      }}
    >
      {props.text}
    </Button>
  )
}
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
      <Grid container sx={{background: "#e7e7e7"}}>
        <Grid item xs={12} md={3}>
          <Box sx={{background: "#7c6de2", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h5"} color={"white"} fontWeight={"bold"}>
              City Cats
            </Typography>
          </Box>
          <Box sx={{background: "#e7e7e7"}} paddingX={2} paddingY={1}>
            <Box>
              <ItemButton text={"Home"} href={"/"}/>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{background: "#7c6de2", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h5"} color={"white"} fontWeight={"bold"}>
              Community
            </Typography>
          </Box>
          <Box sx={{background: "#e7e7e7"}} paddingX={2} paddingY={1}>
            <Box>
              <ItemButton text={"Twitter"} href={"https://twitter.com/citycatsworld"}/>
            </Box>
            <Box marginTop={1}>
              <ItemButton text={"Discord"} href={"https://discord.gg/HezwYHvece"}/>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{background: "#7c6de2", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h5"} color={"white"} fontWeight={"bold"}>
              RoadMap
            </Typography>
          </Box>
          <Box sx={{background: "#e7e7e7"}} paddingX={2} paddingY={1}>
            <Box>
              <ItemButton text={"Coming Soon!"} href={"/"}/>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{background: "#7c6de2", padding: "15px 30px", textAlign: "center"}}>
            <Typography variant={"h5"} color={"white"} fontWeight={"bold"}>
              About
            </Typography>
          </Box>
          <Box sx={{background: "#e7e7e7"}} paddingX={2} paddingY={1}>
            <Box>
              <ItemButton text={"Team"} href={"/"}/>
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
