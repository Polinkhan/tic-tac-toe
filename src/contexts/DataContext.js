import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props) => {
  const [matrix, setMatrix] = useState(null);
  const [Data, setData] = useState(null);
  const [myId, setMyId] = useState(null);

  const value = {
    matrix,
    setMatrix,
    Data,
    setData,
    myId,
    setMyId,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export default DataContextProvider;
