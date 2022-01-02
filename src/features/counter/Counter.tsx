import React, { useEffect, useState } from "react";

import useSocket from "../../app/use-socket";

export function Counter() {
  const [fish, setFish] = useState<string>("Unset");

  const socket = useSocket("socket-1");

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  });

  return <div>{fish}</div>;
}
