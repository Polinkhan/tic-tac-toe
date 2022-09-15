import { useState } from "react";
import { Button, Center, Input } from "@chakra-ui/react";
import { useSocketContext } from "../contexts/SocketContext";

function Auth({ setSignIn }) {
  const [name, setName] = useState("");
  const { socket } = useSocketContext();

  const handleClick = async () => {
    if (name === "") {
      await socket.emit("requestJoin", "Anonymous");
    } else {
      await socket.emit("requestJoin", name);
    }
    setSignIn(true);
  };

  return (
    <Center h={"100vh"}>
      <form onSubmit={handleClick}>
        <Center>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={"Enter Username"} autoFocus />
          <Button name="submit" ml={"2"} onClick={handleClick}>
            Join
          </Button>
        </Center>
      </form>
    </Center>
  );
}

export default Auth;
