import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: "100%" }}
    width={1}
    margin={'0 auto'}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
