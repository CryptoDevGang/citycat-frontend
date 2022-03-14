import React from 'react';
import { ImageMap } from '@qiuz/react-image-map';

import Main from 'layouts/Main';
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "../../components/Container";

const TeamPage = () => {
  const width870 = useMediaQuery('(max-width:870px)');

  const pcMap = [{"width":"9.511627906976745%","height":"4.734375%","left":"39.651162790697676%","top":"19.6875%", "href": "https://twitter.com/una_ccw"},{"width":"9.511627906976745%","height":"4.734375%","left":"47.44186046511628%","top":"34.375%", "href": "https://twitter.com/sp100xx"},{"width":"9.511627906976745%","height":"4.734375%","left":"16.627906976744185%","top":"50.15625%", "href": "https://twitter.com/hollycat_box"},{"width":"9.511627906976745%","height":"4.734375%","left":"72.90697674418605%","top":"51.40625%", "href": "https://twitter.com/cryptodevgang"}]
  const moMap = [{"width":"8.930232558139535%","height":"3.6666666666666665%","left":"40.8139534883721%","top":"19.280575539568346%", "href": "https://twitter.com/una_ccw"},{"width":"8.930232558139535%","height":"3.6666666666666665%","left":"46.51162790697675%","top":"30.851318944844124%", "href": "https://twitter.com/sp100xx"},{"width":"8.930232558139535%","height":"3.6666666666666665%","left":"13.372093023255822%","top":"49.49640287769784%", "href": "https://twitter.com/hollycat_box"},{"width":"8.930232558139535%","height":"3.6666666666666665%","left":"77.90697674418607%","top":"51.89448441247002%", "href": "https://twitter.com/cryptodevgang"}]
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
                style={{width: "100%"}}
                className="mo-map"
                src={"/team/team_mo.jpeg"}
                map={moMap}
                onMapClick={onMapClick}
              />
            </>
            :
            <>
              <ImageMap
                style={{width: "100%"}}
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
