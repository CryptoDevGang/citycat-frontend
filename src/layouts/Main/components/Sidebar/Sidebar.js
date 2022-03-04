import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {SidebarNav} from './components';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {Container} from "@mui/material";

const Sidebar = ({pages, open, variant, onClose}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Drawer
      anchor= "top"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          marginTop: isMd ? "68px" : "65px",
          width: '100%',
          maxWidth: isMd ? '100%' : 500,
          background: "none",
          boxShadow: "none"
        },
      }}
    >
      <Container maxWidth={"xl"} sx={{padding: isMd? "0px 16px" : "0px 0px"}}>
        <Box
          sx={{
            height: '100%',
            borderBottom: "13px solid #3E27AF",
            borderRight: "13px solid #3E27AF",
            borderLeft: "13px solid #3E27AF",
            borderRadius: "0px 0px 10px 10px"
          }}
        >
          <SidebarNav pages={pages}/>
        </Box>
      </Container>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Sidebar;
