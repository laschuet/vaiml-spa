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
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title text-bold">Last message from server</div>
      </div>
      <div className="panel-body">{message}</div>
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              className="form-input"
              id="input"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Message"
            />
            <button
              className="btn btn-primary input-group-btn"
              onClick={handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebSocketTest;
