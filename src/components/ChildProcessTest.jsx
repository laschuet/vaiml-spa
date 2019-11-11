import React from 'react';

const ChildProcessTest = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div className="Box Box--condensed">
      <div className="Box-header">
        <div className="Box-title">ChildProcessTest</div>
      </div>
      <div className="Box-body">
        <div>Output:</div>
        <div />
      </div>
      <div className="Box-footer clearfix">
        <button className="btn btn-primary float-right" onClick={handleSubmit}>
          Run
        </button>
      </div>
    </div>
  );
};

export default ChildProcessTest;
