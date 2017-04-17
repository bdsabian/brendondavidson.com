import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "smoothscroll";

import App from "./App";

import "./index.css";
import "typeface-montserrat";
import "typeface-raleway";

import client from "./lib/apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
