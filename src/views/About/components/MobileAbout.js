import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState} from "react";

const MobileAbout = (props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Box sx={{display: "flex", position: "relative", marginTop: props.isSale? "0px" : "-60%"}}>
      <img style={{width: '100%'}} src={"/about/about_citycat_mo.jpeg"} onLoad={() => setLoaded(true)}/>
      {
        loaded ?
          <>
            <Typography
              sx={{position: "absolute", top: "1%", left: "5%", color: "white", fontSize: "0.8rem"}}>
              City Cats is a P2E NFT game that leverages CityCoins and a cute cat character. We believe that P2E can
              incentivize blockchain users and further provide opportunities for wealth. In particular, the fact that
              the game platform makes use of CityCoins will be very attractive to the CityCoiners.
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "6%",
                left: "5%",
                color: "white",
                maxWidth: "700px",
                fontSize: "0.8rem"
              }}>
              We want to present new use cases of Bitcoin by focusing on blockchain games rather than just PFP NFTs. To
              achieve this, we have adopted the Stacks blockchain. Stacks is the most proven Bitcoin-scaling blockchain
              in the market, allowing users to enjoy a stable gaming experience on a very stable environment.
            </Typography>
            <Typography sx={{
              position: "absolute",
              top: "21%",
              left: "5%",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold"
            }}>
              What are City Cats NFT?
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "22.5%",
                left: "5%",
                right: "5%",
                color: "white",
                maxWidth: "700px",
                fontSize: "0.8rem"
              }}>
              City cat is an NFT based on Stacks blockchain. There are a total of 2,050 first-generation city cats,
              which
              are
              composed of unique skin, face, background, hair, and body. Each city cat reflects a strong personality and
              will
              be the most essential part of the City Cats ecosystem going forward. Don’t miss out on minting your lucky
              cat
              that will open up lots of opportunities!
            </Typography>
            <Typography sx={{
              position: "absolute",
              top: "43%",
              left: "5%",
              color: "black",
              maxWidth: "700px",
              fontSize: "1rem",
              fontWeight: "bold"
            }}>
              How rare is my cat?
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "44.5%",
                left: "5%",
                right: "5%",
                color: "black",
                maxWidth: "700px",
                fontSize: "0.8rem"
              }}>
              As mentioned earlier, there are only 2,050 city cats for the 1st generation. To evaluate their coolness,
              it
              is
              rated in the range from 5 to 13 points. The score is determined by the items your cat has.
              While this score may be important to your ranking in the Marketplace, it will play a crucial role in
              future
              gameplay and earning Gen 2 city cats!
            </Typography>
            <Typography sx={{
              position: "absolute",
              top: "61%",
              left: "5%",
              color: "black",
              maxWidth: "700px",
              fontSize: "1rem",
              fontWeight: "bold"
            }}>
              Why get a City Cat?
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "63%",
                left: "5%",
                right: "5%",
                color: "black",
                fontSize: "0.8rem"
              }}>
              City cat is different from previous NFT projects and plays a key role in future development and building.
              Once
              you become a central member of the City Cats community, you can exercise your influence in determining the
              direction of the project. In addition, city cat NFT is essential for future product participation such as
              token
              acquisition through gameplay, City coin store, 2nd generation city cat acquisition, and cat tower bidding
              participation.
            </Typography>
            <Typography sx={{
              position: "absolute",
              top: "81%",
              left: "5%",
              color: "black",
              maxWidth: "700px",
              fontSize: "1rem",
              fontWeight: "bold"
            }}>
              Future of City Cats?
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "82.5%",
                left: "5%",
                right: "5%",
                color: "black",
                maxWidth: "700px",
                fontSize: "0.8rem"
              }}>
              Don’t forget that City Cats is more than just an NFT art. We are passionate about building the City Cat
              ecosystem, including future synchronization with the community, utility of city cat, community growth, and
              partnerships! We believe that the growth of City Cats depends entirely on the community. Please join us in
              our
              journey to the future of City Cats!
            </Typography>
            <Box sx={{width: "100%", position: "absolute", bottom: "1.3%", right: "auto", textAlign: "center"}}>
              <Box>
                <img style={{width: "20px"}} src={"/about/about_citycat_logo.png"}/>
              </Box>
              <Box mt={-1}>
                <a style={{marginRight: "10px"}} href={"https://discord.gg/4cjJkfyG4V"}>
                  <img style={{width: "20px"}} src={"/about/about_discord.png"}/>
                </a>
                <a style={{marginRight: "10px"}} href={"https://twitter.com/citycatsworld"}>
                  <img style={{width: "20px"}} src={"/about/about_twitter.png"}/>
                </a>
                <a href={"/sale"}>
                  <img style={{width: "20px"}} src={"/about/about_market.png"}/>
                </a>
              </Box>
              <Typography color={"white"} fontWeight={"bold"} sx={{fontSize: "0.5rem"}}>
                City Cats
              </Typography>
            </Box>
          </>
          :
          <></>
      }

    </Box>
  )
}

export default MobileAbout
