import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/ThemeProvider";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
    {/* <GlobalStyle /> */}
  </ThemeProvider>,
  document.getElementById("root")
);
