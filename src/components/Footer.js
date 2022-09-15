import { Button, Center, Text, Spinner } from "@chakra-ui/react";
import { useDataContext } from "../contexts/DataContext";
import { useSocketContext } from "../contexts/SocketContext";

function Footer() {
  const { myId, Data } = useDataContext();
  const { socket } = useSocketContext();

  const handleJoin = async () => {
    await socket.emit("requstJoinInGame", myId);
  };

  return (
    <Center h={"5vh"} w={"90vw"}>
      {Data.inGameUser[myId] ? (
        Data.inGameUserId.length === 2 ? (
          Data.inGameUser[myId].clickable ? (
            "Your Turn"
          ) : (
            <>
              <Text px={"2"}>Wait For Opponent Move</Text>
              <Spinner size="xs" />
            </>
          )
        ) : (
          <>
            <Text px={"2"}>Waiting For Player</Text>
            <Spinner size="xs" />
          </>
        )
      ) : (
        <Text mx={"4"}>Specting</Text>
      )}
      <Button onClick={handleJoin} display={Data.inGameUserId.length !== 2 && !Data.inGameUser[myId] ? "static" : "none"}>
        Join
      </Button>
    </Center>
  );
}

export default Footer;
