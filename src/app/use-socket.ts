import { io } from "socket.io-client";

const socketHosts: { [key: string]: string } = {
  "socket-1": `${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}`,
};

function useSocket(instance: string) {
  const handler = io(socketHosts[instance]);

  return handler;
}

export default useSocket;
