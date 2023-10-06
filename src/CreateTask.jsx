import React, { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import TaskList from './TaskList';

export const MyContext = createContext();

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [task, setTask] = useState([]);

  const detectTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const detectContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleTask = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newTask = {
        title: title,
        content: content
      };

      setTask([...task, newTask]);
      setTitle(''); // Clear the title input
      setContent(''); // Clear the content textarea
    }
  };

  return (
    <>
      <div className='todoDiv'>
        <form className='createForm'>
          <input
            type='text'
            name='title'
            onChange={detectTitle}
            value={title}
            className='titleText'
            placeholder='Başlık'
          />

          <textarea
            name='content'
            className='form-control'
            onChange={detectContent}
            value={content}
            placeholder='İşinizi Yazınız'
            rows={3}
          ></textarea>

          <Button onClick={handleTask} sx={{ margin: '20px' }} variant="contained" color="success">
            Ekle
          </Button>
        </form>
      </div>

      <MyContext.Provider value={{ task, setTask }}>
        <TaskList />
      </MyContext.Provider>
    </>
  );
};

export default CreateTask;
