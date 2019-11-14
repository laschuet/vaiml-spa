import React, { useState } from 'react';

import { useWebSocket } from '../hooks/useWebSocket';

const ChildProcessTest = () => {
  const [input, setInput] = useState('');
  const [message, sendMessage] = useWebSocket('ws://127.0.0.1:4020');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    sendMessage(JSON.stringify({ type: 'run_julia_code', data: input }));
    setInput('');
  };

  return (
    <div className="Box Box--condensed">
      <div className="Box-header">
        <div className="Box-title">ChildProcessTest</div>
      </div>
      <div className="Box-body">
        <form>
          <div className="input-group">
            <input
              className="form-control"
              id="input"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Julia program code"
            />
            <span className="input-group-button">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}>
                Send
              </button>
            </span>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="example-textarea"
              placeholder="Julia program output"
              disabled
              value={message && JSON.parse(message).data}
            />
          </div>
          <div>{message}</div>
        </form>
      </div>
    </div>
  );
};

export default ChildProcessTest;
