import React, { useContext } from 'react';
import {MyContext} from './CreateTask'; // Import the context
import { Button } from '@mui/material';

const TaskList = () => {
  const { task } = useContext(MyContext);

  return (
    <div>
     {task.map((task,i) => (
    <div className="taskDiv" key={i}>
        <h3 className="input-label">{task.title}</h3>
        <p>{task.content}</p>
        <Button color='warning' variant='contained'>Sil</Button>
    </div>
))}
    </div>
  );
};

export default TaskList;
