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
          <div className="form-group">
            <label className="form-label" htmlFor="input">
              Message
            </label>
            <input
              className="form-input"
              id="input"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </div>
          <input
            className="form-input btn btn-primary"
            type="submit"
            value="Send"
          />
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
