import { useState } from "react";
import Auth from "./components/Auth";
import MatrixBox from "./components/MatrixBox";

function App() {
  const [isSignIn, setSignIn] = useState(false);

  return isSignIn ? (
    <MatrixBox />
  ) : (
    <Auth setSignIn={setSignIn} />
  );
}

export default App;
