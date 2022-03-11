import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import {ReactComponent as ComingSoonBackground} from "../../assets/coming-soon.svg";

const ComingsoonPage = () => {
  const theme = useTheme();
  const width870 = useMediaQuery('(max-width:870px)');

  return (
    <Main>
      <Container>
        <ComingSoonBackground/>
      </Container>
    </Main>
  );
};

export default ComingsoonPage;
