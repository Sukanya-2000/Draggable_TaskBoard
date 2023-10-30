// List.js
import React from 'react';
import Task from './Task';

const List = ({ list }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginRight: '10px' }}>
      <h3>{list.name}</h3>
      {list.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default List;
