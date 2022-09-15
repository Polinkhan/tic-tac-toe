import { Center, Text, VStack, Avatar, AvatarBadge } from "@chakra-ui/react";
import { useDataContext } from "../contexts/DataContext";

function Header() {
  const { myId, Data } = useDataContext();

  return (
    <VStack h={"10vh"} w={"90vw"} alignItems={"start"} justifyContent={"center"}>
      {Data.inGameUserId.map((id) => (
        <Center key={id}>
          <Avatar size={"sm"} mx={"2"}>
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Text w={"200px"}>
            Name : {Data.Users[id]}
            {id === myId ? "(ME)" : ""}
          </Text>
          | Point : {Data.inGameUser[id].point}
        </Center>
      ))}
    </VStack>
  );
}

export default Header;
