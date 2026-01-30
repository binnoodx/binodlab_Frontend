// socket.js (or socket.ts)
import { io } from "socket.io-client";

export const socket = io(process.env.BACKEND_URI, {
  transports: ["websocket"],
  autoConnect:true
});
