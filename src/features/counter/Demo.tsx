import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Flex, Text } from "@chakra-ui/react";

import useSocket from "../../app/use-socket";

const EXAMPLE_MUTATION = gql`
  mutation example($input: ExampleInput!) {
    example(input: $input) {
      value
    }
  }
`;

export function Demo() {
  const [backgroundColor, setBackgroundColor] = useState<string>("gray");
  const [jobTime, setJobTime] = useState<Date>();

  const socket = useSocket("socket-1");

  const [changeColor] = useMutation(EXAMPLE_MUTATION, {
    variables: {
      input: {
        value: backgroundColor,
      },
    },
  });

  useEffect(() => {
    socket.on("client:example", (message) => {
      setBackgroundColor(message.value);
    });

    socket.on("client:example:job:done", (epoch) => {
      setJobTime(new Date(epoch.date));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    changeColor();
  }, [backgroundColor]);

  return (
    <Flex flexDirection="column" height="100vh">
      <Text backgroundColor={backgroundColor} width="100vw">
        From job: {jobTime?.toISOString()}
      </Text>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        margin={2}
        flexWrap="wrap"
        gap={4}
      >
        {["blue", "red", "gray", "purple", "yellow", "green", "pink"].map(
          (color) => (
            <Button
              onClick={() => setBackgroundColor(color)}
              key={color}
              colorScheme={color}
              border="2px"
              borderColor="black"
              width="8vh"
              height="8vh"
            />
          )
        )}
      </Flex>
    </Flex>
  );
}
