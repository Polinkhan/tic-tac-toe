import { useContext, createContext } from "react";
import io from "socket.io-client";
const SocketContext = createContext();
export const useSocketContext = () => useContext(SocketContext);

function SocketContextProvoder(props) {
  //   const socket = io.connect("https://superchat-socket-server.herokuapp.com");
  const socket = io.connect("https://games-01.herokuapp.com");
  const value = { socket };

  return <SocketContext.Provider value={value}>{props.children}</SocketContext.Provider>;
}

export default SocketContextProvoder;
