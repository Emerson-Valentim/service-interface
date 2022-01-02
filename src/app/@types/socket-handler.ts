import { SocketInstance } from "fishing-tools/dist/app/connectors/socket/@types/socket-instance";
export default class SocketHandler {
  constructor(protected socket: SocketInstance) {}

  public async emit<T>({ channel, message }: { channel: string; message: T }) {
    this.socket.emit(channel, message);
  }

  public async on({ event, action }: { event: string; action: () => unknown }) {
    this.socket.on(event, action);
  }

  public async disconnect() {
    this.socket.disconnect();
  }
}
