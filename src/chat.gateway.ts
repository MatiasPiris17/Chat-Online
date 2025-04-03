import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateWay implements OnGatewayConnection {

  @WebSocketServer() server: Server;

  
  handleConnection(client: Socket, ...args: any[]) {
    client.emit('init', `Bienvenido tu ID es ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessege(client: Socket, payload: any) {
    this.server.emit('message', payload);
  }

}