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

import ThemeProvider from "./components/ThemeProvider";

import client from "./lib/apolloClient";

// if (process.env.NODE_ENV !== "production") {
//   const { whyDidYouUpdate } = require("why-did-you-update");
//   whyDidYouUpdate(React);
// }

ReactDOM.render(
  <ThemeProvider>
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
