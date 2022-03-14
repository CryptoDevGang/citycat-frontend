import React from 'react';
import { ImageMap } from '@qiuz/react-image-map';

import Main from 'layouts/Main';
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "../../components/Container";

const TeamPage = () => {
  const width870 = useMediaQuery('(max-width:870px)');

  const pcMap = [{"width":"6.023255813953488%","height":"3.0937499999999996%","left":"44.76744186046512%","top":"19.21875%", "href": "https://twitter.com/una_ccw", style: {cursor: "pointer"}},
    {"width":"6.023255813953488%","height":"3.0937499999999996%","left":"47.44186046511628%","top":"34.765625%", "href": "https://twitter.com/sp100xx", style: {cursor: "pointer"}},
    {"width":"6.023255813953488%","height":"3.0937499999999996%","left":"22.209302325581394%","top":"49.84375%", "href": "https://twitter.com/hollycat_box", style: {cursor: "pointer"}},
    {"width":"6.023255813953488%","height":"3.0937499999999996%","left":"69.76744186046511%","top":"50.31250000000001%", "href": "https://twitter.com/cryptodevgang", style: {cursor: "pointer"}}]

  const moMap = [{"width":"8.930232558139535%","height":"3.6666666666666665%","left":"40.8139534883721%","top":"19.280575539568346%", "href": "https://twitter.com/una_ccw"},
    {"width":"8.930232558139535%","height":"3.6666666666666665%","left":"46.51162790697675%","top":"30.851318944844124%", "href": "https://twitter.com/sp100xx"},
    {"width":"8.930232558139535%","height":"3.6666666666666665%","left":"13.372093023255822%","top":"49.49640287769784%", "href": "https://twitter.com/hollycat_box"},
    {"width":"8.930232558139535%","height":"3.6666666666666665%","left":"77.90697674418607%","top":"51.89448441247002%", "href": "https://twitter.com/cryptodevgang"}]
  const onMapClick = (area, index) => {
    window.open(area.href, "_blank")
  }

  return (
    <Main>
      <Container>
        {
          width870 ?
            <>
              <ImageMap
                style={{width: "100%", marginBottom: "-10px"}}
                className="mo-map"
                src={"/team/team_mo.jpeg"}
                map={moMap}
                onMapClick={onMapClick}
              />
            </>
            :
            <>
              <ImageMap
                style={{width: "100%", marginBottom: "-10px"}}
                className="pc-map"
                src={"/team/team_pc.jpeg"}
                map={pcMap}
                onMapClick={onMapClick}
              />
            </>

        }
      </Container>
    </Main>
  );
};

export default TeamPage;
