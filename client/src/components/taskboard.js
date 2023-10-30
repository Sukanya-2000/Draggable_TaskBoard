// TaskBoard.js
import React from 'react';
import List from './List';

const TaskBoard = ({ lists }) => {
  return (
    <div>
      <h2>Task Board</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
