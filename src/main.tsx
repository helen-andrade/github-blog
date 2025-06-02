import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { IssuesProvider } from "./contexts/IssuesContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <IssuesProvider>
          <GlobalStyles />
          <App />
        </IssuesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
