import { useEffect, useRef, useState } from 'react';

export const useWebSocket = address => {
  const [message, setMessage] = useState('');
  const wsRef = useRef();

  const handleClose = () => {};

  const handleError = evt => {
    setMessage(`WebSocket error ${evt.data}`);
  };

  const handleMessage = evt => {
    setMessage(evt.data);
  };

  const handleOpen = () => {};

  useEffect(() => {
    const ws = new WebSocket(address);
    ws.addEventListener('close', handleClose);
    ws.addEventListener('error', handleError);
    ws.addEventListener('message', handleMessage);
    ws.addEventListener('open', handleOpen);

    wsRef.current = ws;

    return () => {
      ws.removeEventListener('close', handleClose);
      ws.removeEventListener('error', handleError);
      ws.removeEventListener('message', handleMessage);
      ws.removeEventListener('open', handleOpen);
      ws.close();
    };
  }, []);

  const sendMessage = text => {
    wsRef.current.send(text);
  };

  return [message, sendMessage];
};
