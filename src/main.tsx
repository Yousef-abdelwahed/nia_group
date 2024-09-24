import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import "./location/i18n.ts";

import "./styles/index.scss";
import { AppProvider } from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <AppProvider>
        <App />
        </AppProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
