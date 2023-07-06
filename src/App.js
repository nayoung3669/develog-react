import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import theme from "./lib/styles/theme";
import GlobalStyle from "./lib/styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
