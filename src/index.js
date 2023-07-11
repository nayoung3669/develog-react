import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import rootReducer from "./redux/config/configStore";
import { configureStore } from "@reduxjs/toolkit";

const queryClient = new QueryClient();
const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
);
