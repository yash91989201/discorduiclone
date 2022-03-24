import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./pages/Landing";
import "./App.css";

const theme = createTheme({
  palette: {
    bgCol: {
      white1: "#ffffff",
      white2: "#f6f6f6",
      red1: "#ed4245",
      green1: "#3ba55d",
      orange1: "#f26522",
      purple1: "#5865f2",
      purple2: "#5865f2",
      purple3: "#404eed",
      grey1: "#4f545c",
      grey2: "#36393f",
      grey3: "#2f3136",
      black1: "#202225",
      black2: "#23272a",
      black3: "#292b2f",
    },
    textCol: {
      white1: "#ffffff",
      red1: "#ed4245",
      green1: "#3ba55d",
      purple1: "#5865f2",
      blue1: "#00b0f4",
      blue2: "#0000ee",
      grey1: "#dcddde",
      grey2: "#b9bbbe",
      grey3: "#8e9297",
      grey4: "#72767d",
      black1: "#23272a",
      black2: "#000000",
    },
  },
  typography: {
    fontFamily: `Ginto, "Helvetica Neue", Helvetica, Arial, sans-seri`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
