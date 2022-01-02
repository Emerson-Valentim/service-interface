import React, { useEffect, useState } from "react";

import useSocket from "../../app/use-socket";

export function Counter() {
  const [fish, setFish] = useState<string>("Unset");
  const [jobTime, setJobTime] = useState<Date>();

  const socket = useSocket("socket-1");

  useEffect(() => {
    socket.on("client:fish:create", (fish) => {
      setFish(fish.specie);
    });

    socket.on("client:fish:job:done", (epoch) => {
      setJobTime(new Date(epoch.date));
    });

    return () => {
      socket.disconnect();
    };
  });

  return (
    <div>
      Fish: {fish} - Created: {jobTime?.toISOString() || "Unset"}
    </div>
  );
}
