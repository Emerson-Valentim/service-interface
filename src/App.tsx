import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import { Demo } from "./features/counter/Demo";

import "./App.css";

import client from "./app/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <ChakraProvider>
            <Demo />
          </ChakraProvider>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
