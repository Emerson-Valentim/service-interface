import { Managers } from "fishing-tools";

import SocketHandler from "./@types/socket-handler";

const SocketManager = Managers.SocketManager;

function useSocket(instance: string) {
  const handler = new SocketHandler(SocketManager.get(instance));

  return handler;
}

export default useSocket;
