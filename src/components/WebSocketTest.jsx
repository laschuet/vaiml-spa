import React, { useState } from 'react';

import { useWebSocket } from '../hooks/useWebSocket';

const WebSocketTest = () => {
  const [input, setInput] = useState('');
  const [message, sendMessage] = useWebSocket('ws://127.0.0.1:4020');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    sendMessage(JSON.stringify(input));
    setInput('');
  };

  return (
    <div className="Box Box--condensed">
      <div className="Box-header">
        <div className="Box-title">WebSocketTest</div>
      </div>
      <div className="Box-body">
        <div>Last message from server:</div>
        <div>{message}</div>
      </div>
      <div className="Box-footer">
        <form>
          <div className="input-group">
            <input
              className="form-control"
              id="input"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Message"
            />
            <span className="input-group-button">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebSocketTest;
