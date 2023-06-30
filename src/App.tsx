import { Config, DAppProvider, Goerli, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { NavBar } from "./Components/NavBar";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { HomePage } from "./Pages/HomePage";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

const theme = createTheme({
  typography: {
    fontFamily: "arial",
  },
});

function App() {
  return (
    <BrowserRouter>
      <DAppProvider config={config}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </DAppProvider>
    </BrowserRouter>
  );
}

export default App;
