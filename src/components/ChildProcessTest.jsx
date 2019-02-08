import React from 'react';

const ChildProcessTest = () => {
  const handleRun = evt => {};

  return (
    <div className="panel">
      <div className="panel-header text-bold">ChildProcessTest</div>
      <div className="panel-body">
        <div>Output:</div>
        <div />
      </div>
      <div className="panel-footer">
        <button className="btn btn-primary float-right" onClick={handleRun}>
          Run
        </button>
      </div>
    </div>
  );
};

export default ChildProcessTest;
