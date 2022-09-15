import { useDataContext } from "../contexts/DataContext";
import { useSocketContext } from "../contexts/SocketContext";
import { useEffect } from "react";

function EventHandler() {
  console.log("gg");
  const { socket } = useSocketContext();
  const { matrix, setMatrix, setMyId, Data, setData } = useDataContext();

  //===initially request for Current Data===//
  useEffect(() => {
    socket.emit("requestCurrentData");
  }, []); //eslint-disable-line

  useEffect(() => {
    socket.on("getCurrentData", (currentMatrix, id) => {
      setMyId(id);
      setMatrix(currentMatrix);
    });

    socket.on("updateData", (Data) => {
      setData(Data);
    });

    socket.on("getUpdateMatrix", (newMatrix) => {
      setMatrix(newMatrix);
    });

    socket.on("win", (name) => {
      // ShowToast(name + " win", name + " win", "success");
    });

    return () => {
      socket.off();
    };
  }, [matrix, Data]); //eslint-disable-line
}

export default EventHandler;
