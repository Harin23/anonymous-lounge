import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:4001");
export default socket;