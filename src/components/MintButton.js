import Button from "@mui/material/Button";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {FungibleConditionCode, makeStandardSTXPostCondition, PostConditionMode} from "@stacks/transactions";
import {StacksTestnet} from "@stacks/network";
import {useConnect, Connect} from "@stacks/connect-react";
import {useStxAddresses} from "../connect/hooks";
import {userSessionState} from "../connect/auth"
import {useAtomValue} from "jotai";

const MintButton = (props) => {
  const width870 = useMediaQuery('(max-width:870px)');
  const userSession = useAtomValue(userSessionState);
  const {ownerStxAddress} = useStxAddresses(userSession);
  const {doContractCall} = useConnect();

  function getMintFunctionName(mintCount) {
    if (mintCount === 1) {
      return 'mint'
    }

    if (mintCount === 2) {
      return 'mint-two'
    }

    if (mintCount === 3) {
      return 'mint-three'
    }

    if (mintCount === 4) {
      return 'mint-four'
    }

    if (mintCount === 5) {
      return 'mint-five'
    }
  }

  function doMint(mintCount){
    const contractAddress = 'ST1AE8AYE8GCXVX4711Y9B8D7BKVTYFYQTDKJJ3JR';
    const contractName = 'citycats-nft-mint-v11';
    const functionName = getMintFunctionName(mintCount);
    const mintPrice = 50 * Math.pow(10, 6)
    const totalMintPrice = mintPrice * mintCount

    doContractCall({
      contractAddress,
      contractName,
      functionName,
      postConditionMode: PostConditionMode.Deny,
      postConditions: [makeStandardSTXPostCondition(
        ownerStxAddress,
        FungibleConditionCode.Equal,
        totalMintPrice
      )],
      functionArgs: [],
      network: new StacksTestnet()
    }).then(value => {
      console.log("succeed")
    })
  }

  return (
    <>
      <Button
        variant={"contained"}
        sx={{
          backgroundColor: "#663ff1",
          padding: width870 ? "0px 0px" : "10px 20px",
          fontSize: width870 ? "1rem" : "25px",
          fontWeight: "bold",
          minWidth: width870 ? "50%" : "25%",
          color: "white"
        }}
        onClick={() => {
          doMint(props.mintCount)
        }}
      >
        MINT
      </Button>
    </>
  )
}

export default MintButton
