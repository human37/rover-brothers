const url =
    process.env.NODE_ENV === 'production'
        ? 'wss://squid-racer.herokuapp.com'
        : 'ws://localhost:3000';
const socket = new WebSocket(url);

export default socket;
