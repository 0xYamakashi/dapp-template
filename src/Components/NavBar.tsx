import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Box } from "@mui/system";
import { ConnectButton } from "./ConnectButton";

export const NavBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "blue"}}
      >
        <Toolbar>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
