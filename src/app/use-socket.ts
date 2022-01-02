import { io } from "socket.io-client";

const socketHosts: { [key: string]: string } = {
  "socket-1": `http://${process.env.REACT_APP_SOCKET_HOST}:3000/`,
};

function useSocket(instance: string) {
  const handler = io(socketHosts[instance]);

  return handler;
}

export default useSocket;
