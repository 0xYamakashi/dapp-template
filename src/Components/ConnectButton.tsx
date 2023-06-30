import { Button, styled } from "@mui/material";
import { useEthers } from "@usedapp/core";

export const ConnectButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers();

  return account ? (
    <SyledButton onClick={() => deactivate()}>Disconnect</SyledButton>
  ) : (
    <SyledButton onClick={() => activateBrowserWallet()}>Connect</SyledButton>
  );
};

const SyledButton = styled(Button)({
  border: "0px solid",
  borderRadius: "10px",
  backgroundColor: "#f0f0f0",
  color: "black",
});
