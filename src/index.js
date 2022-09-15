import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import SocketContextProvoder from "./contexts/SocketContext";
import DataContextProvider from "./contexts/DataContext";
import EventHandler from "./events/EventHandler";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <ChakraProvider>
    <SocketContextProvoder>
      <DataContextProvider>
        <EventHandler/>
        <App />
      </DataContextProvider>
    </SocketContextProvoder>
  </ChakraProvider>
);
