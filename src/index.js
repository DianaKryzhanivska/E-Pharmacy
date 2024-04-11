import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename="/E-Pharmacy">
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
