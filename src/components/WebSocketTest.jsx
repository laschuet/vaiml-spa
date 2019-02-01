import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';

import { useWebSocket } from '../hooks/useWebSocket';

setConfig({ pureSFC: true });

const WebSocketTest = () => {
  const [input, setInput] = useState('');
  const [message, sendMessage] = useWebSocket('ws://127.0.0.1:4020');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    sendMessage(input);
  };

  return (
    <div>
      <div>WebSocketTest</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input">
            Message:
            <br />
            <input
              id="input"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </label>
          &nbsp;
          <input type="submit" value="Send" />
        </form>
      </div>
      <div>
        Last received message:
        <br />
        {message}
      </div>
    </div>
  );
};

export default WebSocketTest;
