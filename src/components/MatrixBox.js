import { Button, Center, HStack, StackDivider, Text, VStack, Spinner, Avatar, AvatarBadge, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useDataContext } from "../contexts/DataContext";
import { useSocketContext } from "../contexts/SocketContext";

import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";

export const ShowToast = (title, description, status) => {
  const toast = useToast();
  return toast({
    title: title,
    description: description,
    status: status,
    duration: 3000,
    isClosable: true,
  });
};

const MatrixBox = () => {
  const { matrix, setMatrix, myId, Data } = useDataContext();
  const { socket } = useSocketContext();

  const handleClick = async(i, j) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = Data.inGameUser[myId].mark;
    setMatrix(newMatrix);
    await socket.emit("updateMatrix", newMatrix);
    await socket.emit("toggleUserClick");
  };

  return (
    matrix &&
    Data &&
    Data.Users[myId] && (
      <Center>
        <VStack>
          <Header />
          <VStack h={"70vh"} w={"328px"} divider={<StackDivider />} justifyContent={"center"}>
            {matrix.map((row, i) => (
              <HStack key={nanoid()} divider={<StackDivider />}>
                {row.map((val, j) => (
                  <Center key={nanoid()}>
                    <Button h={"24"} w={"24"} fontSize={"6xl"} isDisabled={Data.inGameUser[myId] ? !Data.inGameUser[myId].clickable : !Data.spectingUser[myId].clickable} onClick={() => !val && handleClick(i, j)}>
                      <Center flexDirection={"column"}>
                        <Text>{val}</Text>
                        <Text fontSize={"sm"}>{val ? (Data.inGameUser[Data.inGameUserId[0]].mark === val ? Data.Users[Data.inGameUserId[0]] : Data.Users[Data.inGameUserId[1]]) : ""}</Text>
                      </Center>
                    </Button>
                  </Center>
                ))}
              </HStack>
            ))}
          </VStack>
          <Footer />
        </VStack>
      </Center>
    )
  );
};

export default MatrixBox;
