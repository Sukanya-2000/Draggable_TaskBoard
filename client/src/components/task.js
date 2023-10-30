// Task.js
import React from 'react';

const Task = ({ task }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '5px', margin: '5px' }}>
      <p>{task.description}</p>
      <button type="button">
        {/* Implement task completion functionality here */}
        Mark as Completed
      </button>
    </div>
  );
};

export default Task;
