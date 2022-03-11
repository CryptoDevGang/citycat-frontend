import Main from 'layouts/Main';
import Container from "../../components/Container";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Roadmap = (props) => {
  const width870 = useMediaQuery('(max-width:870px)');

  return (
    <Main>
      {
        width870 ?
          <img style={{width: "100%", marginBottom: "-10px"}} src={"/roadmap_mo.jpeg"}/>
          :
          <img style={{width: "100%", marginBottom: "-10px"}} src={"/roadmap_pc.jpeg"}/>
      }

    </Main>
  )
}

export default Roadmap
