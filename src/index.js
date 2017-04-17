import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import "smoothscroll";

import App from "./App";

import "./index.css";
import "typeface-montserrat";
import "typeface-raleway";

import client from "./lib/apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
